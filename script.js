let users = [];
let allTasks = [];
let avatar = [];
let selectedUsers = [];
let UserRegisterURL;
let dragTaskId;
let currentUser;

function init() {
    backendPull();
    loadLogin();
}

// Backend Section ////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function download the tasks from the server.
 */
async function backendPull() {
    await downloadFromServer();
    let tasksAsString = await backend.getItem('allTasks');
    if (tasksAsString) {
        allTasks = JSON.parse(tasksAsString);
    }
}

/**
 * This function download the users from the server.
 */
async function userBackendPull() {
    await downloadFromServer();
    let usersAsString = await backend.getItem('users');
    if (usersAsString) {
        users = JSON.parse(usersAsString);
    }
}

/**
 * This function uploads the tasks to the server.
 */
async function backendPush() {
    let tasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', tasksAsString);
}

/**
 * This function uploads the users to the server.
 */
 async function userBackendPush() {
    let usersAsString = JSON.stringify(users);
    await backend.setItem('users',usersAsString);
}


// Taskboard Section ////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function load the tasks in the right status field.
 */
function loadTasks() {
    for (let i = 0; i < allTasks.length; i++) {
        let currentTask = allTasks[i];
        if(currentTask.intoBoard == 1){
            if (currentTask.level == 'todo') {
                document.getElementById('todoField').innerHTML += templateLoadTasks(currentTask);
            } else if (currentTask.level == 'inProgress') {
                document.getElementById('inProgressField').innerHTML += templateLoadTasks(currentTask);
            } else if (currentTask.level == 'inTesting') {
                document.getElementById('inTestingField').innerHTML += templateLoadTasks(currentTask);
            } else if (currentTask.level == 'done') {
                document.getElementById('doneField').innerHTML += templateLoadTasks(currentTask);
            }
        }
    }
}

/**
 * This function update the status fields.
 */
function resetTasks() {
    document.getElementById('todoField').innerHTML = ``;
    document.getElementById('inProgressField').innerHTML = ``;
    document.getElementById('inTestingField').innerHTML = ``;
    document.getElementById('doneField').innerHTML = ``;
    loadTasks();
}

/**
 *  This function find and returns the image from id.
 * 
 * @param {integer} user 
 * @returns 
 */
function findImage(user){
    for(let i=0; i<avatar.length; i++){
        if(avatar[i].id == user){                 
            return avatar[i].avatar;
        }
    }
    return 'LoginToSeePics'
}

/**
 *  This function find and returns the name from id.
 * 
 * @param {integer} user 
 * @returns 
 */
function findName(user){
    for(let i=0; i<avatar.length; i++){
        if(avatar[i].id == user){                 
            return avatar[i].name;
        }
    }
}

/**
 * This function allows a dropsection.
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * This function stores the id in a variable.
 *
 * @param {string} id
 */
function drag(id) {
    dragTaskId = id;
}

/**
 * This function change the ID from droped task and update the database.
 *
 * @param {string} dropzone
 */
function drop(dropzone) {
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id == dragTaskId) {
            allTasks[i].level = dropzone;
            break;
        }
    }
    backendPush();
    resetTasks();
}


// Backlog Section ///////////////////////////////////////////////////////////////////////////////////////////////////

function uploadIntoBoard(id){
    for(let i = 0; i < allTasks.length; i++){
        if(allTasks[i].id == id){
            allTasks[i].intoBoard = 1;
            hideUploadBtn(id);
        }
    }
    loadBacklog();
}

function hideUploadBtn(id){
    let btn = document.getElementById('uploadBtn-' + id);
    btn.classList.add('d-none');
    
}

/**
 * This function load the tasks in the backlog.
 */
function loadBacklogContent() {
    let content = document.getElementById('backlogField');
    content.innerHTML = templateBacklogHeader();
    let tBody = document.getElementById("backlogTable").tBodies.namedItem("backlogTableBody");
    if (allTasks.length === 0) {
        content.innerHTML += templateEmptyLog();
    } else {
        for (let i = 0; i < allTasks.length; i++) {
            let hideBtn = '';
            if(allTasks[i].intoBoard == 1){
                hideBtn = 'd-none';
            }
            tBody.innerHTML += templateBacklogContent(allTasks[i], hideBtn);
        }
    }
}

