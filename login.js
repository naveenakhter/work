document.getElementById('login-form').addEventListener('click', function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpas = document.getElementById('confirm password').value;
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!email.includes("@")) {
        alert("email is not valid");
        return;
    }

    if (!regexp.test(password)) {
        alert("password must be strong and atleast 8 charactors");
        return;
    }

    if (password !== confirmpas) {
        alert("password does'nt match");
        return;
    }

    alert("successfull");
    document.getElementById("login").reset();

});
