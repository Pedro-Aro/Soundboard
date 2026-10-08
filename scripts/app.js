
let listaDeTeclas = document.querySelectorAll(".tecla");

let audioAtual = null;


function tocarSom(idElementoSom, imagemSom, imagemTela, nomeTela, nome) {

    if (audioAtual != null) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    audioAtual = document.querySelector(idElementoSom);

    audioAtual.play();

    document.querySelector(imagemTela).src = imagemSom;

    document.querySelector(nomeTela).textContent = nome;
}


let contador = 0;

while (contador < listaDeTeclas.length) {

    let tecla = listaDeTeclas[contador];

    let instrumento = tecla.classList[1];

    let audio = `#som_${instrumento}`;

    let imagemSom = tecla.getAttribute("data-imagem");

    let nome = tecla.textContent.trim();


    tecla.onclick = function () {

        let tela = document.body.id;

        let imagemTela = `#imagem_${tela}`;

        let nomeTela = `#nome_${tela}`;

        tocarSom(
            audio,
            imagemSom,
            imagemTela,
            nomeTela,
            nome
        );
    }

    contador++;
}

