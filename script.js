let users = [];
/* {
    'id': 0,
    'firstname': 'Dominik',
    'lastname': 'Waldow',
    'email': 'dominik@join.com',
    'password': '01234',
    'category': 2,
    'avatar': 'img/avatar1.jpg'
}*/

let allTasks = [];


let avatar = ['img/avatar1.jpg', 'img/avatar2.jpg'];
let selectedUsers = [];
let dragTaskId;
let currentUser;


function init() {
    backendPull();
    loadLogin();
}

function loadContent() {
    if (!currentUser) {
        alert('please Login')
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateContent();
    }
}

// Switch Section /////////////////////////////////////////////////////////////////////////////////////////////////////

function categoryText(category) {
    let text = 'gray';
    switch (category) {
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

function categoryColor(category) {
    let col = 'gray';
    switch (category) {
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

function bellColor(urgency) {
    let col = 'green';
    switch (urgency) {
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

// Login Section ////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function show you the login page.
 */
function loadLogin() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateLogin();
}
/**
 * This function show you the register page.
 */
function loadRegister() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateRegister();
}

/**
 * This function compares the login data with the database and logs you in.
 */
async function login() {
    await userBackendPull();
    let setEmail = document.getElementById('email').value;
    let setPassword = document.getElementById('password').value;
    let wrongEmail = true;
    let wrongPassword = true;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == setEmail) {
            wrongEmail = false;
            if (users[i].password == setPassword) {
                document.getElementById('user-box').classList.remove('hidden');
                currentUser = users[i];
                wrongPassword = false;
                users = [];
                currentUser.password = "";
                let img = document.querySelector('.avatar');
                img.src = currentUser.avatar;
            }
        }
    }
    if (!wrongEmail && !wrongPassword) {
        loadContent();
    } else if (!wrongEmail && wrongPassword) {
        alert('wrong Password!');
    } else if (wrongEmail) {
        alert('Accound not found. Please register.');
    }
}

// Taskboard Section ////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function show you the taskboard.
 */
function loadBoard() {
    if (!currentUser) {
        alert('please Login')
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateBoard();
        loadTasks();
    }
}

/**
 * This function load the tasks in the right status field.
 */
function loadTasks() {
    for (let i = 0; i < allTasks.length; i++) {
        let currentTask = allTasks[i];
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

/**
 * This function show you the backlog.
 */
function loadBacklog() {
    if (!currentUser) {
        alert('please Login')
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateBacklog();
        loadBacklogContent();
    }
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
            tBody.innerHTML += templateBacklogContent(allTasks[i]);
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
            backendPush()
            loadBacklogContent()
        }
    }
}

function infoTask(id){
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].id == id) {
            let content = document.getElementById('backlogField');
            content.innerHTML = templateLoadInfo(allTasks[i]);
        }
    }
}

function loadInfoContent(task){
    let content = document.getElementById('backlogField');
    content.innerHTML = templateLoadInfo(task);
}

// Add Task Section //////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * This function let show you AddTask.
 */

function loadAddTask() {
    if (!currentUser) {
        alert('please Login')
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateAddTask();
    }
}

function renderAvatar() {
    document.getElementById('persons').innerHTML = ``;
    for (let i = 0; i < avatar.length; i++) {
        const avatare = avatar[i];
        document.getElementById('persons').innerHTML += templateAvatare(i, avatare);
    }
}

function templateAvatare(i, avatare) {
    return /*html*/ `
    <img id="user-${i}" onclick="selectUser(${i})" src="${avatare}" class="avatar">`;
}

async function selectUser(i) {

    await userBackendPull();

    if (users.length > 0) {
        let user = document.getElementById('user-' + i);
        user.classList.toggle('avatar-selected');
        selectedUsers.push(users[i]);

        if (selectedUsers.includes(users[i])) {
            selectedUsers = selectedUsers.filter(a => a != users[i]);
        }
        selectedUsers.push(users[i])
    }
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

async function createTask() {

    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let catergory = document.getElementById('catergory');
    let description = document.getElementById('description');
    let urgency = document.getElementById('urgency');;
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
    } // let highestID = allTasks['currentHighestID'];
    let id = highestID + 1; // let highestID = allTasks['currentHighestID'];

    if (selectedUsers.length > 0) {
        var usersnames = '';


        var userArr = selectedUsers.map(el => {
            return el.firstname
        })
        let task = {
            'title': title.value,
            'date': date.value,
            'catergory': catergory.value,
            'description': description.value,
            'urgency': urgency.value,
            'level': 'todo',
            'id': id,
            'user': userArr.join() //User hinzufügen
        }

        allTasks.push(task);
        backendPush();
        clearTask();
    } else {
        alert('please select a user')
    }    //map the selectedUsers by firstname + set Task values    /
}

// Register Section ///////////////////////////////////////////////////////////////////////////////////////////////////

function register() {
    
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let firstPassword = document.getElementById('password-register').value;
    let secondPassword = document.getElementById('password-confirmed-register').value;

    let password = checkPassword();

    let avatar = document.getElementById('profile-pic');;
    let id = 0;

    
    let newUser = {
        'firstname': firstname.value,
        'lastname': lastname.value,
        'email': email.value,
        'password': password,
        'avatar': avatar.src,
        'id': users.length +1,
    }

    saveUser(newUser);
}

async function saveUser(newUser){
    userBackendPull();
    users.push(newUser);
    userBackendPush();
    loadLogin();
}

function checkPassword() {
    let firstPassword = document.getElementById('password-register').value;
    let secondPassword = document.getElementById('password-confirmed-register').value;

    if(firstPassword == secondPassword) {
        password = secondPassword;
        return password;
    } else {
        alert('Passwords do not match');
    }
    
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