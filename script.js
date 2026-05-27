const letters = document.querySelectorAll(".letter");
const especialBtn = document.querySelector("#filler-gif");

letters.forEach((element) => {
  const letter = element.textContent.trim();
  console.log(letter);

  const img = document.createElement("img");

  if (letter == "???") {
    img.src = `img/si.gif`;
    console.log(img);
  } else {
    img.src = `img/${letter}.jpeg`;
  }

  img.classList.add("letter-img");

  element.appendChild(img);

  element.addEventListener("mouseenter", () => {
    element.classList.add("active");
  });

  element.addEventListener("mouseleave", () => {
    element.classList.remove("active");
  });
});
