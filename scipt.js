emailjs.init("d9S3KviL8RUz0h_u_");

const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  sendBtn.innerHTML = "Sending...";

  const formData = {
    from_name: form.name.value,
    from_email: form.email.value,
    message: form.message.value,
    to_name: "Reddirani",
    to_email: "reddiranibattuluri@gmail.com",
  };

  try {
    await emailjs.send("service_pkrtsj9", "template_pse9ak5", formData);

    alert("Your message has been sent!");

    form.reset();
  } catch (error) {
    console.error(error);

    alert("Something went wrong!");
  }

  sendBtn.innerHTML = 'Send <i class="fa-regular fa-paper-plane"></i>';
});
