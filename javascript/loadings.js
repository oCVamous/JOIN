function loadContent() {
    if (!currentUser) {
        showLoginAlert();
    } else {
        console.log(currentUser)
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateContent();
    }
}

/**
 * This function show you the login page.
 */
 function loadLogin() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateLogin();
}

/**
 * This function show you the taskboard.
 */
 async function loadBoard() {
    if (!currentUser) {
        showLoginAlert();
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateBoard();
        selectMenu(1);
        loadTasks();
    }
}

/**
 * This function show you the help.
 */
 function loadHelp() {
    if (!currentUser) {
        showLoginAlert();
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateHelp();
        selectMenu(4);
    }
}

/**
 * This function show you the backlog.
 */
 function loadBacklog() {
    if (!currentUser) {
        showLoginAlert();
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateBacklog();
        selectMenu(2);
        loadBacklogContent();
    }
}

function loadInfoContent(task){
    let content = document.getElementById('backlogField');
    content.innerHTML = templateLoadInfo(task);
}

/**
 * This function let show you AddTask.
 */

 function loadAddTask() {
    if (!currentUser) {
        showLoginAlert();
        
    } else {
        let content = document.getElementById('content');
        content.innerHTML = ``;
        content.innerHTML += templateAddTask();
        selectMenu(3);
    }
}

/**
 * This function show you the register page.
 */
 function loadRegister() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateRegister();
}

// footer Section ///////////////////////////////////////////////////////////////////////////////////////////////////////

function loadImpressum() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateImpressum();
    selectMenu(5);
}

function loadDatenschutz() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateDatenschutz();
    selectMenu(6);
}