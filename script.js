let users =[];
    /* {
        'id': 0,
        'firstname': 'Dominik',
        'lastname': 'Waldow',
        'email': 'dominik@join.com',
        'password': '01234',
        'category': 2,
        'avatar': 'img/avatar1.jpg'
    },
    {
        'id': 1,
        'firstname': 'Patrick',
        'lastname': 'Sterz',
        'email': 'admin',
        'password': 'admin',
        'category': 3,
        'avatar': 'img/avatar2.jpg'
    },
    {
        'id': 2,
        'firstname': 'Mentor',
        'lastname': 'Mentor',
        'email': 'mentor@join.com',
        'password': '56789',
        'category': 1,
        'avatar': 'img/avatar/3.png'
    } */

let allTasks = [];
    /* {
        'id': 0,
        'level': 'todo',
        'task': 'Test',
        'description': 'Lorem ipsum.',
        'user': 'Dominik',
        'dueDate': '20.09.2022'
    },
    {
        'id': 1,
        'level': 'inProgress',
        'task': 'Test2',
        'description': 'Lorem ipsum.',
        'user': 'Patrick',
        'dueDate': '22.10.2022'
    } */


let avatar = ['img/avatar1.jpg','img/avatar2.jpg'];
let selectedUsers = [];
let dragTaskId;
let currentUser;


function init() {
    backendPull();
    /* backendPush(); */
    loadLogin();
    /* loadContent(); */
    renderAvatar();
}

function renderAvatar() {
    document.getElementById('persons').innerHTML = '';
    for (let i = 0; i < avatar.length; i++) {
        const avatare = avatar[i];
        document.getElementById('persons').innerHTML += templateAvatare(i, avatare);
    }
}

function templateAvatare(i, avatare) {
    return /*html*/ `
    <img id="user-${i}" onclick="selectUser(${i})" src="${avatare}" class="avatar">`;
}

function selectUser(i) {
    let user = document.getElementById('user-' + i);
    user.classList.toggle('avatar-selected');
    selectedUsers.push(users[i]);
    if(selectedUsers.includes(users[i])) {
        selectedUsers = selectedUsers.filter(a => a != users[i]);
    }
    selectedUsers.push(users[i])  
}

async function backendPull(){
    await downloadFromServer();
    let usersAsString = await backend.getItem('users');
    let tasksAsString = await backend.getItem('allTasks');
    if(usersAsString && tasksAsString){
        users = JSON.parse(usersAsString);
        allTasks = JSON.parse(tasksAsString);
    }
}

async function backendPush(){
    let tasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks',tasksAsString);
    let usersAsString = JSON.stringify(users);
    await backend.setItem('users',usersAsString);
}

function loadLogin(){
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateLogin();
}

function login(){
    let setEmail = document.getElementById('email').value;
    let setPassword = document.getElementById('password').value;
    for(let i = 0; i < users.length; i++){
        if(users[i].email == setEmail){
            if(users[i].password == setPassword){
                currentUser = users[i];
                loadContent();
            }
        }
    }
}

function loadContent() {
    if(!currentUser){
        alert('please Login')
    }else{
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateContent();
    }
}

/**
 * This function let show you the taskboard.
 */
function loadBoard() {
    if(!currentUser){
        alert('please Login')
    }else{
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateBoard();  
        loadTasks(); 
    }
}

function loadTasks(){
    for (let i=0; i < allTasks.length; i++){
        let currentTask = allTasks[i];
        if(currentTask.level == 'todo'){
            document.getElementById('todoField').innerHTML += templateLoadTasks(currentTask);
        }else if(currentTask.level == 'inProgress'){
            document.getElementById('inProgressField').innerHTML += templateLoadTasks(currentTask);
        }else if(currentTask.level == 'inTesting'){
            document.getElementById('inTestingField').innerHTML += templateLoadTasks(currentTask);
        }else if(currentTask.level == 'done'){
            document.getElementById('doneField').innerHTML += templateLoadTasks(currentTask);
        }
    }
}

function resetTasks(){
    document.getElementById('todoField').innerHTML = ``;
    document.getElementById('inProgressField').innerHTML = ``;
    document.getElementById('inTestingField').innerHTML = ``;
    document.getElementById('doneField').innerHTML = ``;
    loadTasks();
}

function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(id){
    dragTaskId = id;
}

function drop(dropzone){
    for(let i=0;i<allTasks.length;i++){
        if(allTasks[i].id == dragTaskId){
            allTasks[i].level = dropzone;
            break;
        }
    }
    backendPush();
    resetTasks();
}

function loadBacklog(){
    if(!currentUser){
        alert('please Login')
    }else{
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateBacklog();  
        loadBacklogContent(); 
    }
}

function loadBacklogContent(){
    let content = document.getElementById('backlogField');
        content.innerHTML = templateBacklogHeader();
    if(allTasks.length === 0){
        content.innerHTML += templateEmptyLog();
    }else{
        for(let i = 0; i<allTasks.length;i++){
            content.innerHTML += templateBacklogContent(allTasks[i]); 
        }
    }  
}

function deleteTask(id){
    for(let i=0;i<allTasks.length;i++){
        if(allTasks[i].id == id){
            allTasks.splice(i,1);
            backendPush()
            loadBacklogContent()
        }
    }
}

/**
 * This function let show you AddTask.
 */

function loadAddTask() {
    if(!currentUser){
        alert('please Login')
    }else{
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateAddTask();
    }
}

function loadImpressum() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateImpressum();
}

function loadDatenschutz() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateDatenschutz();
}

function clearTask() {
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('catergory').value = '';
    document.getElementById('description').value = '';
    document.getElementById('urgency').value = '';  
}

async function createTask() {
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catergory = document.getElementById('catergory');
    let description = document.getElementById('description');
    let urgency = document.getElementById('urgency');
    let task = {
        'title': title.value,
        'date': date.value,
        'catergory': catergory.value,
        'description': description.value,
        'urgency': urgency.value,
        'level': 'todo',
        'id': allTasks.length + 1,  //Counter bauen
        'user': 'Patrick'           //User hinzufügen
    }
    
    allTasks.push(task);
    backendPush();
    clearTask();
}

