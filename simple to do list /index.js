// const inputItems = document.getElementById("inputitems");
// const additems = document.getElementById("additems");
// const items = document.getElementById("items");
// const clearBtn = document.getElementById("clearbtn");

// additems.onclick = function () {
//   if (inputItems.value.trim() === "") {
//     alert("Please entre a value");
//     return;
//   }
//   items.innerHTML += `<li>${inputItems.value} <button onclick='removeItem(event)'>remove</button></li>`;
//   inputItems.value = "";
//   inputItems.focus();
// };

// function removeItem(e) {
//   e.target.parentElement.remove();
// }
// function removeAllItems() {
//   items.innerHTML = "";
// }

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  // Create task element

  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
  taskItem.innerHTML = `
  <span>${taskText}</span> 
  <button class="deleteBtn">❌</button>`;
  taskInput.focus();
  // Add event listener to mark task as completed

  taskItem.querySelector("span").addEventListener("click", function () {
    this.classList.toggle("completed");
  });

  // Add event listener to delete task

  taskItem.querySelector(".deleteBtn").addEventListener("click", function () {
    taskItem.remove();
  });

  // Append to list and clear input
  taskList.appendChild(taskItem);
  taskInput.value = "";
}

// Event listener for add button
addTaskBtn.addEventListener("click", addTask);
// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Entre") {
    addTask();
  }
});
