document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('formMessage');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('serviceSelect').value;
    const message = document.getElementById('textarea_message').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('service', service);
    formData.append('message', message);
    formData.append('access_key', '9b8e8b07-6e2d-4281-bfd2-61564301fbdf'); // your API key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        messageBox.className = "success";
        messageBox.innerText = "Success! Our team will contact you soon.";
        messageBox.style.display = "block";
        form.reset();
      } else {
        messageBox.className = "error";
        messageBox.innerText = "Unable to send message. Please try again.";
        messageBox.style.display = "block";
      }
    } catch (error) {
      messageBox.className = "error";
      messageBox.innerText = "Unable to send message. Please try again.";
      messageBox.style.display = "block";
      console.error(error);
    }
  });
});
