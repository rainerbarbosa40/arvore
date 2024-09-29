
    document.addEventListener('DOMContentLoaded', function() {
        const treeItems = document.querySelectorAll('.tree li');

        treeItems.forEach(item => {
            item.addEventListener('click', function(event) {
                // Impede a propagação do clique para os elementos pai
                event.stopPropagation();

                // Alterna a exibição do submenu
                const submenu = this.querySelector('ul');
                if (submenu) {
                    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
                }
            });
        });
    });

