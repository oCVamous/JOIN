// Welcome Page//////////////////////////////////////////////

function templateContent() {
    return /*html*/ `
    <div class="animation">
            <div id="animation-1">
                <img class="joinlogo" src="img/logo.png" alt="">
                <h1>Welcome</h1>
            </div>

            <div class="animation-1"><p>This Kanban project was created through teamwork.</p></div>
            
            <div id="werbetext">
                <p><img src="img/bullet-point.png" style="height: 10px;"> Here you can create tasks,</p>
                <p><img src="img/bullet-point.png" style="height: 10px;"> Sort them by urgency</p>
                <p><img src="img/bullet-point.png" style="height: 10px;"> and assign them to specific employees.</p>
                <p><img src="img/bullet-point.png" style="height: 10px;"> Under the Help tab you will find all the important information to make the best use of the site.</p>
            </div>
            
             <br>
            <div id="we">
                <h2>This code was made with passion</h2>
                    <a class="ourName" href="https://github.com/oCVamous" target="_blank"><h2>© by Patrick Sterz <img src="img/github-icon.svg" style="height: 30px;" alt=""></h2></a> 
                    <a class="ourName" href="https://github.com/ZZDome" target="_blank"><h2>© by Dominik Waldow <img src="img/github-icon.svg" style="height: 30px;" alt=""></h2></a>
            
            </div>
            
        </div>
        `;
}

// Board Page ////////////////////////////////////////////////////////////////////////////////////////////////////

function templateBoard() {
    return /*html*/ `
    <div class="boardPage animation">
        <h2 class="boardHeadline">Taskboard</h2>	
        <div class="boardField">
        <div class="boardContainer">
            <h3>ToDo</h3>
            <div id="todoField" class="boardContainerField" ondrop="drop('todo')" ondragover="allowDrop(event)">
                
            </div>
        </div>
        <div class="boardContainer">
            <h3>In Progress</h3>
            <div id="inProgressField" class="boardContainerField" ondrop="drop('inProgress')" ondragover="allowDrop(event)">

            </div>
        </div>
        <div class="boardContainer">
            <h3>In Testing</h3>
            <div id="inTestingField" class="boardContainerField" ondrop="drop('inTesting')" ondragover="allowDrop(event)">

            </div>
        </div>
        <div class="boardContainer">
            <h3>Done</h3>
            <div id="doneField" class="boardContainerField" ondrop="drop('done')" ondragover="allowDrop(event)">
                
            </div>
        </div>
        </div>
    </div>
    `;
}

// AddTask Page ////////////////////////////////////////////////////////////////////////////////////////////////////

function templateAddTask() {
    return /*html*/ `
    <div class="animation basic">
    <header class="header">
            <h2>Add Task</h2>
        </header>
    

    <form onsubmit="event.preventDefault(), createTask()">
    <div class="addTask-main">
        <div id="addTask-left">

            <div class="input">
                <label for="formGroupExampleInput" class="form-label">Title</label>
                <div class="mb-3">
                    <input id="title" required type="text" class="form-control" id="formGroupExampleInput" placeholder="Taskname here">
                </div>
            </div>

            <label class="form-label" for="category">Category</label>
            <div class="input">
                <div class="form-floating">
                    <select id="catergory" required class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="1">Management</option>
                        <option value="2">Software Development</option>
                        <option value="3">UX/UI Desing</option>
                        <option value="4">Human Resources</option>
                    </select>
                    <label for="floatingSelect">which department?</label>
                </div>
            </div>

            <label class="form-label" for="floatingTextarea2">Description</label>
            <div class="input">
                <div class="form-floating">
                    <textarea class="form-control" required type="text" placeholder="Description" id="description" style="height: 100px"></textarea>
                </div>
            </div>

                
        </div>

        <div id="addTask-right">

            <div class="mb-3">
                <label class="form-label" for="due date">Due Date</label>
                <input id="date" required type="date" class="form-control" id="formGroupExampleInput">
            </div>

            <label class="form-label" for="urgency">Urgency</label>
                
                <div class="form-floating">
                    <select id="urgency" required class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="1">High</option> 
                        <option value="2">Intermediate</option>
                        <option value="3">Low</option>
                    </select>
                    <label class="form-label" for="floatingSelect">What is the priority?</label>
                </div>

                
            <div class="mb-3">
                <label class="form-label" for="formGroupExampleInput" class="form-label">Assigned</label>

                <div id="btn-box">
                    <img onclick="renderAvatar()" src="img/icon plus.png" style="padding-right:10px">
                        
                    <div>
                        <button onclick="loadBoard()" type="reset" class="btn btn-secondary btn-lg">Cancel</button>
                        <button type="submit" class="btn btn-primary btn-lg">Add task</button>
                    </div>
                </div>
            </div>

            <div id='persons' class="persons">

            </div>
        </div>
    </form>
    </div>
    `;
}

