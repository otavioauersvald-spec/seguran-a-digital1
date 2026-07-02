const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%&*()_+-=[]{}|;:,.<>?';

const campoSenha = document.querySelector('#campo-senha');
const numeroSenha = document.querySelector('.parametro-senha__texto');
const checkboxMaiusculo = document.querySelector('#maiusculo');
const checkboxMinusculo = document.querySelector('#minusculo');
const checkboxNumero = document.querySelector('#numero');
const checkboxSimbolo = document.querySelector('#simbolo');
const botaoDiminuir = document.querySelector('#diminuir');
const botaoAumentar = document.querySelector('#aumentar');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

botaoDiminuir.addEventListener('click', diminuiTamanho);
botaoAumentar.addEventListener('click', aumentaTamanho);
checkboxMaiusculo.addEventListener('change', geraSenha);
checkboxMinusculo.addEventListener('change', geraSenha);
checkboxNumero.addEventListener('change', geraSenha);
checkboxSimbolo.addEventListener('change', geraSenha);

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function geraSenha(){
    let senha = '' ;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}