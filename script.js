/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  //reset: true,
  distance: '180px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .educational-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  strings: ['Undergraduate Student', 'DevCloudOps Engineer', 'Network Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value; // Corrected ID
  const message = document.getElementById("message").value;

  // Validate form fields
  if (!name || !email || !phone || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Send email using SMTP.js
  Email.send({
    Host: "smtp.mailendo.com",
    Username: "supunlakshan085@gmail.com",
    Password: "004DB6E149D075824576D631BB59389E4534",
    To: 'supunlakshan085@gmail.com',
    From: "supunlakshan085@gmail.com",
    Subject: subject,
    Body: `Name: ${name} <br> Email: ${email} <br> Phone: ${phone} <br> Message: ${message}`
  }).then(
    message => {
      alert("Message sent successfully!");
      form.reset(); // Clear the form after successful submission
    }
  ).catch(
    error => {
      alert("Failed to send message. Please try again later.");
      console.error(error);
    }
  );
});