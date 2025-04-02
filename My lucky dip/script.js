const array1 = [];
const array2 = [];

for (let i = 1; i <= 50; i++) array1.push(i);
for (let i = 1; i <= 12; i++) array2.push(i);

document
  .getElementById("generateButton")
  .addEventListener("click", generateLuckyDip);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function generateLuckyDip() {
  shuffleArray(array1);
  shuffleArray(array2);

  const mainNum = array1.slice(0, 5);
  const specialNum = array2.slice(0, 2);

  displayNumbers(mainNum, "mainNumbers", "number", "selected");
  displayNumbers(specialNum, "specialNumbers", "star", "star");
}

function displayNumbers(numbers, containerId, baseClass, selectedClass) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  numbers.forEach((num) => {
    const div = document.createElement("div");
    div.classList.add(baseClass, selectedClass);
    div.textContent = num;
    container.appendChild(div);
  });
}
