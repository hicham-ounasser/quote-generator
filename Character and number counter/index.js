const inputText = document.getElementById("inputText");
const charCounter = document.getElementById("charCounter");
const numCounter = document.getElementById("numCounter");

inputText.addEventListener("input", () => {
  if (inputText.value.trim() === " ") {
    charCounter.textContent = 0;
    numCounter.textContent = 0;
    return false;
    // const text = inputText.value;
    // charCounter.textContent = text.length;
    // numCounter.textContent = countNumbers(text);
  }
});

inputText.addEventListener("input", () => {
  const text = inputText.value;
  charCounter.textContent = text.length;
  numCounter.textContent = countNumbers(text);
});

function countNumbers(text) {
  let count = 0;
  for (let char of text) {
    if (!isNaN(char) && char !== " ") {
      count++;
    }
  }
  return count;
}
