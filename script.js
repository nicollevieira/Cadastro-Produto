const produto = document.getElementById("produto");
const valor = document.getElementById("valor");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("botao");
const feedback = document.getElementById("feedback");

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
    })
    .then(function(resposta) {
        if (resposta.ok) {
            feedback.innerText = "Produto cadastrado com sucesso!";

            produto.value = "";
            valor.value = "";
            descricao.value = "";
        } else {
            feedback.innerText = "Não foi possível cadastrar o produto.";
        }
    })
    .catch(function() {
        feedback.innerText = "Erro ao realizar o cadastro.";
    });
});