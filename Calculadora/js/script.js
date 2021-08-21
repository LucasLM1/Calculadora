//função insert recebe numero
function insert(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
    //mostra todos os valores que estão sendo digitados
}

function limpar() {
    document.getElementById("resultado").innerHTML = "";
    //função para limpar tudo que foi digitado
}

function voltar() {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
    //função que ao ser clicada apaga o ultimo número que foi digitado
}

function calcular() {
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado); /* eval- faz todos os calculos*/
    }else{
        document.getElementById("resultado").innerHTML = "Nada a ser calculado"
    }
    //se a variavel resultado receber algum valor ele ssera calculado pelo eval e mostrado na tela, senão aparecerá a mensagem: nada a ser calculado
}