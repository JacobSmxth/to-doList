// Main variables
const todoList = document.querySelector(".todo-list")
const taskInput = document.querySelector("#input-box")
const taskButton = document.querySelector("#addTask")
const taskList = document.querySelector("#listContainer")
const taskCounter = document.querySelector("#counter")
let closeables = document.getElementsByClassName("close")

// Keeping track of how many tasks there are
let listCounter = 0

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
    // Create new object representing the task
    // Conditional to check for input, to avoid blank tasks
    if (task) {
        const newItem = {
            id: Date.now(),
            task: task,
            checked: false,
        };

        // Pushes the data to the array
        listData.push(newItem)

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

function checkTask(taskItem) {
    const taskID = parseInt(taskItem.dataset.id, 10)
    const index = listData.findIndex(task => task.id === taskID)
    if (index !== -1) {
        switch (listData[index].checked) {
            case true:
                listData[index].checked = false;
                break;
            case false:
                listData[index].checked = true;
                break;
            default:
                l("ERROR!")
                break;
        }
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
        updateUI(task.task, task.id)
    })
    updateCounter()
}

// Function to add item to UI
function updateUI(string, id) {
    const newTask = document.createElement('li')
    const newDelete = document.createElement('span')
    const taskNode = document.createTextNode(string)
    newTask.append(taskNode)
    newTask.append(newDelete)
    taskList.append(newTask)
    newTask.classList.add("task")
    newDelete.classList.add("close")
    newDelete.dataset.id = id;
}

taskButton.addEventListener("click", () => addTask(taskInput.value))

taskList.addEventListener('click', (e) => {
    let clicked = e.target;

    if(clicked.className === "close") {
        removeTask(clicked)
    }

    if(clicked.className === "task") {
        checkTask(clicked)
    }
})






// On page load, this will retrieve any localStorage
loadTasks()
updateTasks()
