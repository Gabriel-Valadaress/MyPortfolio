let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const gitHubImage = document.getElementById("githubImage");
const githubImageFooter = document.getElementById("githubImageFooter");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
    gitHubImage.src = "images/light-github.svg";
    githubImageFooter.src = "images/light-github.svg";

}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
    gitHubImage.src = "images/dark-github.svg";
    githubImageFooter.src = "images/dark-github.svg";
}

if (darkmode === "active") {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "active") {
        enableDarkmode();
    }
    else {
        disableDarkmode();
    }
})