// Show sections and projects on scroll
const revealOnScroll = () => {
  const sections = document.querySelectorAll("section");
  const projects = document.querySelectorAll(".project");

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });

  projects.forEach(project => {
    const top = project.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      project.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Form submit message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formStatus").textContent = "Thanks for reaching out! I'll get back to you soon.";
  this.reset();
});
