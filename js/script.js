const myForm = document.getElementById('main-form')

myForm.addEventListener('submit', function (e){
    e.preventDefault();
    let taskField = document.getElementById('task-input')
    let task = taskField.value
    
    let whereToAdd = document.querySelector('#to-do-list')
    let taskToAdd = document.createElement("div")
    taskToAdd.innerHTML = `
    <button>-</button>
    <p>${task}</p>
    `
    taskToAdd.classList.add("task")
    whereToAdd.appendChild(taskToAdd)
    addButtonsListener()
    addTasksListener()
    taskField.value = ""
})

const addButtonsListener = function(){
    const allRemoveButton = document.querySelectorAll('#to-do-list button')
    allRemoveButton.forEach((button) => {
        button.addEventListener('click', function(e){
            let buttonClicked = e.target
            let taskToRemove = buttonClicked.parentElement
            taskToRemove.remove()
            console.log(buttonClicked)
        })
    }) 
}

const addTasksListener = function(){
    const allTasks = document.querySelectorAll('#to-do-list p')
    let lastTask = allTasks[allTasks.length- 1]
    lastTask.addEventListener('click', function (a){
            a.target.classList.toggle('taskDid')
            if (a.target.classList.contains("taskDid"))
            {
                let dataDidIt = document.createElement('p')
                dataDidIt.classList.add('time-didIt')
                today = new Date()
                time ='Completata il giorno: ' + today.getDate() +' '+ (today.toLocaleString('default', { month: 'short' })) + ' ore: ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                dataDidIt.innerText = time
                a.target.parentElement.appendChild(dataDidIt)
            }
            else{
                let dataToRemove = a.target.nextElementSibling;
                dataToRemove.remove()
                console.log('dataToRemove', dataToRemove)
            }
        })
}
