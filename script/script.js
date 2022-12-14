//ativar links menu
const links = document.querySelectorAll('.header-menu a');
links.forEach((link)=>{
    const url = window.location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add('ativo');
    }
});

//ativar itens do orçamento
const parametros = new URLSearchParams(location.search);
parametros.forEach((param)=>{
    const elemento = document.getElementById(param);
    elemento.checked = true;
});

//perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');
perguntas.forEach((pergunta)=>{
    pergunta.addEventListener('click', (event)=>{
        const pergunta = event.currentTarget;
        const controls = pergunta.getAttribute('aria-controls');
        const resp = document.getElementById(controls);
        resp.classList.toggle('ativa');
        const ativa = resp.classList.contains('ativa');
        pergunta.setAttribute('aria-expanded', ativa);

    });
});

//galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaBox = document.querySelector('.bicicleta-imagens');
galeria.forEach((img)=>{
    img.addEventListener('click', (event)=>{
        const img = event.currentTarget;
        const media = matchMedia('(min-width: 1000px)').matches;
        if(media){
            galeriaBox.prepend(img);
        }
    });
})

//Animação
if(window.SimpleAnime){
    new SimpleAnime();
}