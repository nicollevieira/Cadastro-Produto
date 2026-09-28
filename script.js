const produto = document.getElementById("produto");
const valor = document.getElementById("valor");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {

    const dadosProduto = {
        produto: produto.value,
        valor: valor.value,
        descricao: descricao.value
    };

    console.log(dadosProduto);

    fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosProduto)
});

});

