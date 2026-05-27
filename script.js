const letters = document.querySelectorAll(".letter");
const img = document.createElement("img");

letters.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    console.log(element.innerHTML);
    img.src = `img/${element.innerHTML}.jpeg`;
    element.appendChild(img);
  });

  element.addEventListener("mouseleave", () => {});
});
