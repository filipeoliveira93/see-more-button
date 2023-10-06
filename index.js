//[x]pegar o primeiro p e inserir o leia mais
//[x] definir o texto pelo tamanho da tag p, ocultar o resto
//[x] quando clicar inserir o ver menos no final de todo o texto
//[x] quando clicar remover o leia mais do texto


document.addEventListener('DOMContentLoaded', function () {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var texto = document.querySelector('.board_htm');
    let primeiroP = texto.querySelector('p');

    if (primeiroP) {
        var conteudo = primeiroP.innerHTML + "<button class='vermais active'><b>leia mais...</b></button></p>";
        primeiroP.innerHTML = conteudo;
    }

    var vermenos = document.createElement('button');
    vermenos.className = 'vermenos';
    vermenos.innerHTML = '<b>leia menos</b>';
    texto.appendChild(vermenos);

    vermenos.addEventListener('click', function () {
        vermais.classList.add('active');
        vermenos.classList.remove('active');

        if (larguraTela >= 768) {
            texto.style.maxHeight = '130px';
        } else {
            texto.style.maxHeight = '195px';
        }
    });

    var vermais = document.querySelector(".vermais");
    vermais.addEventListener('click', function () {
        vermais.classList.remove('active');
        vermenos.classList.add('active');
        texto.style.maxHeight = texto.scrollHeight + 20 + 'px';
    });
});

