if (localStorage.getItem("data-theme") == null) {
    localStorage.setItem("data-theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
} else {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("data-theme"))
}

function themeSwitch() {
    var themeSwitcher = document.getElementById("theme-button");

    var currentTheme = document.documentElement.getAttribute("data-theme");

    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    if (switchToTheme === "dark") {
        themeSwitcher.innerHTML = "🌙";
    } else {
        themeSwitcher.innerHTML = "🔆";
    }

    localStorage.setItem("data-theme", switchToTheme);
    document.documentElement.setAttribute("data-theme", switchToTheme);
}