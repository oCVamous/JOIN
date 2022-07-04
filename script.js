function init() {
    loadNavbar();
}
function loadNavbar() {
    document.getElementById('navbar').innerHTML += /*html*/`
        <img id="joinlogo" src="img/joinlogo.png" onclick="history.go(0)">
        <ul id="menulist">
            <li>
                <div class="active-s" id="menuBoard-1"></div>
                <a href="">BOARD</a>
            </li>
            <li>
                <div class="active-s" id="menuBoard-2"></div>
                <a href="">BACKLOG</a></li>
            <li>
                <div class="active-s" id="menuBoard-3"></div>
                <a href="">ADD TASK</a>
            </li>
            <li>
                <div class="active-s" id="menuBoard-4"></div>
                <a href="">HELP</a>
            </li>
        </ul>
    `;
}