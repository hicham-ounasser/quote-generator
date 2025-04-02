const addStarBtn = document.getElementById("add-star-btn");
const starContainer = document.getElementById("star-container");

addStarBtn.addEventListener("click", () => {
  const star = document.createElement("span");
  star.textContent = "⭐";
  star.classList.add("star");
  starContainer.appendChild(star);
});
