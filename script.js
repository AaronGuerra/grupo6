const letters = document.querySelectorAll(".letter");

letters.forEach((element) => {
  const letter = element.textContent.trim();

  const img = document.createElement("img");
  img.src = `img/${letter}.jpeg`;

  img.classList.add("letter-img");

  element.appendChild(img);

  element.addEventListener("mouseenter", () => {
    element.classList.add("active");
  });

  element.addEventListener("mouseleave", () => {
    element.classList.remove("active");
  });
});
