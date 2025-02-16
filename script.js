const todoList = document.querySelector(".todo-list")
const taskInput = document.querySelector("#input-box")
const taskButton = document.querySelector("#addTask")
const taskList = document.querySelector("#listContainer")
const taskCounter = document.querySelector("#counter")

let listCounter = 0


taskButton.addEventListener("click", () => {
    let inputText = taskInput.value
    const newTask = document.createElement('li')

    if (inputText) {
        listCounter++;

        // TODO: Add some sort of element to delete task when user wants to.
        // It needs to be given class name to style it correctly and some identifier to correctly delete the right task to delete. I'm thinking use the listCounter variable to keep things simple
        let taskText = document.createTextNode(inputText)
        newTask.append(taskText)
        taskList.append(newTask)

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

