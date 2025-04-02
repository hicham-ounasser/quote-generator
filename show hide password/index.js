const input = document.getElementById("password");
const eye = document.getElementById("fa-eye");

eye.onclick = () => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
};
