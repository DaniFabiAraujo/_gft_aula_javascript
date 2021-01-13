function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function redirecionar() {
    window.open("https://www.google.com")
}

function trocar(elemento) {
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";

}

function voltar(elemento) {
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
}

function load() {
    alert("página carregada!")
}

function change(elemento) {
    console.log(elemento.value);
}


/*function soma(n1, n2) {
    return n1 + n2;
}
var validar = 0;

function validaIdade(idade) {

    if (idade >= 10) {
        validar = true

    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ")
console.log(validaIdade(idade));
console.log(validar);

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/
34





/*var nome = "Daniel Araújo";
var idade = 36;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
console.log(nome + " tem " + idade + " anos");
console.log(frase.replace("Japão", "Brasil"));*/
//var lista = ["maçã", "pêra", "laranja"];
//console.log(lista.push("uva"));
//console.log(lista);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//var fruta = { nome: "maçã", cor: "vermelha" }
//var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }, { nome: "pêra", cor: "verde" }]
//console.log(frutas);
//alert(frutas[0].nome);
/*var idade = prompt("Qual sua idade? ")
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
var count = 0;
for (count = 0; count <= 5; count++) {
    alert(count);
}
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/