// Seletores
const hoverColors = {
    "h1": "hsl(5, 85%, 63%)",
    ".group-2": "hsl(35, 77%, 62%)",
    ".group-4": "hsl(5, 85%, 63%)"
};

// Efeito de hover
function addHoverEffect(selector, color) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.color = color;
        });

        element.addEventListener("mouseout", () => {
            element.style.color = "";
        });
    });
}

Object.entries(hoverColors).forEach(([selector, color]) => {
    addHoverEffect(selector, color);
});

//dialog
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const dialogBox = document.querySelector(".dialog-box");

    menuIcon.addEventListener("click", function() {
        if (window.innerWidth <= 768) {
            dialogBox.classList.toggle("active");
        }
    });

    document.addEventListener("click", function(event) {
        if (window.innerWidth <= 768 && !menuIcon.contains(event.target) && !dialogBox.contains(event.target)) {
            dialogBox.classList.remove("active");
        }
    });
});
