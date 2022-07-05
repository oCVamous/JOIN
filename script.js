function init() {
    loadContent();
}


function loadContent() {
    document.getElementById('content').innerHTML = /*html*/`
        <div class="animation">
                <div id="animation-1">
                    <img class="joinlogo" src="img/logo.png" alt="">
                    <h1>Best Kanban-System of the World</h1>
                </div>
                
                <div id="werbetext">
                    <p><img src="img/bullet-point.png" style="height: 10px;"> Easy Peasy per DRAG & DROP</p>
                    <p><img src="img/bullet-point.png" style="height: 10px;"> Koordination der Task für das ganze Team</p>
                    <p><img src="img/bullet-point.png" style="height: 10px;"> Den Task einzelnen Bearbeitungsschritten geben</p>
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
