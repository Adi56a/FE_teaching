const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList  = document.getElementById('taskList');

addButton.onclick = function(){
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        const li  = document.createElement('li');
        li.textContent = taskText;


        console.log(taskText)

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete";



    }



}








