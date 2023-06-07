
const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const taskList = document.querySelector('.taskList');
const deleteAllBtn = document.querySelector('.deleteAllBtn');

//events

addBtn.addEventListener('click', function () {

    if (input.value === '') {
        alert('add new task');
    } else {
        //create element

        var li = document.createElement('li');
        li.className = 'listItem';
        li.textContent = input.value;
        var button = document.createElement('button');
        button.className = 'deleteBtn';
        button.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
        li.appendChild(button);

        input.value = '';

        taskList.appendChild(li);
    }


});

taskList.addEventListener('click', function (e) {

    if(confirm('Are you sure?')){
    if (e.target.className === 'fa-solid fa-xmark fa-xl') {
        e.target.parentElement.parentElement.remove();
    }}
})


deleteAllBtn.addEventListener('click', function () {

    if (confirm('Are you sure?')) {
        taskList.remove();
        window.location.reload();

        /*taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        })*/

        /*while(taskList.firstChild){
            taskList.replaceChild(taskList.firstChild)
        };*/

    }

})

