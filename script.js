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
