document.querySelectorAll('.tree li').forEach(function (li) {
    li.addEventListener('click', function (e) {
        var children = this.querySelector('ul');
        if (children) {
            // Alternar a exibição dos filhos
            children.style.display = children.style.display === 'none' ? 'block' : 'none';
        }
        e.stopPropagation(); // Impede que o clique suba na hierarquia
    });
});
