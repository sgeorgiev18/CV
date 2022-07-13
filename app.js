const objectTimeline = [ 
    {
        "id": 1,
        "title": "Birth",
        "descr": "On the 26th of August 2001 I was born in Sofia. And if you are asking yourself that question... Yes, I am Virgo.",
        "pic": "pics/hello_world.png"
    },
    {
        "id": 2,
        "title": "Elementary School",
        "descr": "In 2008 in September, at the age of 8, I entered Elementary School \"Hristo Botev\" in Elin Pelin City. What a time it was!",
        "pic": "pics/first_grade.jpg"
    },
    {
        "id": 3,
        "title": "Chess trainings",
        "descr": "In 2008 in November I started training chess in Team \"Verila\" Chess Club in Elin Pelin City. I trained chess for more than 10 years and I am still practicing it. (I am the boy with the yellow t-shirt).",
        "pic": "pics/chess_first.jpg"
    },
    {
        "id": 4,
        "title": "Football trainings",
        "descr": "In 2009 in April I started training football in Team \"Levski 1923 Elin Pelin\" in Elin Pelin City. Trained football for more than 10 years and I am still playing.",
        "pic": "pics/football.jpg"
    },
    {
        "id": 5,
        "title": "High School",
        "descr": "In 2015 in September I entered 31st Secondary School \"Ivan Vazov\" for Foreign Languages and Management in Sofia. Really miss those years and my high-school-friends. There were numerous excursions to destinations like Bansko, Pamporovo, Ravda and so on and the memories we made together will last.",
        "pic": "pics/sychem.jpg"
    },
    {
        "id": 6,
        "title": "Box Trainings",
        "descr": "In 2018 in February I started training box in boxing team \"Academica\" in Sofia. Trained box for approximately 8 months. Learned a lot of important lessons (if you know what I mean).",
        "pic": "pics/boxing.jpg"
    },
    {
        "id": 7,
        "title": "Started learning German",
        "descr": "In 10th grade I discovered that there is a german faculty in the Technical University of Sofia where you can study \"Informatics\" and I immediately decided that I will study there! So in 2018 in April I started learning german language in \"Goethe Institut Sofia\" in Sofia. I started from A2 Level since I was learning it in High School too.",
        "pic": "pics/goethe.png"
    },
    {
        "id": 8,
        "title": "Started Training Swimming",
        "descr": "In 2018 in June I started learning to swim in \"Academica\" pool in Sofia. Later I got licensed as a pool Lifeguard.",
        "pic": "pics/swimming.jpg"
    },
    {
        "id": 9,
        "title": "License for car 'B'",
        "descr": "In 2019 in August I got my driving license category \"B\". Later I got driving license category \"A2\".",
        "pic": "pics/license.png"
    },
    {
        "id": 10,
        "title": "Technical University of Sofia",
        "descr": "In 2020 I started studying \"Comupter Systems and Technologies\" in the Technical University of Sofia in the german faculty. Later I began work there as a \"Teaching Assistant\".",
        "pic": "pics/tu.png"
    },
    {
        "id": 11,
        "title": "Started Internship",
        "descr": "In 2021 I started my first Internship in \"IQVIA\" as a \"Statistical Programmer\". After the internship which lasted 6 months, I stayed in the firm and am still working there as \"Senior Statistical Programming Technician\". Got the chance to work with technologies like \"Jira\", R(programming language), \"Git\" of course. Worked on developing Dashboards and got to know the \"Statistical programming\". Currently I am broadening my experience with this type of programming and I am getting to learn \"SAS\".",
        "pic": "pics/IQVIA.jpg"
    },
    {
        "id": 12,
        "title": "Started working as a \"Teaching Assistant\" in TU-Sofia",
        "descr": "In 2021 in September I decided that I want to help the new students in our faculty so started working as a \"Teaching Assistant\" in TU-Sofia. The subject was \"Introduction in Informatics\". I am still working as an Asisstant and even started teaching in a new subject: \"Algorithms and Data Structures\".",
        "pic": "pics/ta.jpg"
    },
    {
        "id": 13,
        "title": "Started courses in SoftUni for .NET Developer",
        "descr": "In 2021 in October I started online courses in SoftUni. I decided to start learning C# so that in the future I could work as a .NET Web Developer.",
        "pic": "pics/softUni.png"
    },
    {
        "id": 14,
        "title": "Got hired as a Chairman",
        "descr": "In 2022 in October I was elected to be the new \"Chairman\" of the chess club I was training as a kid in. Can't wait to see how it will be like!",
        "pic": "pics/chess.jpg"
    }
            
];

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
    const btnSubmitModal = document.getElementById("btn-submit");
    const btnCloseWelcomeModal = document.getElementById("btn-close-modal-ref");

    const findElementByTitle = title => {
        for (let i = 0; i < objectTimeline.length; i++) {
            if (objectTimeline[i].title === title) {
                return objectTimeline[i];
            }
        }
    }

    const backdrop = document.getElementById('backdrop');
    const welcomeModal = document.getElementById("add-welcome-modal");
    const modal = document.getElementById("add-modal");
    const elementTitle = document.getElementById("modal_title");
    const elementDescription = document.getElementById("description");
    const imgEvent = document.getElementById("img-descr");

    const birthEvent = findElementByTitle("Birth");
    const school = findElementByTitle("Elementary School");
    const chess = findElementByTitle("Chess trainings");
    const football = findElementByTitle("Football trainings");
    const highSchool = findElementByTitle("High School");
    const box = findElementByTitle("Box Trainings");
    const deutsch = findElementByTitle("Started learning German");
    const swimming = findElementByTitle("Started Training Swimming");
    const licenseB = findElementByTitle("License for car 'B'");
    const uni = findElementByTitle("Technical University of Sofia");
    const iqvia = findElementByTitle("Started Internship");
    const assistant = findElementByTitle("Started working as a \"Teaching Assistant\" in TU-Sofia");
    const softUni = findElementByTitle("Started courses in SoftUni for .NET Developer");
    const chairMan = findElementByTitle("Got hired as a Chairman");

