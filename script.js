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

// Switch Section /////////////////////////////////////////////////////////////////////////////////////////////////////

function categoryText(category){
    let text = 'gray';
    switch(category){
        case '1':
            text = 'Management';
            break;
        case '2':
            text = 'Software Development';
            break;
        case '3':
            text = 'UX/UI Desing';
            break;
        case '4':
            text = 'Human Resources';
            break;
    }
    return text;
}

function categoryColor(category){
    let col = 'gray';
    switch(category){
        case '1':
            col = '#bd5454';
            break;
        case '2':
            col = '#72a54e';
            break;
        case '3':
            col = '#54bdbd';
            break;
        case '4':
            col = '#7f54bd';
            break;
    }
    return col;
}

function bellColor(urgency){
    let col = 'green';
    switch(urgency){
        case '1':
            col = 'red';
            break;
        case '2':
            col = 'yellow';
            break;
        case '3':
            col = 'green';
            break;
    }
    return col;
}

// Backend Section ////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Login Section ////////////////////////////////////////////////////////////////////////////////////////////////////

function loadLogin(){
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateLogin();
}

function login(){
    let setEmail = document.getElementById('email').value;
    let setPassword = document.getElementById('password').value;
    let wrongEmail = true;
    let wrongPassword = true;
    let usr;
    for(let i = 0; i < users.length; i++){
        if(users[i].email == setEmail){
            wrongEmail = false;
            if(users[i].password == setPassword){
                wrongPassword = false;
                usr = i;
            }
        }
    }
    userLogin(usr, wrongEmail, wrongPassword);
}

function userLogin(usr, wrongEmail, wrongPassword){
    if(!wrongEmail && !wrongPassword){
        currentUser = users[usr];
        loadContent();
    }else if(!wrongEmail && wrongPassword){
        alert('wrong Password!');
    }else if (wrongEmail){
        alert('email doesn`t exist!');
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

// Taskboard Section ////////////////////////////////////////////////////////////////////////////////////////////////

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

// Backlog Section ///////////////////////////////////////////////////////////////////////////////////////////////////

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

// Add Task Section //////////////////////////////////////////////////////////////////////////////////////////////////////

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
    let id = allTasks.length;
    let task = {
        'title': title.value,
        'date': date.value,
        'catergory': catergory.value,
        'description': description.value,
        'urgency': urgency.value,
        'level': 'todo',
        'id': id,  
        'user': 'Patrick'           //User hinzufügen
    }
    
    allTasks.push(task);
    backendPush();
    clearTask();
}

// footer Section ///////////////////////////////////////////////////////////////////////////////////////////////////////

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

