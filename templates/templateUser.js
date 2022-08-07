// Login Section ////////////////////////////////////////////////////////////////////////////////////////////////////

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
            <button onclick="login()" class="btn btn-primary my-1">Login</button>
            <button onclick="loadRegister()" class="btn btn-primary my-1">Register</button>
            <button onclick="guest()" class="btn btn-primary my-1">Guest Login</button>
        </div>
    </div>
    `;
}

// Register Section ////////////////////////////////////////////////////////////////////////////////////////////////////

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
            <button onclick="register()" class="btn btn-primary">Register</button>
        </div> 
    </div>
    `;
}