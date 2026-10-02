const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");


// ============================
// ABRIR / CERRAR MENÚ
// ============================

menuButton.addEventListener("click", () => {

  menuButton.classList.toggle("active");

  sideMenu.classList.toggle("open");

});


// ============================
// CERRAR MENÚ AL ELEGIR
// ============================

const menuLinks = sideMenu.querySelectorAll("a");

menuLinks.forEach(link => {

  link.addEventListener("click", () => {

    menuButton.classList.remove("active");

    sideMenu.classList.remove("open");

  });

});


// ============================
// CERRAR SI SE HACE CLICK
// AFUERA DEL MENÚ
// ============================

document.addEventListener("click", (event) => {

  const clickedInsideMenu =
    sideMenu.contains(event.target);

  const clickedButton =
    menuButton.contains(event.target);

  if (
    !clickedInsideMenu &&
    !clickedButton &&
    sideMenu.classList.contains("open")
  ) {

    menuButton.classList.remove("active");

    sideMenu.classList.remove("open");

  }

});


// ============================
// REVELADO SUAVE DE SECCIONES
// ============================

const sections =
  document.querySelectorAll(".section");

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.12
    }
  );


sections.forEach(section => {

  section.classList.add("hidden");

  observer.observe(section);

});


// ============================
// ESTRELLAS PEQUEÑAS
// MOVIMIENTO SUAVE
// ============================

const stars =
  document.querySelectorAll(".floating-stars span");

stars.forEach((star, index) => {

  const delay = index * 0.7;

  star.style.animationDelay =
    `${delay}s`;

});
