# ✅ To-Do List App

A **simple task manager** that lets users add, track, and delete tasks. Designed for **efficiency and ease of use** in a portfolio setting.

---

## 📌 Project Overview

This application helps users manage daily tasks through a clean, straightforward interface. It leverages vanilla JavaScript to dynamically add, remove, check off, and persist tasks **using LocalStorage**, ensuring that tasks remain intact even after the page is refreshed or the browser is closed.

---

## 📋 What Has Been Done

### Implemented Features
- **Add Tasks:**
  - Users can enter a task in the input field and add it to the list.
  - Duplicate tasks are prevented with a simple check before adding.
- **Mark Tasks as Completed:**
  - Clicking on a task toggles its completion status, adding a strikethrough style.
  - Completed tasks move to the **top** of the list to emphasize current priorities.
- **Delete Tasks:**
  - Each task has a dedicated "close" button, making task removal straightforward.
- **LocalStorage Persistence:**
  - Tasks are stored in LocalStorage (`listData` array is serialized and saved).
  - On page load, any existing tasks are retrieved and rendered automatically.
- **Task Counter:**
  - A dynamic counter tracks the total number of tasks in real time.

### Code Highlights
- **Array-Based Data Model (`listData`):**
  - Each task is an object (`{ id, task, checked }`) for easier state management.
- **LocalStorage Integration:**
  - `saveTasks()` and `loadTasks()` functions handle reading from and writing to LocalStorage.
- **DOM Manipulation & Event Handling:**
  - A single click listener on the list differentiates between deleting a task vs. toggling it.
  - Tasks are (re)rendered using `updateTasks()`, ensuring a clean UI and consistent state.
- **Validation & Feedback:**
  - Basic validation ensures the user doesn’t add empty tasks.
  - Alerts inform the user of duplicates or invalid inputs.

---

## 🔄 Future Plans & Enhancements

Despite the current functionality, there’s room to grow:

- **Edit Task Names:**
  - Allow in-line editing of tasks after they are added.
- **Drag & Drop Reordering:**
  - Let users drag tasks to rearrange their order manually.
- **Dark Mode Toggle:**
  - Provide a dark theme for easier reading in low-light environments.
- **Task Filtering:**
  - Offer filter views (e.g., “All,” “Active,” “Completed”).
- **Enhanced Task Statistics:**
  - Show a breakdown of active vs. completed tasks.

---

## 🛠 Tech Stack

- **HTML** → Structure and semantic layout
- **CSS** → Styling and responsive design
- **JavaScript (Vanilla JS)** → Core functionality (adding, toggling, removing tasks, LocalStorage operations)
- **LocalStorage** → Client-side persistence

---

## 🚀 Deployment

1. **Clone or Download** this repo onto your local machine.
2. Open `index.html` in your web browser, or serve it from a simple local server.
3. Your tasks will automatically be saved in your browser’s LocalStorage. Refresh or close the page and they’ll still be there when you return.
4. Optionally, push changes to GitHub and enable **GitHub Pages** to share your project easily.

---

## 📺 What This App Demonstrates

- **Fundamental DOM Manipulation** with Vanilla JS
- **Event Handling** (click events, input validation)
- **Data Persistence** with LocalStorage
- **User-Friendly UI** (clear feedback, minimalistic design)
- **Modular Code Organization** (functions for adding, removing, toggling, and rendering tasks)

---

### Thanks for checking out the To-Do List App!
Feel free to open issues or submit pull requests for any ideas or improvements. Enjoy staying organized!
