function addProject(){

let input = document.getElementById("projectInput");

let projectName = input.value;

if(projectName === ""){
  alert("Enter Project Name");
  return;
}

let project = document.createElement("div");

project.classList.add("project");

project.innerHTML = `

<h2>${projectName}</h2>

<p class="status">Project Status: Active</p>

<div class="member">👨‍💻 Team Member: Usha Sri</div>

<br><br>

<input type="text" class="taskInput" placeholder="Enter Task">

<button onclick="addTask(this)">Add Task</button>

<div class="tasks"></div>

`;

document.getElementById("projects").appendChild(project);

input.value = "";

alert("Project Created Successfully 🎉");

}

function addTask(button){

let parent = button.parentElement;

let taskInput = parent.querySelector(".taskInput");

let taskText = taskInput.value;

if(taskText === ""){
  alert("Enter Task");
  return;
}

let task = document.createElement("div");

task.classList.add("task");

task.innerHTML = `

<h3>${taskText}</h3>

<p>Status: Pending ⏳</p>

<div class="task-buttons">

<button onclick="assignTask(this)">Assign Task</button>

<button onclick="completeTask(this)">Complete ✅</button>

<button onclick="addComment(this)">Comment 💬</button>

</div>

<div class="comments"></div>

`;

parent.querySelector(".tasks").appendChild(task);

taskInput.value = "";

alert("Task Added 🔥");

}

function assignTask(button){

button.innerText = "Assigned ✅";

button.style.background = "green";

alert("Task Assigned to Team Member");

}

function completeTask(button){

button.parentElement.parentElement.querySelector("p").innerText = "Status: Completed ✅";

button.style.background = "green";

alert("Task Completed 🎉");

}

function addComment(button){

let task = button.parentElement.parentElement;

let commentsDiv = task.querySelector(".comments");

let commentInput = document.createElement("input");

commentInput.placeholder = "Write Comment";

let commentBtn = document.createElement("button");

commentBtn.innerText = "Add Comment";

commentBtn.onclick = function(){

if(commentInput.value === ""){
alert("Write Comment");
return;
}

let comment = document.createElement("div");

comment.classList.add("comment");

comment.innerText = commentInput.value;

commentsDiv.appendChild(comment);

commentInput.value = "";

}

commentsDiv.appendChild(commentInput);

commentsDiv.appendChild(commentBtn);

}