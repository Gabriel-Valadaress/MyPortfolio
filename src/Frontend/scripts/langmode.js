const langSwitch = document.getElementById("lang-switch");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const aboutMe = document.getElementById("aboutMe");

const data = {
    portuguese: {
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        contact: "Contato",
        aboutMe: "Sou Engenheiro Mecânico, em transição de carreira para a área de Engenharia de Software. Atualmente, estou aprofundando meus estudos em C# e .NET, com foco no desenvolvimento back-end. Tenho conhecimentos também em HTML, CSS, JavaScript, manipulação da DOM e consumo de APIs. Possuo inglês fluente, facilidade para aprender novas tecnologias e estou comprometido em evoluir constantemente como desenvolvedor. Busco minha primeira oportunidade na área de Engenharia de Software, onde possa aplicar meus aprendizados, participar de projetos desafiadores e crescer profissionalmente.",
    },
    english: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        aboutMe: "I'm a Mechanical Engineer transitioning into a Software Engineering career. Currently, I'm deepening my studies in C# and .NET with a focus on back-end development. I also have knowledge in HTML, CSS, JavaScript, DOM manipulation, and API consumption. I’m fluent in English, quick to learn new technologies, and committed to continuously growing as a developer. I'm seeking my first opportunity in the Software Engineering field where I can apply what I've learned, contribute to challenging projects, and grow professionally.",
    }
};

const setLanguage = (lang) => {
    langSwitch.innerText = lang === "english" ? "en" : "pt-BR";
    about.innerText = data[lang].about;
    skills.innerText = data[lang].skills;
    projects.innerText = data[lang].projects;
    contact.innerText = data[lang].contact;
    aboutMe.innerText = data[lang].aboutMe;
    localStorage.setItem("language", lang);
};

const language = localStorage.getItem("language");
if (language === "portuguese") {
    setLanguage("portuguese");
} else {
    setLanguage("english");
}

langSwitch.addEventListener("click", () => {
    const currentLang = localStorage.getItem("language");
    const newLang = currentLang === "english" ? "portuguese" : "english";
    setLanguage(newLang);
});
