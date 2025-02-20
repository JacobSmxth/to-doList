// Main variables
const todoList = document.querySelector(".todo-list")
const taskInput = document.querySelector("#input-box")
const taskButton = document.querySelector("#addTask")
const taskList = document.querySelector("#listContainer")
const taskCounter = document.querySelector("#counter")
let closeables = document.getElementsByClassName("close")

// For quicker typing, i'm lazy
function l(v) {
    console.log(v)
}

let listData = []


// This function saves the current items in listData array to localStorage
function saveTasks() {
    localStorage.setItem("listData", JSON.stringify(listData))
}

// This function loads the current items in the localStorage into the page
function loadTasks() {
    const storedTasks = localStorage.getItem("listData")
    if (storedTasks) {
        listData = JSON.parse(storedTasks)
    }
}

// This function is to add a new item to the list
function addTask(task) {
    // Check for duplicates
    const foundDuplicate = listData.some(data => data.task === task)
    // Create new object representing the task
    // Conditional to check for input, to avoid blank tasks
    if (!task) {
        alert("Please enter a task into the input!")
    } else if (foundDuplicate) {
        alert("You have already added that task!")
        taskInput.value = ""
    } else{
        const newItem = {
            id: Date.now(),
            task: task,
            checked: false,
        };

        // Pushes the data to the array
        listData.push(newItem)

        // Clear input for next task
        taskInput.value = ""

        // Save the array to localStorage
        saveTasks()

        // Updates the UI and counter
        updateTasks()
    } 
}

// This function is to remove any task the user wants to remove from list
function removeTask(taskItem) {
    const taskID = parseInt(taskItem.dataset.id, 10)
    listData = listData.filter(task => task.id !== taskID)
    saveTasks()
    updateTasks()
}

// Checks the task and moves them to top of list
function checkTask(id) {
    const index = listData.findIndex(task => task.id === id)
    if (index !== -1) {
        listData[index].checked = !listData[index].checked
    }

    // move task to top of list
    if (listData[index].checked) {
        let temp = listData[index];
        listData = listData.filter(task => task.id !== listData[index].id)

        listData.unshift(temp)

    }

    saveTasks()
    updateTasks()
}

// Function to update the task counter after every action to the list
function updateCounter() {
    let num;
    num = listData.length
    taskCounter.innerText = "" + num;
}

// This function updates the DOM to adjust list based on listData array
function updateTasks() {
    // Checks for anything in the list prior to adding to the ui
    if(taskList.firstChild) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild)
        }
    }
    listData.forEach(task => {
        updateUI(task.task, task.id, task.checked)
    })
    updateCounter()
}

// Function to add item to UI
function updateUI(string, id, checked) {
    const newTask = document.createElement('li')
    const newDelete = document.createElement('span')
    const taskNode = document.createTextNode(string)
    newTask.append(taskNode)
    newTask.append(newDelete)
    taskList.append(newTask)
    newTask.classList.add("task")
    newTask.dataset.id = id;
    newDelete.classList.add("close")
    newDelete.dataset.id = id;

    if (checked) {
        newTask.classList.add('checked')
    }
}

// Detects any click of the add task button
taskButton.addEventListener("click", () => addTask(taskInput.value))

taskList.addEventListener('click', (e) => {
    let clicked = e.target;
    let clickID = parseInt(clicked.dataset.id, 10);


    // Checks to see if user wants to delete task
    if(clicked.className === "close") {
        removeTask(clicked)
        return
    }

    // Otherwise assume user is trying to check off task
    checkTask(clickID)

})


// On page load, this will retrieve any localStorage
loadTasks()
updateTasks()
