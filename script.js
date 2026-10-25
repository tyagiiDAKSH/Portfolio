const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    nav.querySelectorAll("a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const email = form.get("email").trim();
  const message = form.get("message").trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  // Replace this address with your real email before publishing.
  window.location.href = `mailto:daksh.tyagi@example.com?subject=${subject}&body=${body}`;
  document.querySelector("#form-note").textContent = "Your email app should open with your message ready to send.";
});