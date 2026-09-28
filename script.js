const produto = document.getElementById("produto");
const valor = document.getElementById("valor");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    console.log("Produto:", produto.value);
    console.log("Valor:", valor.value);
    console.log("Descrição:", descricao.value);
});