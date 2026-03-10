document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'cream') {
        html.classList.add('cream-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isCream = html.classList.toggle('cream-theme');
            localStorage.setItem('theme', isCream ? 'cream' : 'dark');
            if (themeIcon) themeIcon.textContent = isCream ? '☀️' : '🌙';
        });
    }
});