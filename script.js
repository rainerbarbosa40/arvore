document.querySelectorAll('.tree li > a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão de navegação
        const children = this.nextElementSibling;
        if (children) {
            children.style.display = children.style.display === 'block' ? 'none' : 'block';
        }
    });
});