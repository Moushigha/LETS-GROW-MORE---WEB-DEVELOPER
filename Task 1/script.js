function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (!taskInput.value) {
      alert("Please enter a task.");
      return;
    }
  
    const taskItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const taskSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
  
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>'; // FontAwesome delete icon
    deleteButton.classList.add("delete-button");
  
    checkbox.type = "checkbox";
    taskSpan.textContent = taskInput.value;
  
  
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        taskSpan.classList.add("completed");
      } else {
        taskSpan.classList.remove("completed");
      }
    });
  
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });
  
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
  
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear the input field
  }