function templateAvatare(i, avatare, name) {
    return /*html*/ `<img title="${name}" id="user${i}" onclick="selectUser(${i})" src="${avatare}" class="avatar">`;

}

function templateCurrentAvatare(i, avatare, name) {
    return /*html*/ `<img title="${name}" id="user${i}" onload="selectUser(${i})" src="${avatare}" class="avatar">`;

}

// Backlog Page ////////////////////////////////////////////////////////////////////////////////////////////////////

function templateLoadTasks(task){
    return /*html*/ `
        <div draggable="true" ondragstart="drag(${task.id})" class="taskContainer" style="background-color: ${categoryColor(task.catergory)}">
                    <div class="taskHeader">
                        <h5>${task.title}</h5>
                        <img src="img/icons/bell-${bellColor(task.urgency)}.svg">
                    </div>
                    <p>${categoryText(task.catergory)}</p>
                    <div class="taskHeadline">
                        <img class="taskImage" src="${findImage(task.user)}">
                        <span>${findName(task.user)}</span>
                        <span>${task.date}</span>
                    </div>
                    <div class="taskDescription">
                        <span>${task.description}</span>
                    </div>
                </div>
    `;
}

function templateBacklog(){
    return /*html*/ `
    <div class="backlogContent animation">
        <h2>Backlog</h2>
        <div id ="backlogField">

        </div>
    </div>
`; 
}

function templateEmptyLog(){
    return /*html*/ `
    <div class="log">
        <h2>EMPTY</h2>
    </div>
`; 
}

function templateLoadInfo(task){
    return /*html*/ `
    <div class='MODAL-1' onclick='templateHideInfo()'> </div>

        <div class="taskInfoContainer" style="background-color: ${categoryColor(task.catergory)}" >
                    <div class="taskHeader">
                        <h5>${task.title}</h5>
                        <img src="img/icons/bell-${bellColor(task.urgency)}.svg">
                        <img class="hoverPointer" onclick="loadBacklog()" src="img/icons/x-circle.svg" >
                    </div>
                    <p>${categoryText(task.catergory)}</p>
                    <div class="taskHeadline">
                        <img class="backlogTaskImage" src="${findImage(task.user)}">
                        <span>${findName(task.user)}</span>
                        <span>${task.date}</span>
                    </div>
                    <div class="taskDescription">
                        <span>${task.description}</span>
                    </div>
                </div>
    `;
}
function templateHideInfo() {
    document.querySelector('.MODAL-1').remove()
    document.querySelector('.taskInfoContainer').remove()
}

function templateBacklogHeader(){
    return /*html*/ `
    <table id="backlogTable" class="table">
        <thead>
            <tr>
                <th scope="col">Assined to</th>
                <th scope="col">Task</th>
                <th scope="col" class="mobileHide">Description</th>
                <th scope="col" class="mobileHide">due date</th>
                <th scope="col" class="mobileHide">Status</th>
                <th scope="col">Options</th>
            </tr>
        </thead>
        <tbody id="backlogTableBody">
        </tbody>
    </table>
`; 
}

function templateBacklogContent(task, hideBtn){
    return /*html*/ `
    <tr style="background-color: ${categoryColor(task.catergory)}">
      <th scope="row"><div class="d-flex"><img class="backlogImage" src="${findImage(task.user)}">${findName(task.user)}</div></th>
      <td >${task.title}</td>
      <td class="mobileHide"><div class="logDescription mobileHide">${task.description}</div></td>
      <td style="white-space: nowrap;"  class="mobileHide">${task.date}</td>
      <td class="mobileHide">${task.level}</td>
      <td style="white-space: nowrap;">
        <button onclick="infoTask(${task.id})" type="button" class="mobileShow infoBtn btn btn-secondary btn-sm"><img src="img/icons/info-square.svg" alt=""></button>
        <button onclick="uploadIntoBoard(${task.id})" id="uploadBtn-${task.id}" type="button" class="${hideBtn} uploadBtn btn btn-warning btn-sm"><img src="img/icons/upload.svg" alt=""></button>
        <button onclick="editTask(${task.id})" type="button" class="editBtn btn btn-primary btn-sm"><img src="img/icons/pencil-square.svg" alt=""></button>
        <button onclick="deleteTask(${task.id})" type="button" class="delBtn btn btn-secondary btn-sm"><img src="img/icons/trash3.svg" alt=""></button>
        </td>
    </tr>
    
`; 
}

