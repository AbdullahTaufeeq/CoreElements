const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    toggleBtn.classList.add('active');
}

toggleBtn.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.removeAttribute('data-theme');
        toggleBtn.classList.remove('active');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleBtn.classList.add('active');
        localStorage.setItem('theme', 'dark');
    }
});
