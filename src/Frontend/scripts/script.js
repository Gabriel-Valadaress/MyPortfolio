document.addEventListener("DOMContentLoaded", () => {
  const navItems = {
    about: document.getElementById("about"),
    skills: document.getElementById("skills"),
    projects: document.getElementById("projects"),
    contact: document.getElementById("contact")
  };

  const sections = {
    about: document.getElementById("about-section"),
    skills: document.getElementById("skills-section"),
    projects: document.getElementById("projects-section"),
    contact: document.getElementById("contact-section")
  };

  Object.entries(navItems).forEach(([key, element]) => {
    element.addEventListener("click", () => {
      sections[key].scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});
