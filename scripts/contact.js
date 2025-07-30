document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", sendEmail);
});


function sendEmail(event) {
  event.preventDefault();

  const submitButton = document.getElementById("submit");
  const form = document.getElementById("contact-form");

  function showTooltipMessage(message, isSuccess = true) {
  const popup = document.getElementById("popUpEmailSend");
  popup.textContent = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
  }

  const language = localStorage.getItem("language") || "english";
  let sending = "";
  let success = "";
  let emailError = "";

  if (language === "portuguese") {
      sending = "Enviando";
      success = "Email enviado com sucesso!";
      emailError = "Erro ao enviar o email. Por favor, tente novamente!";
  } else {
      sending = "Sending";
      success = "Email sent successfully!";
      emailError = "Error sending email. Please try again.";
  }


  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitButton.disabled = true;
  const originalText = submitButton.innerText;
  submitButton.innerText = sending;
  const templateParams = {
    firstName: document.querySelector("#firstName").value.trim(),
    lastName: document.querySelector("#lastName").value.trim(),
    email: document.querySelector("#email").value.trim(),
    subject: document.querySelector("#subject").value.trim(),
    message: document.querySelector("#message").value.trim(),
  };
  emailjs
    .send("service_y2pfg6q", "template_r3eyioq", templateParams)
    .then(() => {
      showTooltipMessage(success);
      form.reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
     showTooltipMessage(emailError, false);
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerText = originalText;
    });
}