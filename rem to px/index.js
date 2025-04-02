const input = document.getElementById("input");
const output = document.getElementById("output");

// input.addEventListener("input", () => {
//   const inputText = input.ariaValueMax.trim();
//   if (isNaN(parseFloat(inputText))) {
//     output.textContent = "Invalid input, please entre a number";
//   } else {
//     const remVal = parseFloat(inputText);
//     const pxVal = remVal * 16;
//     output.innerHTML = `${remVal} rem = ${pxVal} px`;
//   }
// });

input.addEventListener("input", () => {
  try {
    if (input.value.trim() === "") {
      output.textContent = "0rem = 0px";
      return false;
    }
    const remVal = parseFloat(input.value);
    const pxVal = remVal * 16;
    output.innerHTML = `${remVal} rem = ${pxVal} px`;
  } catch (error) {
    output.textContent = "Invalid input, please entre a number";
  }
});
