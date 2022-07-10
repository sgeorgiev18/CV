//import { jsonTimeline } from './jsonFile';

const firstPage = () => {
    const gitBttn = document.getElementById("gitButton");
    const linkedInBttn = document.getElementById("linkedinButton");
    const instaBttn = document.getElementById("instaButton");
    const faceBttn = document.getElementById("faceButton");
    const timelineBttn = document.getElementById("timelineBttn");

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

    const redirectToTimeline = () => {
        location.href = "timeline.html";
    }

    gitBttn.addEventListener("click", redirectToGit);
    instaBttn.addEventListener("click", redirectToInsta);
    linkedInBttn.addEventListener("click", redirectToLinkedIn);
    faceBttn.addEventListener("click", redirectToFacebook);
    timelineBttn.addEventListener("click", redirectToTimeline);
}

const secondPage = () => {
    const btnBirth = document.getElementById("birth");
    const btnFristGrade = document.getElementById("firstGrade");
    const btnChess = document.getElementById("chess");
    const btnFootball = document.getElementById("football");
    const btnHighSchool = document.getElementById("highSchool");
    const btnBox = document.getElementById("trainingBox");
    const btnDeutsch = document.getElementById("deutsch");
    const btnSwimming = document.getElementById("swimming");
    const btnLicenseCar = document.getElementById("licenseB");
    const btnUniversity = document.getElementById("university");
    const btnIqvia = document.getElementById("iqvia");
    const btnAssistant = document.getElementById("assistant");
    const btnSoftUni = document.getElementById("softUni");
    const btnChairman = document.getElementById("chairman");

    const backdrop = document.getElementById('backdrop');
    const modal = document.getElementById("add-modal");
    const birth = document.getElementById("item-birth");
    const school = document.getElementById("item-school");
    const chess = document.getElementById("item-chess");
    const football = document.getElementById("item-football");
    const highSchool = document.getElementById("item-high-school");
    const box = document.getElementById("item-box");
    const deutsch = document.getElementById("item-deutsch");
    const swimming = document.getElementById("item-swimming");
    const licenseB = document.getElementById("item-licenseB");
    const uni = document.getElementById("item-university");
    const iqvia = document.getElementById("item-iqvia");
    const assistant = document.getElementById("item-assistant");
    const softUni = document.getElementById("item-softUni");
    const chairMan = document.getElementById("item-chairman");

    console.log(jsonTimeline[0]);

//  "item-birth" "item-school" "item-chess" "item-football" "item-high-school" "item-box" "item-deutsch" "item-swimming"
//  "item-licenseB" "item-university" "item-iqvia" "item-assistant" "item-softUni" "item-chairman"


    const toggleBackdrop = () => {
        backdrop.classList.toggle('visible');
    };

    const toggleModal = () => {
        modal.classList.toggle("visible");
    };

    const showBirth = () => {
        toggleModal();
        birth.classList.remove("invisible");
        toggleBackdrop();
    };

    btnBirth.addEventListener("click", showBirth)
}

let page = document.body.id;
if (page == "fp") {
    firstPage();
} else {
    secondPage();
}