//  "item-birth" "item-school" "item-chess" "item-football" "item-high-school" "item-box" "item-deutsch" "item-swimming"
//  "item-licenseB" "item-university" "item-iqvia" "item-assistant" "item-softUni" "item-chairman"


    const toggleBackdrop = () => {
        backdrop.classList.toggle('visible');
    };

    const showModal = () => {
        modal.classList.add("visible");
    };

    const removeModal = () => {
        modal.classList.remove("visible");
        toggleBackdrop();
    };

    const displayEvent = (title, description, pic) => {
        elementTitle.innerHTML = title;
        elementDescription.innerHTML = description;
        imgEvent.src = pic;
    };

    const showBirthDetails = () => {
        showEventDetails(birthEvent)
    }

    const showSchoolDetails = () => {
        showEventDetails(school)
    }

    const showChessDetails = () => {
        showEventDetails(chess)
    }

    const showFootballDetails = () => {
        showEventDetails(football)
    }

    const showHighSchoolDetails = () => {
        showEventDetails(highSchool)
    }

    const showBoxDetails = () => {
        showEventDetails(box)
    }

    const showDeutschDetails = () => {
        showEventDetails(deutsch)
    }

    const showSwimmingDetails = () => {
        showEventDetails(swimming)
    }

    const showLicenseBDetails = () => {
        showEventDetails(licenseB)
    }

    const showUniDetails = () => {
        showEventDetails(uni)
    }

    const showIqviaDetails = () => {
        showEventDetails(iqvia)
    }

    const showAssistantDetails = () => {
        showEventDetails(assistant)
    }

    const showSoftUniDetails = () => {
        showEventDetails(softUni)
    }

    const showChairmanDetails = () => {
        showEventDetails(chairMan)
    }

    const showEventDetails = (obj) => {
        showModal();
        displayEvent(obj.title, obj.descr, obj.pic);
        toggleBackdrop();
    };

    const closeWelcomeModal = () => {
        welcomeModal.classList.add("invisible");
    };

    btnBirth.addEventListener("click", showBirthDetails);
    btnFristGrade.addEventListener("click", showSchoolDetails);
    btnChess.addEventListener("click", showChessDetails);
    btnFootball.addEventListener("click", showFootballDetails);
    btnHighSchool.addEventListener("click", showHighSchoolDetails);
    btnBox.addEventListener("click", showBoxDetails);
    btnDeutsch.addEventListener("click", showDeutschDetails);
    btnSwimming.addEventListener("click", showSwimmingDetails);
    btnLicenseCar.addEventListener("click", showLicenseBDetails);
    btnUniversity.addEventListener("click", showUniDetails);
    btnIqvia.addEventListener("click", showIqviaDetails);
    btnAssistant.addEventListener("click", showAssistantDetails);
    btnSoftUni.addEventListener("click", showSoftUniDetails);
    btnChairman.addEventListener("click", showChairmanDetails);
    btnSubmitModal.addEventListener("click", removeModal);
    backdrop.addEventListener("click", removeModal);
    btnCloseWelcomeModal.addEventListener("click", closeWelcomeModal);
}

let page = document.body.id;
if (page == "fp") {
    firstPage();
} else {
    secondPage();
}