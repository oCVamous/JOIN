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

//Select /////////////////////////////////////////////////////////////////////////////////////////

function selectMenu(id){
    for(let i = 1; i <= 6; i++){
        if(i == id){
            document.getElementById('menu-'+i).classList.add('selectedMenu');
        }else{
            document.getElementById('menu-'+i).classList.remove('selectedMenu');
        }
    }
}

// Alert functions ////////////////////////////////////////////////////////////////////////////////

function showLoginAlert(){
    let alert = document.getElementById('loginAlert');
    alert.classList.remove('d-none');
}

function hideLoginAlert(){
    let alert = document.getElementById('loginAlert');
    alert.classList.add('d-none');
    loadLogin();
}

function showLoginPasswordAlert(){
    let alert = document.getElementById('loginPasswordAlert');
    alert.classList.remove('d-none');
}

function hideLoginPasswordAlert(){
    let alert = document.getElementById('loginPasswordAlert');
    alert.classList.add('d-none');
    loadLogin();
}

function showLoginEmailAlert(){
    let alert = document.getElementById('loginEmailAlert');
    alert.classList.remove('d-none');
}

function hideLoginEmailAlert(){
    let alert = document.getElementById('loginEmailAlert');
    alert.classList.add('d-none');
    loadLogin();
}

function showRegisterAlert(){
    let alert = document.getElementById('registerAlert');
    alert.classList.remove('d-none');
}

function hideRegisterAlert(){
    let alert = document.getElementById('registerAlert');
    alert.classList.add('d-none');
    loadLogin();
}

function showRegisterEmailAlert(){
    let alert = document.getElementById('registerEmailAlert');
    alert.classList.remove('d-none');
}

function hideRegisterEmailAlert(){
    let alert = document.getElementById('registerEmailAlert');
    alert.classList.add('d-none');
}

function showRegisterPasswordAlert(){
    let alert = document.getElementById('registerPasswordAlert');
    alert.classList.remove('d-none');
}

function hideRegisterPasswordAlert(){
    let alert = document.getElementById('registerPasswordAlert');
    alert.classList.add('d-none');
}

function showAddTaskUserAlert(){
    let alert = document.getElementById('AddTaskUserAlert');
    alert.classList.remove('d-none');
}

function hideAddTaskUserAlert(){
    let alert = document.getElementById('AddTaskUserAlert');
    alert.classList.add('d-none');
}

function showCreatorAlert(){
    let alert = document.getElementById('CreatorAlert');
    alert.classList.remove('d-none');
}

function hideCreatorAlert(){
    let alert = document.getElementById('CreatorAlert');
    alert.classList.add('d-none');
}