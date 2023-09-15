
/* ===== Dark Mode ===== */

const darkModeToggle = document.querySelector(".themeButton-d");

darkModeToggle.addEventListener('click', () => {
    
    document.body.classList.toggle('dark');

    if (darkModeToggle.classList.contains('themeButton-d')) {
        darkModeToggle.classList.replace('themeButton-d', 'themeButton-h');
        darkModeToggle.src = "./images/sun.png";
        darkModeToggle.style.display = 'inline';
        
    }
    else {
        darkModeToggle.classList.replace('themeButton-h', 'themeButton-d');
        darkModeToggle.src = "./images/moon.png";
    }

})