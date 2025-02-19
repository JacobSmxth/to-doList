// Main variables
const todoList = document.querySelector(".todo-list")
const taskInput = document.querySelector("#input-box")
const taskButton = document.querySelector("#addTask")
const taskList = document.querySelector("#listContainer")
const taskCounter = document.querySelector("#counter")

// Keeping track of how many tasks there are
let listCounter = 0

// For quicker typing, i'm lazy
function l(v) {
    console.log(v)
}



function addTask() {
    let inputText = taskInput.value;
    const newTask = document.createElement('li')
    const newDelete = document.createElement('span')

    // Makes sure there is text in input before submiting
    if (inputText) {
        listCounter++;

        let taskText = document.createTextNode(inputText)
        newTask.append(taskText)
        newTask.append(newDelete)
        taskList.append(newTask)


        newDelete.classList.add("close")
        newDelete.classList.add('item' + listCounter)
        newTask.id = "item" + listCounter

        taskInput.value = "";
        taskCounter.innerText  = " " + listCounter
        } else {
            taskInput.placeholder = "Please add task before submitting";

            setTimeout(() => {
                taskInput.placeholder = "Add your task"
            }, 2750)
        }
}

// Adding task event
taskButton.addEventListener("click", addTask)



// Global document event listener
document.addEventListener("click", (e) => {
    const item = e.target
    const itemClass = item.classList
    const selectItem = document.getElementById(item.id)

    // Removing task event
    if(itemClass.contains("close")) {
        
        let listItemID = itemClass[1]
        const removedItem = document.getElementById(listItemID)

        removedItem.remove()
        listCounter--
        taskCounter.innerText  = " " + listCounter
    }

    // Finish task event

    if (selectItem) {
        selectItem.classList.toggle("checked")
    }
})

