document.getElementById('form').addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let last = document.getElementById('last').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let confirmpas = document.getElementById('confirm pass').value;
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
    document.getElementById("signin").reset();

});
