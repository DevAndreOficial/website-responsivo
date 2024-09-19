

let header = document.querySelector('#header');

document.addEventListener("scroll", () => {
    // Pegando a rolagem no eixo Y - window.scrollY
    let scrollTop = window.scrollY

    // caso se desloque 
    if (scrollTop > 0) {
        header.classList.add('rolar')
    } else {
        header.classList.remove('rolar')
    }
});

// Botão menu mobile
let btnMenu = document.querySelector('#btn-menu')
let linha1 = document.querySelector('.line-menumob-1')
let linha2 = document.querySelector('.line-menumob-2')
let menuMobile = document.querySelector('#menu-mobile')

let body = document.querySelector('body')

btnMenu.addEventListener("click", () => {
    // Criar classe dinâmica - o toggle é uma espécie de liga desliga, ou seja, adiciona a classe se ela nao existir, e remove se ela existir, sempre que for precionado o botaMenu
    linha1.classList.toggle('ativo1')
    linha2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir-menu')
    body.classList.toggle('no-overflow')

})






