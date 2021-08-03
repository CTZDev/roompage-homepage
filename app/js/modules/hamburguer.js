const d = document;

const hamburguerMenu = () => {
  const $hamburguer = d.querySelector(".menu-hamburguer");
  //First fade-in and last fade-out
  const $hasFadeElements = d.querySelectorAll(".has-fade");
  const $menuLinks = d.querySelectorAll(".menu-link");
  const $navigation = d.querySelector(".navigation");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-hamburguer") || e.target.matches(".menu-hamburguer *")) {
      if ($hamburguer.classList.contains("is-active")) {
        $hamburguer.classList.remove("is-active");
        d.body.classList.remove("no-scroll");
        $navigation.classList.remove("open");
        //Applied for elements first "fade-in" last "fade-out"
        $hasFadeElements.forEach((el) => {
          el.classList.remove("fade-in");
          el.classList.add("fade-out");
        });
      } else {
        $hamburguer.classList.add("is-active");
        d.body.classList.add("no-scroll");
        $navigation.classList.add("open");
        //Applied for elements first "fade-in" last "fade-out"
        $hasFadeElements.forEach((el) => {
          el.classList.add("fade-in");
          el.classList.remove("fade-out");
        });
      }
    }

    if (e.target.matches(".menu-link")) {
      $hamburguer.classList.remove("is-active");
      $navigation.classList.remove("open");
      d.body.classList.remove("no-scroll");
      $hasFadeElements.forEach((el) => {
        el.classList.remove("fade-in");
        el.classList.add("fade-out");
      });
    }
  });
};

export default hamburguerMenu;
