const langDropdown = document.getElementById("lang-switch");
const langButton = document.getElementById("current-lang");
const langMenuItems = langDropdown.querySelectorAll(".dropdown-menu li");

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const h1 = document.querySelector("h1");
const backend = document.getElementById("backend");
const aboutMe = document.getElementById("aboutMe");
const stacks = document.getElementById("stacks");
const projectsSection = document.getElementById("projectsSection");
const firstProjecth3 = document.getElementById("firstProjecth3");
const firstProjectp = document.getElementById("firstProjectp");
const secondProjecth3 = document.getElementById("secondProjecth3");
const secondProjectp = document.getElementById("secondProjectp");
const thirdProjecth3 = document.getElementById("thirdProjecth3");
const thirdProjectp = document.getElementById("thirdProjectp");
const letstalk = document.getElementById("letstalk");
const firstnamelabel = document.getElementById("firstnamelabel");
const lastnamelabel = document.getElementById("lastnamelabel");
const subjectlabel = document.getElementById("subjectlabel");
const messagelabel = document.getElementById("messagelabel");
const submit = document.getElementById("submit");
const footerh4 = document.getElementById("footerh4");
const copypopup = document.getElementById("copypopup");

const data = {
    portuguese: {
        about: "Sobre",
        skills: "Tecnologias",
        projects: "Projetos",
        contact: "Contato",
        h1: "Olá, eu sou Gabriel Valadares",
        backend: "Desenvolvedor back-end",
        aboutMe: "Desenvolvedor back-end especializado em C# e .NET para criação de APIs e sistemas com mais de 4 anos de experiência com tecnologia na indústria 4.0.",
        stacks: "Proficiência nas seguintes ferramentas e linguagens",
        projectsSection: "Projetos",
        firstProjecth3: "Gerenciamento de mensagens",
        firstProjectp: "Desenvolvimento de um app de gerenciamento de mensagens com API REST, permitindo que usuários criem, visualizem, editem e excluam mensagens. As mensagens são identificadas por e-mail e armazenadas com data de envio, seguindo boas práticas de POO.",
        secondProjecth3: "Xadrez de console",
        secondProjectp: "Desenvolvimento de um jogo de xadrez para console em C#, aplicando os principais conceitos de POO. A aplicação permite interação via terminal, com movimentação das peças conforme as regras oficiais e validações das jogadas.",
        thirdProjecth3: "Jogo Quiz",
        thirdProjectp: "Desenvolvimento de um jogo de quiz sobre Gerência da Qualidade em HTML, CSS e JavaScript puro. O jogo roda localmente no navegador e apresenta perguntas de múltipla escolha com pontuação e feedback imediato ao usuário.",
        letstalk: "Vamos conversar?",
        firstnamelabel: "Primeiro nome",
        lastnamelabel: "Sobrenome",
        subjectlabel: "Assunto",
        messagelabel: "Mensagem",
        submit: "Enviar",
        footerh4: "Vamos trabalhar juntos",
        developedBy: "Desenvolvido por Gabriel Valadares",
        copypopup: "Copiado para área de transferência!"
    },
    english: {
        about: "About",
        skills: "Skills & tools",
        projects: "Projects",
        contact: "Contact",
        h1: "Hey, I'm Gabriel Valadares",
        backend: "Back-end developer",
        aboutMe: "Back-end developer specialized in C# and .NET for building APIs and systems with over 4 years of experience with technology in Industry 4.0.",
        stacks: "Proficiency on the following tools and stacks",
        projectsSection: "Projects",
        firstProjecth3: "Message Management",
        firstProjectp: "Development of a message management app with a REST API, allowing users to create, view, edit, and delete messages. Messages are identified by email and stored with a timestamp, following object-oriented programming best practices.",
        secondProjecth3: "Console chess",
        secondProjectp: "Development of a console-based chess game in C#, applying core Object-Oriented Programming (OOP) principles. The application allows interaction via terminal, with piece movement following official chess rules and move validations.",
        thirdProjecth3: "Quiz Game",
        thirdProjectp: "Development of a quiz game on Quality Management using pure HTML, CSS, and JavaScript. The game runs locally in the browser and features multiple-choice questions with scoring and instant user feedback.",
        letstalk: "Let's talk?",
        firstnamelabel: "First name",
        lastnamelabel: "Last name",
        subjectlabel: "Subject",
        messagelabel: "Message",
        submit: "Send",
        footerh4: "Let's work together",
        developedBy: "Developed by Gabriel Valadares",
        copypopup: "Copied to clipboard!"
    }
};

const setLanguage = (lang) => {
    const shortLabel = lang === "english" ? "ENG 🇺🇸" : "POR 🇧🇷";
    langButton.innerText = shortLabel;
    about.innerText = data[lang].about;
    skills.innerText = data[lang].skills;
    projects.innerText = data[lang].projects;
    contact.innerText = data[lang].contact;
    h1.innerText = data[lang].h1;
    backend.innerText = data[lang].backend;
    aboutMe.innerText = data[lang].aboutMe;
    stacks.innerText = data[lang].stacks;
    projectsSection.innerText = data[lang].projectsSection;
    firstProjecth3.innerText = data[lang].firstProjecth3;
    firstProjectp.innerText = data[lang].firstProjectp;
    secondProjecth3.innerText = data[lang].secondProjecth3;
    secondProjectp.innerText = data[lang].secondProjectp;
    thirdProjecth3.innerText = data[lang].thirdProjecth3;
    thirdProjectp.innerText = data[lang].thirdProjectp;
    letstalk.innerText = data[lang].letstalk;
    firstnamelabel.innerText = data[lang].firstnamelabel;
    lastnamelabel.innerText = data[lang].lastnamelabel;
    subjectlabel.innerText = data[lang].subjectlabel;
    messagelabel.innerText = data[lang].messagelabel;
    submit.innerText = data[lang].submit;
    footerh4.innerText = data[lang].footerh4;
    developedBy.innerText = data[lang].developedBy;
    copypopup.innerText = data[lang].copypopup;
    localStorage.setItem("language", lang);
};

const language = localStorage.getItem("language");
if (language === "portuguese") {
    setLanguage("portuguese");
} else {
    setLanguage("english");
}

// Toggle dropdown open/close
langButton.addEventListener("click", (e) => {
    langDropdown.classList.toggle("open");
    e.stopPropagation();
});

// Detect selected language from list
langMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        const selectedLang = item.getAttribute("data-lang");
        setLanguage(selectedLang);
        langDropdown.classList.remove("open");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
    langDropdown.classList.remove("open");
});
