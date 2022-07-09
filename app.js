const gitBttn = document.getElementById("gitButton");
const linkedInBttn = document.getElementById("linkedinButton");
const instaBttn = document.getElementById("instaButton");
const faceBttn = document.getElementById("faceButton");

const redirectToGit = () => {
    window.open("https://github.com/sgeorgiev18", "_blank");
}

const redirectToInsta = () => {
    window.open("https://www.instagram.com/s_georgiev.18/", "_blank");
}

const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/simeon-georgiev-4a3578225/", "_blank");
}

const redirectToFacebook = () => {
    window.open("https://www.facebook.com/simo.angelov.12", "_blank");
}

gitBttn.addEventListener("click", redirectToGit);
instaBttn.addEventListener("click", redirectToInsta);
linkedInBttn.addEventListener("click", redirectToLinkedIn);
faceBttn.addEventListener("click", redirectToFacebook);