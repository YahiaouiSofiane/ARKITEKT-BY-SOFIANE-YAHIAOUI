const menuToggle = document.querySelector(".menu__toggle");

const menu = document.querySelector(".mobile__menu");

const closeMenuButton = document.querySelector(".close__menu");

const mobileLinks = document.querySelectorAll(".mobile__links");

menuToggle.onclick = () => {
    menu.classList.add("display__flex");
    document.body.style.overflowY = "hidden";
    closeMenuButton.addEventListener('click', () => {
        menu.classList.remove("display__flex");
        document.body.style.overflowY = "auto";
    })

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove("display__flex");
            document.body.style.overflowY = "auto";
        })
    })
}
