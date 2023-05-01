const icons = document.querySelectorAll("#links a");

icons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.classList.add("fa-spin");
    });
    icon.addEventListener("mouseout", () => {
        icon.classList.remove("fa-spin");
    });
});