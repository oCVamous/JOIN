// Templates//////////////////////////////////////////////

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

function templateLogin() {
    return /*html*/ `
    <div class="login">
        <div id="login-box">

            <div id="login-box-left">
                <img src="img/logo.png" style="height: 50px">
            </div>

            <div id="login-box-right">
                <h2 style="text-align: center;">Login</h2>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
             
            <button onclick="login()" class="btn btn-primary">Login</button>
            <button onclick="loadRegister()" class="btn btn-primary">Registrieren</button>
        </div>
            
        
    </div>
    `;
}

function templateRegister() {
    
    return /*html*/ `
    <div class="login">
        <div id="login-box">

            <div id="login-box-left">
                <img src="img/logo.png" style="height: 50px">
            </div>

            <div id="login-box-right">
                <h2 style="text-align: center;">Registrieren</h2>
                <div class="mb-3">
                    <label class="form-label">Firstname</label>
                    <input type="text" aria-label="First name" class="form-control" id="firstname">
                </div>
            <div class="mb-3">
                <label class="form-label">Lastname</label>
                <input type="text" aria-label="Last name" class="form-control" id="lastname">
            </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="password-register">
            </div>
            <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="password-confirmed-register">
            </div>

            
            <label class="form-label">Choose you Avatar</label>
            <div id="persons-register" class="persons">  
                <img id="example-image1" onclick="highlightRegisterAvatar(1, 'img/avatar/default/user1.png')" class="avatar" src='img/avatar/default/user1.png' alt="">
                <img id="example-image2" onclick="highlightRegisterAvatar(2, 'img/avatar/default/user2.png')" class="avatar" src='img/avatar/default/user2.png' alt="">
                <img id="example-image3" onclick="highlightRegisterAvatar(3, 'img/avatar/default/user3.png')" class="avatar" src='img/avatar/default/user3.png' alt="">
                <img id="example-image4" onclick="highlightRegisterAvatar(4, 'img/avatar/default/user4.png')" class="avatar" src='img/avatar/default/user4.png' alt="">
            </div>
             
            <button onclick="loadLogin()" class="btn btn-secondary">Cancel</button>
            <button onclick="register()" class="btn btn-primary">Registrieren</button>
        </div>
            
        
    </div>
    `;
}

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
        <div class="taskInfoContainer" style="background-color: ${categoryColor(task.catergory)}">
                    <div class="taskHeader">
                        <h5>${task.title}</h5>
                        <img src="img/icons/bell-${bellColor(task.urgency)}.svg">
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

function templateBacklogContent(task){
    return /*html*/ `
    <tr style="background-color: ${categoryColor(task.catergory)}">
      <th scope="row"><div class="d-flex"><img class="backlogImage" src="${findImage(task.user)}">${findName(task.user)}</div></th>
      <td >${task.title}</td>
      <td class="mobileHide"><div class="logDescription mobileHide">${task.description}</div></td>
      <td style="white-space: nowrap;"  class="mobileHide">${task.date}</td>
      <td class="mobileHide">${task.level}</td>
      <td style="white-space: nowrap;">
        <button onclick="infoTask(${task.id})" type="button" class="mobileShow infoBtn btn btn-secondary btn-sm"><img src="img/icons/info-square.svg" alt=""></button>
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
                    <label for="floatingSelect">Welche Abteilung?</label>
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
                    <label class="form-label" for="floatingSelect">Wie hoch ist die Priorität?</label>
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
    `;
}

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
                    <label for="floatingSelect">Welche Abteilung?</label>
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
                    <label class="form-label" for="floatingSelect">Wie hoch ist die Priorität?</label>
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

function templateImpressum() {
    return /*html*/ `
    <div class="impressum-main animation">
        <h2>Impressum</h2>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>Patrick Sterz<br />Musterstrasse<br /> 55555 Musterstadt</p>
        <p>Dominik Waldow<br /> Musterstrasse <br /> 55555 Musterstadt</p>

        <h2>Kontakt</h2>
        <p>Telefon: 01234567890(Muster)<br /> E-Mail: info@join.com(Muster)</p>

        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>Quelle: <a class="impressum" href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
        </p>
    </div>
    `;
}

