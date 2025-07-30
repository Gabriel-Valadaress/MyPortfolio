function sendEmail(event) {
  event.preventDefault();

  const submitButton = document.getElementById("submit");
  const form = document.getElementById("contact-form");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitButton.disabled = true;
  const originalText = submitButton.innerText;
  submitButton.innerText = "Sending...";

  const templateParams = {
    firstName: document.querySelector("#firstName").value.trim(),
    lastName: document.querySelector("#lastName").value.trim(),
    email: document.querySelector("#email").value.trim(),
    subject: document.querySelector("#subject").value.trim(),
    message: document.querySelector("#message").value.trim(),
  };

  emailjs
    .send("service_urnvjsn", "template_kpw0d6m", templateParams)
    .then(() => {
      alert("Email sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerText = originalText;
    });
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", sendEmail);