function templateLoadEdit(task) {
    return /*html*/ `
    <div class="MODAL edit-task">

    <form onsubmit="event.preventDefault(), createTask(${task.id})"> <!-- change to edit -->
    <div id="edit-box">

    <div class="addTask-main">
        
        <div id="addTask-left">

            <div class="input">
                <label for="formGroupExampleInput" class="form-label">Title</label>
                <div class="mb-3">
                    <input id="title" required type="text" class="form-control" id="formGroupExampleInput" value="${task.title}">
                </div>
            </div>

            <label class="form-label" for="category">Category</label>
            <div class="input">
                <div class="form-floating">
                    <select id="catergory" required class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option ${select(task.catergory, "1")} value="1">Management</option>
                        <option ${select(task.catergory, "2")} value="2">Software Development</option>
                        <option ${select(task.catergory, "3")} value="3">UX/UI Desing</option>
                        <option ${select(task.catergory, "4")} value="4">Human Resources</option>
                    </select>
                    <label for="floatingSelect">Which department?</label>
                </div>
            </div>

            <label class="form-label" for="floatingTextarea2">Description</label>
            <div class="input">
                <div class="form-floating">
                    <textarea class="form-control" required type="text" id="description" style="height: 100px">${task.description}</textarea>
                </div>
            </div>

                
        </div>

        <div id="addTask-right">

            <div class="mb-3">
                <label class="form-label" for="due date">Due Date</label>
                <input id="date" required type="date" class="form-control" id="formGroupExampleInput" value="${task.date}">
            </div>

            <label class="form-label" for="urgency">Urgency</label>
                
                <div class="form-floating">
                    <select id="urgency" required class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option ${select(task.urgency, "1")} value="1">High</option> 
                        <option ${select(task.urgency, "2")} value="2">Intermediate</option>
                        <option ${select(task.urgency, "3")} value="3">Low</option>
                    </select>
                    <label class="form-label" for="floatingSelect">What is the priority?</label>
                </div>

                
            <div class="mb-3">
                <label class="form-label" for="formGroupExampleInput" class="form-label">Assigned</label>

                <div id="btn-box">
                    <img onload="renderCurrentAvatar(${task.user})" src="img/icon plus.png" style="padding-right:10px">
                        
                    <div>
                        <button onclick="loadBacklog()" type="reset" class="btn btn-secondary btn-lg">Cancel</button>
                        <button type="submit" class="btn btn-primary btn-lg">Edit task</button>
                    </div>
                </div>
            </div>

            <div id='persons' class="persons">

            </div>
        </div>
    </form>
    </div>
    </div>
    `;
    
}

// Help Page ////////////////////////////////////////////////////////////////////////////////////////////////////

function templateHelp() {
    return /*html*/ `
    <div class="animation basic">
        <header class="header">
            <h2>Help</h2>
        </header>
            <div class="help-content">
                <div class="help-container">
                    <h2>What is Kanban and what is it used for?</h2>
                    <p>Kanban (Japanese for sign) is an inventory control system used in just-in-time (JIT)
                        manufacturing to
                        track production and order new shipments of parts and materials.
                        Kanban was developed by Taiichi Ohno, an industrial engineer at Toyota, and uses visual cues to
                        prompt the action needed to keep a process flowing.</p>
                </div>
                <div class="help-container">
                    <h2>How do I use the board?</h2>
                    <ul>
                        <li>
                            <p>On the board each task passes through 4 stages.</p>
                        </li>
                        <li>
                            <p>The tasks can simply be moved by drag and drop.</p>
                        </li>
                        <li>
                            <p>After a task has been completed, it can be deleted.</p>
                        </li>
                        <li>
                            <p>The color of a card in the backlog stands for the category to which the task was assigned.</p>
                        </li>
                        
                    </ul>
                </div>
                <div class="help-container">
                    <h2>How do I use the backlog?</h2>
                    <ul>
                        <li>
                            <p>The backlog is a collection of upcoming tasks and ideas that are not yet in the focus of
                                the
                                project team.
                            </p>
                        </li>
                         
                        <li>
                            <p> To upload the task to the board just click on the yellow upload image</p>
                        </li>

                        <li>
                            <p> The color of a card in the backlog stands for the category to which the task was assigned.</p>
                        </li>

                        <li>
                            <p>By click on the pen you can see and edit all details.</p>
                        </li>

                        <li>
                            <p> You can only edit tasks if you are also the creator of the task</p>
                        </li>
                    </ul>
                </div>
                <div class="help-container">
                    <h2>How do I use the Add Task?</h2>
                    <ul>
                        <li>
                            <p>Create new tasks in the add-task section.</p>
                        </li>
                        
                        <li>
                            <p> Fill the form and choose by whom the task should be processed.</p>
                        </li>
                        <li>
                            <p>If you want to stop while creating a task, just click cancel</p>
                        </li>

                    </ul>
                </div>
            </div>
            
        </div>
        </div>
        `;
}