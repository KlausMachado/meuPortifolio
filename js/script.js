const hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const interest = document.querySelectorAll(".interest");
interest.forEach((props) => {
  props.addEventListener("click", () => {
    const p = document.querySelectorAll(".textInterestItem");
    const img = props.classList;
    p.forEach((item) => {
      item.classList.add("hidden");
    });
    if (img.contains("series")) {
      p[0].classList.remove("hidden");
    }
    if (img.contains("animes")) {
      p[1].classList.remove("hidden");
    }
    if (img.contains("viajens")) {
      p[2].classList.remove("hidden");
    }
    if (img.contains("games")) {
      p[3].classList.remove("hidden");
    }
    if (img.contains("pets")) {
      p[4].classList.remove("hidden");
    }
  });
});
