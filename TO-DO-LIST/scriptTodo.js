const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
// For button
/*Inorder toadd tasks into the list container,
 we need to construct a function that will respond onClick */
function addTask(){
    if((inputBox.value) === '')
    {
        alert("Please add your task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // adding a cross icon next to every task as a span
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI")
    {
        event.target.classList.toggle("checked");
        saveData();
       
    }
    
    else if(event.target.tagName === "SPAN")
    {
        event.target.parentElement.remove();
        saveData();
    }
}, false)
// Stroing the exixting as well as new data of todo list in local storage on webpage

// Save the information Locally
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//Display existing and new tasks added whenever we refresh or open the browser in local storage
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();