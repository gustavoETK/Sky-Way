// theme.js  (versão melhorada)
class ThemeManager {
    constructor() {
        this.STORAGE_KEY = 'theme-preference';
        this.DARK_CLASS = 'dark-mode';
        this.init();
    }

    init() {
        this.applyStoredTheme();
    }

    applyStoredTheme() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
        
        this.setTheme(isDark);
    }

    setTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add(this.DARK_CLASS);
            localStorage.setItem(this.STORAGE_KEY, 'dark');
        } else {
            document.documentElement.classList.remove(this.DARK_CLASS);
            localStorage.setItem(this.STORAGE_KEY, 'light');
        }
    }

    toggle() {
        const isDark = document.documentElement.classList.contains(this.DARK_CLASS);
        this.setTheme(!isDark);
    }
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => new ThemeManager());