const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// Adds task to list of todos displayed below input
function addTask () {
    if (inputBox.value === '') {
        alert('You have to write a todo!')
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    } 
    inputBox.value = "";
    saveData();
}

// let's a user also use enter to add task (not just click the button)
inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { 
      event.preventDefault();
      addTask();
    }
});

// Added event listener to check a task that is done and remove a task by touching the X element as created in the span element
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Saves list data so it is there on reload of browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Shows tasks that are reloaded when app is reloaded
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