/**
 * This function delete the task with the correct ID.
 *
 * @param {string} id
 */
function deleteTask(id) {
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id == id) {
            allTasks.splice(i, 1);
            backendPush();
            loadBacklogContent();
            
        }
    }
}

/**
 * This function init the infobox for a Task in mobile view.
 * 
 * @param {integer} id 
 */
function infoTask(id){
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id == id) {
            let content = document.getElementById('backlogField');
            content.innerHTML += templateLoadInfo(allTasks[i]);
        }
    }
}

/**
 * This function init the edit for a Task.
 * 
 * @param {integer} id 
 */
function editTask(id){
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id == id) {
            checkCreator(i);
        }
    }
}

function checkCreator(i){
    if(allTasks[i].creator == currentUser.id){
        let content = document.getElementById('content');
        content.innerHTML = templateLoadEdit(allTasks[i]);
    }else{
        alert('you are not the creator of this task.')
    }
}

/**
 * This function select the current choise of categories and urgencys.
 * 
 * @param {string} currentValue 
 * @param {string} value 
 * @returns 
 */
function select(currentValue, value){
    if(currentValue == value){
        return "selected";
    }else{
        return " ";
    }
}

/**
 * This function select the current choise of the avatar.
 * 
 * @param {integer} id 
 */
function renderCurrentAvatar(id) {
    document.getElementById('persons').innerHTML = ``;
    for (let i = 0; i < avatar.length; i++) {
        if(avatar[i].id == id){
            const avatare = avatar[i].avatar;
            const name = avatar[i].name;
            document.getElementById('persons').innerHTML += templateCurrentAvatare(i, avatare,name);
        }else{
            const avatare = avatar[i].avatar;
            const name = avatar[i].name;
            document.getElementById('persons').innerHTML += templateAvatare(i, avatare,name);
        }
        
    }
}


// Add Task Section //////////////////////////////////////////////////////////////////////////////////////////////////////

function renderAvatar() {
    document.getElementById('persons').innerHTML = ``;
    for (let i = 0; i < avatar.length; i++) {
        const avatare = avatar[i].avatar;
        const name = avatar[i].name;
        const id = avatar[i].id
        document.getElementById('persons').innerHTML += templateAvatare(i, avatare, name, id);
    }
}

function selectUser(index, id) {
        selectedUsers = [];
        let user = document.getElementById('user' + index);
        for(let i = 0; i < avatar.length; i++){
            let allUser = document.getElementById('user' + i);
            allUser.classList.remove('avatar-selected');
        }
        user.classList.toggle('avatar-selected');
        selectedUsers.push(avatar[index]);
}

function clearTask() {
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('catergory').value = '';
    document.getElementById('description').value = '';
    document.getElementById('urgency').value = '';
    selectedUsers = [];
    const el = document.querySelector('.avatar');
    el.classList.remove("avatar-selected");

}

async function createTask(currentId) {
    let id;
    if(!currentId){
        id = pickNextId();
    }else{
        deleteCurrentTask(currentId);
        id = currentId;
    }
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catergory = document.getElementById('catergory');
    let description = document.getElementById('description');
    let urgency = document.getElementById('urgency');
    setValuesTask(title, date, catergory, description, urgency, id);
}

function deleteCurrentTask(currentId){
    for(let i = 0; i < allTasks.length; i++){
        if(allTasks[i].id == currentId){
            allTasks.splice(i,1);
        }
    }
}

function setValuesTask(title, date, catergory, description, urgency, id){
    if (selectedUsers.length > 0) {
        let usersnames = '';
        let userArr = selectedUsers.map(el => {return el.id});
        let task = {
            'title': title.value,
            'date': date.value,
            'catergory': catergory.value,
            'description': description.value,
            'urgency': urgency.value,
            'level': 'todo',
            'id': id,
            'user': userArr.join(),
            'creator': currentUser.id,
            'intoBoard': 0
        };
        allTasks.push(task);
        backendPush();
        clearTask();
        loadBacklog();
    } else {
        alert('please select a user')
    }
}

function pickNextId(){
    let highestID = 0;
    if (allTasks.length != 0) {
        var highestIDArr = allTasks.map(task => {
            if ('id' in task && task.id) {
                return task.id;
            } else {
                return 0;
            }
        })
        highestID = Math.max(...highestIDArr);
    }  
    return highestID + 1;
}