var s = "";

function verifyPass() {
    return "Jpi3146"
}

while (s != verifyPass()) {
    s = prompt("Please enter your password.");
    if (s == verifyPass()) {
        alert("Access granted. Click OK to continue.")
        window.location.href = "home.html"; //page to redirect if password entered is correct

    } else {
        alert("Incorrect password. Refresh the page and try again.");

    }
}
