const stack = document.querySelector(".autocarrusel-stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("autocarrusel-card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("autocarrusel-card")) {
    lastCard.classList.add("autocarrusel-swap");

    setTimeout(() => {
      lastCard.classList.remove("autocarrusel-swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1200);
  }
}

let autoplayInterval = setInterval(moveCard, 1000);

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("autocarrusel-swap");

    setTimeout(() => {
      card.classList.remove("autocarrusel-swap");
      stack.insertBefore(card, stack.firstElementChild);
    }, 1200);
  }
});
