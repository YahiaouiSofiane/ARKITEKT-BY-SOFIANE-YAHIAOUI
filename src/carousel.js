const heroPreviousArrow = document.querySelector(".hero__previous");

const heroNextArrow = document.querySelector(".hero__next");

const heroImageContainer = document.querySelector(".hero__images");


heroPreviousArrow.onclick = () => {
    heroImageContainer.scrollLeft -= 310;
}

heroNextArrow.onclick = () => {
    heroImageContainer.scrollLeft += 310;
}