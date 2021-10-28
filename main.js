const themeToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "light") {
        themeToggle.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "light");
    }
}
themeToggle.addEventListener("change", switchTheme, false);