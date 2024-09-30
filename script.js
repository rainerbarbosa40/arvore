
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

    document.addEventListener("DOMContentLoaded", function() {
        // Seleciona todas as imagens com a classe 'foto'
        const fotos = document.querySelectorAll(".foto");
    
        fotos.forEach(foto => {
            // Cria um evento de 'mouseenter' (quando o mouse passa por cima da imagem)
            foto.addEventListener("mouseenter", function() {
                // Cria um elemento <span> para exibir o nome
                const nome = document.createElement("span");
                nome.classList.add("nome-hover");
                nome.textContent = this.alt; // O nome será o valor do atributo 'alt' da imagem
                this.parentElement.appendChild(nome); // Adiciona o <span> ao elemento pai da imagem
    
                // Posição do nome acima da imagem
                nome.style.position = "absolute";
                nome.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                nome.style.color = "#fff";
                nome.style.padding = "5px";
                nome.style.borderRadius = "5px";
                nome.style.top = `${this.offsetTop - 25}px`;
                nome.style.left = `${this.offsetLeft + this.offsetWidth / 2 - nome.offsetWidth / 2}px`;
            });
    
            // Remove o nome quando o mouse sair da imagem
            foto.addEventListener("mouseleave", function() {
                const nomeHover = this.parentElement.querySelector(".nome-hover");
                if (nomeHover) {
                    nomeHover.remove();
                }
            });
        });
    });
    