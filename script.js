const todoList = document.querySelector(".todo-list")
const taskInput = document.querySelector("#input-box")
const taskButton = document.querySelector("#addTask")
const taskList = document.querySelector("#listContainer")
const taskCounter = document.querySelector("#counter")
const deletePopup = document.querySelector("#deletePopup")


let listCounter = 0
let temp

function l(v) {
    console.log(v)
}

// Adding task event
taskButton.addEventListener("click", () => {
    let inputText = taskInput.value
    const newTask = document.createElement('li')
    const newDelete = document.createElement('span')
    
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
            }, "2750")
        }

});

// Removing task event
document.addEventListener("click", (e) => {
    const item = e.target
    const itemClass = item.classList


    if(itemClass.contains("close")) {
        
        let listItemID = itemClass[1]
        const removedItem = document.getElementById(listItemID)
        temp = removedItem.innerHTML
        removedItem.remove()
        listCounter--
        taskCounter.innerText  = " " + listCounter
    }

})

// Finish task 
document.addEventListener('click', (e) => {
    const item = e.target;
    const selectItem = document.getElementById(item.id)

    
    switch (selectItem.className) {
        case "":
            selectItem.className = "checked"
            break;
        case "checked":
            selectItem.className = ""
            break;
        default:
            l("failed")
            break;
    }
})