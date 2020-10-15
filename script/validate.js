// validate the password on the register page
function validation() {
    let password1 = document.getElementById('pwd-i');
    let password2 = document.getElementById('pwd-ii');

    if(password1.value.trim() !== password2.value.trim()) {
        alert('The entered passwords do not match');
        return false;
    } else {
        return true;
    }
}