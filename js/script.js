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
    const div = document.querySelector(".textInterest");
    const p = div.children;
    const img = props.classList;
    if (img.contains("series")) {
      console.log(p[0]);
    }
    if (img.contains("animes")) {
      console.log(p[1]);
    }
    if (img.contains("viajens")) {
      console.log(p[2]);
    }
    if (img.contains("games")) {
      console.log(p[3]);
    }
    if (img.contains("pets")) {
      console.log(p[4]);
    }
  });
});
