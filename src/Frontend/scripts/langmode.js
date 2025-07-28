let language = localStorage.getItem("language");
const langSwitch = document.getElementById("lang-switch");

const setLanguage = (lang) => {
    if (lang === "english") {
        document.body.classList.add("english");
        document.body.classList.remove("portuguese");
    } else {
        document.body.classList.add("portuguese");
        document.body.classList.remove("english");
    }
    localStorage.setItem("language", lang);
};

// Aplica o idioma salvo ao carregar
if (language === "english") {
    setLanguage("english");
} else {
    setLanguage("portuguese"); // padrão
}

langSwitch.addEventListener("click", () => {
    const currentLang = localStorage.getItem("language");
    const newLang = currentLang === "english" ? "portuguese" : "english";
    setLanguage(newLang);
});
