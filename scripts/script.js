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

  // Função para verificar qual seção está visível no viewport
  function onScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // ponto central da tela

    let currentSection = null;
    for (const [key, section] of Object.entries(sections)) {
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        currentSection = key;
        break;
      }
    }

    // Atualiza as classes dos <li>
    Object.entries(navItems).forEach(([key, li]) => {
      if (key === currentSection) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // disparar uma vez ao carregar a página

  Object.entries(navItems).forEach(([key, element]) => {
    element.addEventListener("click", () => {
      sections[key].scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});


const emailCopy = document.getElementById("emailCopy");
emailCopy.addEventListener('click', function (e) {
  e.preventDefault();
  const text = emailCopy.getAttribute('data-copy');
    
  navigator.clipboard.writeText(text).then(() => {
    const popup = emailCopy.querySelector('.copy-popup');
    popup.classList.add('show');
     setTimeout(() => {
        popup.classList.remove('show');
      }, 1500);
  });
});
