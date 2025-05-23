class ThemeSwitcher {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle");
    if (!this.themeToggle) {
      console.warn("Botão de alternância de tema não encontrado!");
      return;
    }

    this.currentTheme = localStorage.getItem("theme") || "light";
    this.initTheme();
    this.initEventListeners();
  }

  initTheme() {
    if (
      this.currentTheme === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      this.currentTheme = "dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
      this.currentTheme = "light";
    }

    localStorage.setItem("theme", this.currentTheme);
  }

  initEventListeners() {
    this.themeToggle.addEventListener("click", () => {
      this.toggleTheme();
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        this.currentTheme = e.matches ? "dark" : "light";
        this.initTheme();
      }
    });
  }

  toggleTheme() {
    if (this.currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      this.currentTheme = "dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
      this.currentTheme = "light";
    }

    localStorage.setItem("theme", this.currentTheme);
  }
}

export default ThemeSwitcher;
