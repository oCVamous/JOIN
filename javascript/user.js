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

async function guest() {
    await userBackendPull();
    let setEmail = 'guest';
    let setPassword = '000';
    let wrongEmail = true;
    let wrongPassword = true;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == setEmail) {
            wrongEmail = false;
            if (users[i].password == setPassword) {
                userLogin(i);
                wrongPassword = false;
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
                userLogin(i);
                wrongPassword = false;
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

/**
 *  This function init the login.
 * 
 * @param {integer} i //index
 * @returns 
 */
function userLogin(i){
    document.getElementById('user-box').classList.remove('hidden');
    currentUser = users[i];
    saveAvatar();
    users = [];
    currentUser.password = "";
    let img = document.querySelector('.avatar');
    img.src = currentUser.avatar;
}

/**
 * This function save informations from user.
 */
function saveAvatar(){
    for(let i=0; i<users.length; i++){
        avatar.push({
            'id': users[i].id, 
            'name': users[i].firstname,
            'avatar': users[i].avatar
        })
    }
}


// Register Section ///////////////////////////////////////////////////////////////////////////////////////////////////

function highlightRegisterAvatar(imageNr, imgSrc) {
    for(let i = 1; i < 5;i++){
        let avtr = document.getElementById('example-image' + i);
        avtr.classList.remove('avatar-selected');
    }
    let highlightAvatar = document.getElementById('example-image' + imageNr);
    highlightAvatar.classList.toggle('avatar-selected');
    UserRegisterURL = imgSrc;
}

async function register() {
    let email = document.getElementById("email");
    let emailTaken = await isEmailTaken(email.value)

    if(emailTaken) {
        alert('Email is already taken')
        return
    }
    await userBackendPull();
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let password = checkPassword();
    let newId = users.length;
    if (password.trim() != "" && avatar.value != "") {
      let newUser = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password,
        avatar: UserRegisterURL,
        id: newId
      };
      saveUser(newUser);
      alert('registration successful');
    }
}

async function saveUser(newUser){
    await userBackendPull();
    users.push(newUser);
    await userBackendPush();
    users = [];
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

/**
 * This function checkes if Email is available
 */
 async function isEmailTaken(email) {
    await userBackendPull();
    let wrongEmail = true;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            wrongEmail = false;
        }
    }
    if (!wrongEmail) {
        return true
    } else {
        return false;
    }
}