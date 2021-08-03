const d = document;

const hamburguerMenu = () => {
  const $hamburguer = d.querySelector(".menu-hamburguer");
  const $overlay = d.querySelector(".overlay");
  const $menuHeader = d.querySelector(".menu");
  const $navigation = d.querySelector(".navigation");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-hamburguer") || e.target.matches(".menu-hamburguer *")) {
      if ($hamburguer.classList.contains("is-active")) {
        $hamburguer.classList.remove("is-active");
        d.body.classList.remove("no-scroll");
        $navigation.classList.remove("open");
        $menuHeader.classList.remove("open");
        $overlay.classList.remove("fade-in");
        $overlay.classList.add("fade-out");
      } else {
        $hamburguer.classList.add("is-active");
        d.body.classList.add("no-scroll");
        $navigation.classList.add("open");
        $menuHeader.classList.add("open");
        $overlay.classList.add("fade-in");
        $overlay.classList.remove("fade-out");
      }
    }

    if (e.target.matches(".menu-link")) {
      $hamburguer.classList.remove("is-active");
      $navigation.classList.remove("open");
      $menuHeader.classList.remove("open");
      d.body.classList.remove("no-scroll");

      let screenWidth = window.innerWidth || d.documentElement.clientWidth;
      if (screenWidth < 1024) {
        $overlay.classList.remove("fade-in");
        $overlay.classList.add("fade-out");
        setTimeout(() => $overlay.classList.remove("fade-out"), 350);
      }
    }
  });
};

export default hamburguerMenu;