function templateDatenschutz() {
    return /*html*/ `

    <div id="hulu" class="impressum-main animation">

    <h2>Datenschutzerkl&auml;rung</h2>
        <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
        </p><br />
        <p>Patrick Sterz<br/>Spinnereistraße 1A<br /> 30449 Hannover</p>
        <p>Dominik Waldow<br/> Gleis 9 3/4<br /> 55555 Hogwarts</p>
        <p>Telefon: 01234567890<br /> E-Mail: info@join.com</p>
        <p>&nbsp;</p>
        <h2>Allgemeiner Hinweis</h2>
        <p>Gest&uuml;tzt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG
            <!--DSG-->) hat jede Person Anspruch auf Schutz ihrer Privatsph&auml;re sowie auf Schutz vor Missbrauch ihrer pers&ouml;nlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen
            Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
        </p>
        <p>In Zusammenarbeit mit unseren Hosting-Providern bem&uuml;hen wir uns, die Datenbanken so gut wie m&ouml;glich vor fremden Zugriffen, Verlusten, Missbrauch oder vor F&auml;lschung zu sch&uuml;tzen.</p>
        <p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
        <p>Durch die Nutzung dieser Website erkl&auml;ren Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gem&auml;ss der nachfolgenden Beschreibung einverstanden. Diese Website kann grunds&auml;tzlich ohne Registrierung besucht werden. Dabei
            werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene
            Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit m&ouml;glich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.</p>
        <p>&nbsp;</p>
        <h2>Datenschutzerkl&auml;rung f&uuml;r Cookies</h2>
        <p>Diese Website verwendet Cookies. Cookies sind Textdateien, die Daten von besuchten Websites oder Domains enthalten und von einem Browser auf dem Computer des Benutzers gespeichert werden. Ein Cookie dient in erster Linie dazu, die Informationen
            &uuml;ber einen Benutzer w&auml;hrend oder nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Zu den gespeicherten Angaben k&ouml;nnen z.B. die Spracheinstellungen auf einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle,
            an der ein Video geschaut wurde, geh&ouml;ren. Zu dem Begriff der Cookies z&auml;hlen wir ferner andere Technologien, die die gleichen Funktionen wie Cookies erf&uuml;llen (z.B. wenn Angaben der Nutzer anhand pseudonymer Onlinekennzeichnungen
            gespeichert werden, auch als "Nutzer-IDs" bezeichnet)</p>
        <p>Die folgenden Cookie-Typen und Funktionen werden unterschieden:</p>
        <ul>
            <li><strong>Tempor&auml;re Cookies (auch: Session- oder Sitzungs-Cookies)</strong>: Tempor&auml;re Cookies werden sp&auml;testens gel&ouml;scht, nachdem ein Nutzer ein Online-Angebot verlassen und seinen Browser geschlossen hat.</li>
            <li><strong>Permanente Cookies</strong>: Permanente Cookies bleiben auch nach dem Schliessen des Browsers gespeichert. So kann beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website
                erneut besucht. Ebenso k&ouml;nnen die Interessen von Nutzern, die zur Reichweitenmessung oder zu Marketingzwecken verwendet werden, in einem solchen Cookie gespeichert werden.
            </li>
            <li><strong>First-Party-Cookies</strong>: First-Party-Cookies werden von uns selbst gesetzt.</li>
            <li><strong>Third-Party-Cookies (auch: Drittanbieter-Cookies)</strong>: Drittanbieter-Cookies werden haupts&auml;chlich von Werbetreibenden (sog. Dritten) verwendet, um Benutzerinformationen zu verarbeiten.
            </li>
            <li><strong>Notwendige (auch: essenzielle oder unbedingt erforderliche) Cookies</strong>: Cookies k&ouml;nnen zum einen f&uuml;r den Betrieb einer Webseite unbedingt erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu speichern oder
                aus Gr&uuml;nden der Sicherheit).</li>
            <li><strong>Statistik-, Marketing- und Personalisierung-Cookies</strong>: Ferner werden Cookies im Regelfall auch im Rahmen der Reichweitenmessung eingesetzt sowie dann, wenn die Interessen eines Nutzers oder sein Verhalten (z.B. Betrachten bestimmter
                Inhalte, Nutzen von Funktionen etc.) auf einzelnen Webseiten in einem Nutzerprofil gespeichert werden. Solche Profile dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren potenziellen Interessen entsprechen. Dieses Verfahren wird
                auch als "Tracking", d.h., Nachverfolgung der potenziellen Interessen der Nutzer bezeichnet. Soweit wir Cookies oder "Tracking"-Technologien einsetzen, informieren wir Sie gesondert in unserer Datenschutzerkl&auml;rung oder im Rahmen der
                Einholung einer Einwilligung.
            </li>
        </ul>
        <p>Hinweise zu Rechtsgrundlagen: Auf welcher Rechtsgrundlage wir Ihre personenbezogenen Daten mithilfe von Cookies verarbeiten, h&auml;ngt davon ab, ob wir Sie um eine Einwilligung bitten. Falls dies zutrifft und Sie in die Nutzung von Cookies einwilligen,
            ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erkl&auml;rte Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z.B. an einem betriebswirtschaftlichen Betrieb
            unseres Onlineangebotes und dessen Verbesserung) verarbeitet oder, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu erf&uuml;llen.
        </p>
        <p>Speicherdauer: Sofern wir Ihnen keine expliziten Angaben zur Speicherdauer von permanenten Cookies mitteilen (z. B. im Rahmen eines sog. Cookie-Opt-Ins), gehen Sie bitte davon aus, dass die Speicherdauer bis zu zwei Jahre betragen kann.</p>
        <p>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): Abh&auml;ngig davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die M&ouml;glichkeit, eine erteilte Einwilligung zu
            widerrufen oder der Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen (zusammenfassend als "Opt-Out" bezeichnet). Sie k&ouml;nnen Ihren Widerspruch zun&auml;chst mittels der Einstellungen Ihres Browsers erkl&auml;ren, z.B.,
            indem Sie die Nutzung von Cookies deaktivieren (wobei hierdurch auch die Funktionsf&auml;higkeit unseres Onlineangebotes eingeschr&auml;nkt werden kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch
            mittels einer Vielzahl von Diensten, vor allem im Fall des Trackings, &uuml;ber die Webseiten https://optout.aboutads.info und https://www.youronlinechoices.com/ erkl&auml;rt werden. Daneben k&ouml;nnen Sie weitere Widerspruchshinweise im
            Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies erhalten.</p>
        <p>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens
            genannten Verarbeitungen und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen werden k&ouml;nnen. Hierbei wird die Einwilligungserkl&auml;rung gespeichert, um deren Abfrage nicht erneut wiederholen zu m&uuml;ssen und die Einwilligung
            entsprechend der gesetzlichen Verpflichtung nachweisen zu k&ouml;nnen. Die Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer,
            bzw. dessen Ger&auml;t zuordnen zu k&ouml;nnen. Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten gelten die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen.
            Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser, System und verwendeten
            Endger&auml;t gespeichert.</p>
        <ul>
            <li>Verarbeitete Datenarten: Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Ger&auml;te-Informationen, IP-Adressen).</li>
            <li>Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
            <li>Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
        </ul>
        <p>&nbsp;</p>
        <h2>Daten&uuml;bertragungssicherheit (ohne SSL)</h2>
        <p>Bitte beachten Sie, dass Daten, die &uuml;ber ein offenes Netz wie das Internet oder einen E-Mail-Dienst ohne SSL-Verschl&uuml;sselung &uuml;bermittelt werden, f&uuml;r jedermann einsehbar sind. Eine unverschl&uuml;sselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers &quot;http://&quot; anzeigt und kein Schloss-Symbol in Ihrer Browserzeile angezeigt wird. Informationen die &uuml;ber das Internet &uuml;bertragen werden und online empfangene Inhalte, k&ouml;nnen unter
            Umst&auml;nden &uuml;ber Netze von Drittanbietern &uuml;bermittelt werden. Wir k&ouml;nnen die Vertraulichkeit von Mitteilungen oder Unterlagen, die &uuml;ber solche offenen Netze oder Netze von Drittanbietern &uuml;bermittelt werden, nicht
            garantieren.
        </p>
        <p>Wenn Sie &uuml;ber ein offenes Netz oder Netze von Drittanbietern personenbezogene Informationen bekannt geben, sollten Sie sich der Tatsache bewusst sein, dass Ihre Daten verloren gehen oder Dritte potenziell auf diese Informationen zugreifen
            und folglich die Daten ohne Ihre Zustimmung sammeln und nutzen k&ouml;nnen. Zwar werden in vielen F&auml;llen die einzelnen Datenpakete verschl&uuml;sselt &uuml;bermittelt, nicht aber die Namen des Absenders und des Empf&auml;ngers. Selbst
            wenn der Absender und der Empf&auml;nger im gleichen Land wohnen, erfolgt die Daten&uuml;bermittlung &uuml;ber solche Netze h&auml;ufig und ohne Kontrollen auch &uuml;ber Drittstaaten, d.h. auch &uuml;ber L&auml;nder, die nicht das gleiche
            Datenschutzniveau bieten wie Ihr Domizilland. Wir &uuml;bernehmen f&uuml;r die Sicherheit Ihrer Daten w&auml;hrend der &Uuml;bermittlung &uuml;ber das Internet keine Verantwortung und lehnen jede Haftung f&uuml;r mittelbare und unmittelbare
            Verluste ab. Wir bitten Sie, andere Kommunikationsmittel zu benutzen, sollten Sie dies aus Gr&uuml;nden der Sicherheit f&uuml;r notwendig oder vern&uuml;nftig erachten.</p>
        <p>Trotz umfangreicher technischer und organisatorischer Sicherungsvorkehrungen, k&ouml;nnen m&ouml;glicherweise Daten verloren gehen oder von Unbefugten abgefangen und/oder manipuliert werden. Wir treffen soweit m&ouml;glich geeignete technische
            und organisatorische Sicherheitsmassnahmen, um dies innerhalb unseres Systems zu verhindern. Ihr Computer befindet sich indessen ausserhalb des von uns kontrollierbaren Sicherheitsbereichs. Es obliegt Ihnen als Benutzer, sich &uuml;ber die
            erforderlichen Sicherheitsvorkehrungen zu informieren und diesbez&uuml;glich geeignete Massnahmen zu treffen. Als Website-Betreiber haften wir keinesfalls f&uuml;r Sch&auml;den, die Ihnen aus Datenverlust oder -manipulation entstehen k&ouml;nnen.</p>
        <p>Daten welche Sie in Online-Formularen angeben, k&ouml;nnen zwecks Auftragsabwicklung an beauftragte Dritte weitergegeben und von diesen eingesehen und allenfalls bearbeitet werden.</p>
        <p>&nbsp;</p>
        <h2>Datenschutzerkl&auml;rung f&uuml;r Server-Log-Files</h2>
        <p>Der Provider dieser Website erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:</p>
        <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p>Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachtr&auml;glich zupr&uuml;fen, wenn uns konkrete Anhaltspunkte f&uuml;r
            eine rechtswidrige Nutzung bekannt werden.</p>
        <p>&nbsp;</p>
        <h2>Datenschutzerkl&auml;rung f&uuml;r Kommentarfunktion auf dieser Website</h2>
        <p>F&uuml;r die Kommentarfunktion auf dieser Website werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gew&auml;hlte Nutzername gespeichert.</p>
        <p><i>Speicherung der IP Adresse</i></p>
        <p>Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor der Freischaltung pr&uuml;fen, ben&ouml;tigen wir diese Daten, um im Falle von Rechtsverletzungen wie Beleidigungen
            oder Propaganda gegen den Verfasser vorgehen zu k&ouml;nnen.</p>
        <p><i>Abonnieren von Kommentaren</i></p>
        <p>Als Nutzer der Seite k&ouml;nnen Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine Best&auml;tigungsemail, um zu pr&uuml;fen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie k&ouml;nnen diese Funktion jederzeit &uuml;ber
            einen Link in den Info-Mails abbestellen.</p>
        <p>&nbsp;</p>
        <h2>Rechte betroffener Personen</h2>
        <p><strong>Recht auf Best&auml;tigung</strong></p>
        <p>Jede betroffene Person hat das Recht, vom Betreiber der Website eine Best&auml;tigung dar&uuml;ber zu verlangen, ob betroffene Personen betreffende, personenbezogene Daten verarbeitet werden. M&ouml;chten Sie dieses Best&auml;tigungsrecht in Anspruch
            nehmen, k&ouml;nnen Sie sich hierzu jederzeit an den Datenschutzbeauftragten wenden.
        </p> <br />
        <p><strong>Recht auf Auskunft</strong></p>
        <p>Jede von der Verarbeitung betroffene Person mit personenbezogenen Daten hat das Recht, jederzeit vom Betreiber dieser Website unentgeltliche Auskunft &uuml;ber die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft
            zu erhalten. Ferner kann gegebenenfalls &uuml;ber folgende Informationen Auskunft gegeben werden:</p>
        <ul>
            <li>die Verarbeitungszwecke</li>
            <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
            <li>die Empf&auml;nger, gegen&uuml;ber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden</li>
            <li>falls m&ouml;glich, die geplante Dauer, f&uuml;r die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht m&ouml;glich ist, die Kriterien f&uuml;r die Festlegung dieser Dauer</li>
            <li>das Bestehen eines Rechts auf Berichtigung oder L&ouml;schung der sie betreffenden personenbezogenen Daten oder auf Einschr&auml;nkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
            <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbeh&ouml;rde</li>
            <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verf&uuml;gbaren Informationen &uuml;ber die Herkunft der Daten</li>
        </ul>
        <p>Ferner steht der betroffenen Person ein Auskunftsrecht dar&uuml;ber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation &uuml;bermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im &uuml;brigen
            das Recht zu, Auskunft &uuml;ber die geeigneten Garantien im Zusammenhang mit der &uuml;bermittlung zu erhalten.</p>
        <p>M&ouml;chten Sie dieses Auskunftsrecht in Anspruch nehmen, k&ouml;nnen Sie sich hierzu jederzeit an unseren Datenschutzbeauftragten wenden.</p> <br />
        <p><strong>Recht auf Berichtigung</strong></p>
        <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, die unverz&uuml;gliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Ber&uuml;cksichtigung
            der Zwecke der Verarbeitung, die Vervollst&auml;ndigung unvollst&auml;ndiger personenbezogener Daten - auch mittels einer erg&auml;nzenden Erkl&auml;rung - zu verlangen.
        </p>
        <p>M&ouml;chten Sie dieses Berichtigungsrecht in Anspruch nehmen, k&ouml;nnen Sie sich hierzu jederzeit an unseren Datenschutzbeauftragten wenden.</p> <br />
        <p><strong>Recht auf L&ouml;schung (Recht auf Vergessen werden)</strong></p>
        <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, von dem Verantwortlichen dieser Website zu verlangen, dass die sie betreffenden personenbezogenen Daten unverz&uuml;glich gel&ouml;scht werden, sofern einer der
            folgenden Gr&uuml;nde zutrifft und soweit die Verarbeitung nicht erforderlich ist:
        </p>
        <ul>
            <li>Die personenbezogenen Daten wurden f&uuml;r solche Zwecke erhoben oder auf sonstige Weise verarbeitet, f&uuml;r welche sie nicht mehr notwendig sind</li>
            <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung st&uuml;tzte, und es fehlt an einer anderweitigen Rechtsgrundlage f&uuml;r die Verarbeitung</li>
            <li>Die betroffene Person legt aus Gr&uuml;nden, die sich aus ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gr&uuml;nde f&uuml;r die Verarbeitung vor, oder die betroffene
                Person legt im Falle von Direktwerbung und damit verbundenem Profiling Widerspruch gegen die Verarbeitung ein</li>
            <li>Die personenbezogenen Daten wurden unrechtm&auml;ssig verarbeitet</li>
            <li>Die L&ouml;schung der personenbezogenen Daten ist zur Erf&uuml;llung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt</li>
            <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft, die einem Kind direkt gemacht wurden, erhoben</li>
        </ul>
        <p>Sofern einer der oben genannten Gr&uuml;nde zutrifft und Sie die L&ouml;schung von personenbezogenen Daten, die beimBetreiber dieser Website gespeichert sind, veranlassen m&ouml;chten, k&ouml;nnen Sie sich hierzu jederzeit an unseren Datenschutzbeauftragten
            wenden. Der Datenschutzbeauftragte dieser Website wird veranlassen, dass dem L&ouml;schverlangen unverz&uuml;glich nachgekommen wird.</p> <br />
        <p><strong>Recht auf Einschr&auml;nkung der Verarbeitung</strong></p>
        <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, von dem Verantwortlichen dieser Website die Einschr&auml;nkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>
        <ul>
            <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar f&uuml;r eine Dauer, die es dem Verantwortlichen erm&ouml;glicht, die Richtigkeit der personenbezogenen Daten zu &uuml;berpr&uuml;fen
            </li>
            <li>Die Verarbeitung ist unrechtm&auml;ssig, die betroffene Person lehnt die L&ouml;schung der personenbezogenen Daten ab und verlangt stattdessen die Einschr&auml;nkung der Nutzung der personenbezogenen Daten</li>
            <li>Der Verantwortliche ben&ouml;tigt die personenbezogenen Daten f&uuml;r die Zwecke der Verarbeitung nicht l&auml;nger, die betroffene Person ben&ouml;tigt sie jedoch zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen</li>
            <li>Die betroffene Person hat aus Gr&uuml;nden, die sich aus ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung eingelegt und es steht noch nicht fest, ob die berechtigten Gr&uuml;nde des Verantwortlichen gegen&uuml;ber denen
                der betroffenen Person &uuml;berwiegen</li>
        </ul>
        <p>Sofern eine der oben genannten Voraussetzungen gegeben ist Sie die Einschr&auml;nkung von personenbezogenen Daten, die beim Betreiber dieser Website gespeichert sind, verlangen m&ouml;chten, k&ouml;nnen Sie sich hierzu jederzeit an unseren Datenschutzbeauftragten
            wenden. Der Datenschutzbeauftragte dieser Website wird die Einschr&auml;nkung der Verarbeitung veranlassen.</p> <br />
        <p><strong>Recht auf Daten&uuml;bertragbarkeit</strong></p>
        <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, die sie betreffenden personenbezogenen Daten in einem strukturierten, g&auml;ngigen und maschinenlesbaren Format zu erhalten. Sie hat ausserdem das Recht, dass
            diese Daten bei Vorliegen der gesetzlichen Voraussetzungen einem anderen Verantwortlichen &uuml;bermittelt werden.</p>
        <p>Ferner hat die betroffene Person das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen &uuml;bermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die
            Rechte und Freiheiten anderer Personen beeintr&auml;chtigt werden.</p>
        <p>Zur Geltendmachung des Rechts auf Daten&uuml;bertragbarkeit k&ouml;nnen Sie sich jederzeit an den vom Betreiber dieser Website bestellten Datenschutzbeauftragten wenden.</p> <br />
        <p><strong>Recht auf Widerspruch</strong></p>
        <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, aus Gr&uuml;nden, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, Widerspruch einzulegen.</p>
        <p>Der Betreiber dieser Website verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung nachweisen, die den Interessen, Rechten
            und Freiheiten der betroffenen Person &uuml;berwiegen, oder wenn die Verarbeitung der Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen dient.</p>
        <p>Zur Aus&uuml;bung des Rechts auf Widerspruch k&ouml;nnen Sie sich direkt an den Datenschutzbeauftragten dieser Website wenden.</p> <br />
        <p><strong>Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</strong></p>
        <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, eine abgegebene Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.</p>
        <p>M&ouml;chten Sie Ihr Recht auf Widerruf einer Einwilligung geltend machen, k&ouml;nnen Sie sich hierzu jederzeit an unseren Datenschutzbeauftragten wenden.</p>
        <p>&nbsp;</p>
        <h2>Urheberrechte</h2>
        <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website, geh&ouml;ren ausschliesslich dem Betreiber dieser Website oder den speziell genannten Rechteinhabern. Für die Reproduktion von sämtlichen Dateien,
            ist die schriftliche Zustimmung des Urheberrechtstr&auml;gers im Voraus einzuholen.
        </p>
        <p>Wer ohne Einwilligung des jeweiligen Rechteinhabers eine Urheberrechtsverletzung begeht, kann sich strafbar und allenfalls schadenersatzpflichtig machen.</p>
        <p>&nbsp;</p>
        <h2>Allgemeiner Haftungsausschluss</h2>
        <p>Alle Angaben unseres Internetangebotes wurden sorgf&auml;ltig gepr&uuml;ft. Wir bem&uuml;hen uns, unser Informationsangebot aktuell, inhaltlich richtig und vollst&auml;ndig anzubieten. Trotzdem kann das Auftreten von Fehlern nicht v&ouml;llig
            ausgeschlossen werden, womit wir keine Garantie f&uuml;r Vollst&auml;ndigkeit, Richtigkeit und Aktualit&auml;t von Informationen auch journalistisch-redaktioneller Art &uuml;bernehmen k&ouml;nnen. Haftungsanspr&uuml;che aus Sch&auml;den materieller
            oder ideeller Art, die durch die Nutzung der angebotenen Informationen verursacht wurden, sind ausgeschlossen, sofern kein nachweislich vors&auml;tzliches oder grob fahrl&auml;ssiges Verschulden vorliegt.</p>
        <p>Der Herausgeber kann nach eigenem Ermessen und ohne Ank&uuml;ndigung Texte ver&auml;ndern oder l&ouml;schen und ist nicht verpflichtet, Inhalte dieser Website zu aktualisieren. Die Benutzung bzw. der Zugang zu dieser Website geschieht auf eigene
            Gefahr des Besuchers. Der Herausgeber, seine Auftraggeber oder Partner sind nicht verantwortlich f&uuml;r Sch&auml;den, wie direkte, indirekte, zuf&auml;llige, vorab konkret zu bestimmende oder Folgesch&auml;den, die angeblich durch den Besuch
            dieser Website entstanden sind und &uuml;bernehmen hierf&uuml;r folglich keine Haftung.</p>
        <p>Der Herausgeber &uuml;bernimmt ebenfalls keine Verantwortung und Haftung f&uuml;r die Inhalte und die Verf&uuml;gbarkeit von Website Dritter, die &uuml;ber externe Links dieser Website erreichbar sind. F&uuml;r den Inhalt der verlinkten Seiten
            sind ausschliesslich deren Betreiber verantwortlich. Der Herausgeber distanziert sich damit ausdr&uuml;cklich von allen Inhalten Dritter, die m&ouml;glicherweise straf- oder haftungsrechtlich relevant sind oder gegen die guten Sitten verstossen.</p>
        <p>&nbsp;</p>
        <h2>&Auml;nderungen</h2>
        <p>Wir k&ouml;nnen diese Datenschutzerkl&auml;rung jederzeit ohne Vorank&uuml;ndigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerkl&auml;rung Teil einer Vereinbarung mit Ihnen ist, werden
            wir Sie im Falle einer Aktualisierung über die &Auml;nderung per E-Mail oder auf andere geeignete Weise informieren.</p>
        <p>&nbsp;</p>
        <h2>Fragen an den Datenschutzbeauftragten</h2>
        <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die f&uuml;r den Datenschutz zu Beginn der Datenschutzerkl&auml;rung aufgef&uuml;hrten, verantwortlichen Person in unserer Organisation.</p>
        <p>&nbsp;</p>
        <!--ACHTUNG: Wenn Sie die Quelle ohne Erlaubnis von SwissAnwalt entfernen, dann begehen Sie eine Urheberrechtsverletzung welche in jedem Fall unter Kostenfolge geahndet wird.--><br />Quelle:
        <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a></p>
        <!--Bitte beachten Sie die AGB von SwissAnwalt betreffend allfällig anfallenden Kosten bei Weglassen der Quelle!-->
    </div>
    </div>
    `;
}

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
                        <li>
                            <p>You can only delete a task when it is completed.</p>
                        </li>
                        
                    </ul>
                </div>
                <div class="help-container">
                    <h2>How do I use the backlog?</h2>
                    <ul>
                        <li>
                            <p>Create new tasks in the add-task section.</p>
                        </li>
                        <li>
                            <p> Fill the form and choose by whom the task should be processed.</p>
                        </li>
                        <li>
                            <p> You can create new categories for your individual purpose.</p>
                        </li>
                        <li>
                            <p> The color of a card in the backlog stands for the category to which the task was assigned.</p>
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
                            <p>The backlog is a collection of upcoming tasks and ideas that are not yet in the focus of
                                the
                                project team.</p>
                        </li>
                        <li>
                            <p>If you want to stop while creating a task, just click cancel</p>
                        </li>
                        <li>
                            <p>By click on the pen you can see and edit all details.</p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        </div>
        `;
}