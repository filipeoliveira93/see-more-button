//[x]pegar o primeiro p e inserir o leia mais
//[] definir o texto pelo tamanho da tag p, ocultar o resto
//[] quando clicar inserir o ver menos no final de todo o texto
//[] quando clicar remover o leia mais do texto

document.addEventListener('DOMContentLoaded', function () {
    var panel = document.querySelector('.text-seo')
    let texto = document.querySelector('.text-seo')
    let primeiroP = texto.firstElementChild
    console.log(primeiroP)
    if (primeiroP) {
        console.log(primeiroP.innerHTML)
        let conteudo = ` ${primeiroP.innerHTML} '<button class='vermais active'><b>leia mais...</b></button></p>`
        primeiroP.innerHTML = conteudo
    }

    var vermenos = this.createElement('button')
    vermenos.className += 'vermenos'
    vermenos.innerHTML = '<b>ler menos</b>'
    texto.appendChild(vermenos)


    vermenos.addEventListener('click', () => {
        vermais.classList.add('active')
        vermenos.classList.remove('active')
        texto.style.maxHeight = '100px'

    })

    var vermais = document.querySelector(".vermais")
    vermais.addEventListener('click', () => {
        vermais.classList.remove('active')
        vermenos.classList.add('active')
        texto.style.maxHeight = (panel.scrollHeight + 20) + 'px';
    })


})

