var task;

var tasks = [];

function add()
{
    task = document.getElementById("tasktext").value;
    tasks.push(task);
    console.log(tasks);
    var t = document.getElementById("tasks");
    taskhtml="";
    tasks.map(task=>taskhtml+=`<div class="task">${task}<button onclick="del(${task})">done</button></div>`)
    document.getElementById("tasks").innerHTML=taskhtml;

}

function del(task)
{

}