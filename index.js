// nav-image changer for responsiveness
const image = document.getElementById("myImage");

function updateImageSrc() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    image.src = "./images/1Asset-26-2048x320.webp";
  } else {
    image.src = "./images/1Asset-25-2048x320.webp";
  }
}

window.onresize = updateImageSrc;
updateImageSrc();

// bottsrap newletter validation

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


// scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.remove("d-none");
  } else {
    scrollToTopBtn.classList.add("d-none");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const myElement = document.getElementById("myElement");
function Mouseeeee() {
  myElement.addEventListener("mouseenter", () => {
    myElement.classList.add("fa-beat");
  });

  myElement.addEventListener("mouseleave", () => {
    myElement.classList.remove("fa-beat");
  });  
}
Mouseeeee()
