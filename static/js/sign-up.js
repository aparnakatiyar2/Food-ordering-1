function check() {

    return emptycheck();
}
function pass_cnf() {      
    let pass = document.getElementById('password').value;
    let cnf_pass = document.getElementById('cnf-pass').value;
    if(pass != cnf_pass)
    {
        alert("Password did not match");
        return false;
    }
    else {
        console.log("congrats");
    }
}

function emptycheck() {
    let email = document.getElementById('email');
    let cnf_pass = document.getElementById('cnf-pass');
    let pass = document.getElementById('password');
    let user = document.getElementById('name');
    let dob = document.getElementById('birth-date').value;
    console.log(dob);
    if (user.value.length == 0 || cnf_pass.value.length == 0 || pass.value.length == 0 || email.value.length == 0 || !Date.parse(dob)) {
        alert('fill all details');
        return false;
    }


    else {
        return pass_cnf();
    }            
    
}