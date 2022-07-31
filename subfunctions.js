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
