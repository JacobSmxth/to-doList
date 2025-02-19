# ✅ To-Do List App

A **simple task manager** that lets users add, track, and delete tasks. Designed for **efficiency and ease of use** in a portfolio setting.

---

## 📌 Project Overview

This application helps users manage daily tasks through a clean, straightforward interface. It leverages vanilla JavaScript to dynamically add, remove, and update tasks in the DOM.

---

## 📋 What Has Been Done

### Implemented Features (MVP):
- **Add Tasks:**  
  Users can enter a task in the input box and add it to the list.
- **Mark Tasks as Completed:**  
  Clicking on a task toggles its completion status, visually represented by a "checked" style.
- **Delete Tasks:**  
  Each task comes with a delete button (styled as a span element) to remove it from the list.
- **Task Counter:**  
  A counter tracks the number of tasks and updates as tasks are added or removed.

### Code Highlights:
- **DOM Selection & Manipulation:**  
  Key elements like the task input, button, list container, and counter are selected from the DOM.
  
- **Event Listeners:**  
  - The **Add Task** button triggers the `addTask()` function, which creates new tasks in the list.
  - A global click event listener handles both deletion (via a delete button) and toggling a task’s completion state.
  
- **User Feedback:**  
  Basic validation checks ensure the input field isn't empty before adding a task, with placeholder updates prompting user action.

---

## 🔄 New Plans & Future Enhancements

### Data Structure Enhancement:
- **Switch to an Array-Based Model:**  
  Plan to maintain a centralized array of task objects instead of managing tasks solely through the DOM.
  - **Benefits:**  
    - Easier manipulation (adding, updating, deleting tasks).
    - Simplifies implementation of features like task editing or reordering.
    - Centralizes task data for better state management.

### Data Persistence:
- **LocalStorage Integration:**  
  Future improvements include saving the array of tasks to localStorage by serializing it as a JSON string.
  - **How It Works:**  
    - Update the array when tasks are added, modified, or removed, then save the updated data.
    - On page load, check localStorage for existing data, parse it, and rebuild the task list accordingly.

### Optional Features (Stretch Goals):
- **Edit Task Names:**  
  Allow users to modify tasks after they are added.
- **Drag & Drop Reordering:**  
  Enable users to rearrange tasks via drag and drop.
- **Dark Mode Toggle:**  
  Provide a dark mode option for enhanced user experience.
- **Task Filtering:**  
  Add options to filter tasks by status (All, Active, Completed).
- **Enhanced Task Count:**  
  Update the counter to reflect different states (active vs. completed).

---

## 🛠 Tech Stack
- **HTML** → Structure of the page
- **CSS** → Styling and layout
- **JavaScript (Vanilla JS)** → Functionality (handling tasks, storage, event listeners)
- **LocalStorage** → Data persistence (planned feature)
- **GitHub Pages** → Simple deployment

---

## 🚀 Deployment Plan

For portfolio purposes, this project is developed locally and deployed via GitHub Pages for easy sharing and demonstration.

---

## 📌 Next Steps
- **Refactor Code:**  
  Transition to managing tasks using an array-based model for easier manipulation and localStorage integration.
- **Implement Persistence:**  
  Save and retrieve tasks using localStorage so that tasks persist across page refreshes.
- **Enhance the User Experience:**  
  Gradually introduce optional features like editing, reordering, dark mode, and filtering.

---

## 📺 What This App Demonstrates
- **Basic JavaScript DOM Manipulation**
- **Event Handling (Click, Input, etc.)**
- **Dynamic UI Updates**
- **Data Persistence (with future LocalStorage integration)**
- **Thoughtful UI/UX Design (with planned enhancements)**
