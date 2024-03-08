const appearanceToggle = document.querySelectorAll('.dark-mode__toggle');

const sunIcons = document.querySelectorAll('.sun__icon');

const moonIcons = document.querySelectorAll('.moon__icon');

const menuDark = document.querySelectorAll('.menu__dark');

const menuLight = document.querySelectorAll('.menu__light');

const closeMenuDark = document.querySelectorAll('.close__dark');

const closeMenuLight = document.querySelectorAll('.close__light');

const closeContactDark = document.querySelectorAll('.close__dark__contact');

const closeContactLight = document.querySelectorAll('.close__light__contact');




if (localStorage.getItem("theme")) {

    document.body.classList.add('dark__mode');

    darkMode();

} else {

    document.body.classList.remove('dark__mode');

    lightMode();

}

appearanceToggle.forEach(toggle => {

    toggle.addEventListener('click', () => {

        document.body.classList.toggle("dark__mode");

            if (document.body.classList.contains("dark__mode")) {

                localStorage.setItem('theme' , 'dark mode')

                darkMode();

            } else {

                localStorage.removeItem('theme')

                lightMode();

            }
})
})

function darkMode () {

    sunIcons.forEach(sunIcon => {
        sunIcon.classList.add('display__none');
    })

    moonIcons.forEach(moonIcon => {
        moonIcon.classList.remove('display__none');
    })

    menuDark.forEach(menuDark => {
        menuDark.classList.add('display__none');
    })

    menuLight.forEach(menuLight => {
        menuLight.classList.remove('display__none');
    })

    closeMenuDark.forEach(closeMenu => {
        closeMenu.classList.add('display__none');
    })

    closeMenuLight.forEach(closeMenu => {
        closeMenu.classList.remove('display__none');
    })

    closeContactDark.forEach(closeMenu => {
        closeMenu.classList.add('display__none');
    })

    closeContactLight.forEach(closeMenu => {
        closeMenu.classList.remove('display__none');
    })

}

function lightMode () {

    sunIcons.forEach(sunIcon => {
        sunIcon.classList.remove('display__none');
    })

    moonIcons.forEach(moonIcon => {
        moonIcon.classList.add('display__none');
    })

    menuDark.forEach(menuDark => {
        menuDark.classList.remove('display__none');
    })

    menuLight.forEach(menuLight => {
        menuLight.classList.add('display__none');
    })

    closeMenuDark.forEach(closeMenu => {
        closeMenu.classList.remove('display__none');
    })

    closeMenuLight.forEach(closeMenu => {
        closeMenu.classList.add('display__none');
    })

    closeContactDark.forEach(closeMenu => {
        closeMenu.classList.remove('display__none');
    })

    closeContactLight.forEach(closeMenu => {
        closeMenu.classList.add('display__none');
    })

}