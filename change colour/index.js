const bgColor = document.getElementById("bgcolor");
const textcolor = document.getElementById("textcolor");
const changeBg = document.getElementById("changebg");

changeBg.addEventListener("click", () => {
  document.body.style.cssText = `background-color: ${bgColor.value}; color: ${textcolor.value}`;
});
