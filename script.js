// funcao para mostrar o menu e os icones das redes sociais
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})

document.querySelector("#qty").addEventListener("change", atualizarPreco)
document.querySelector("#wp").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
} )

function atualizarPreco(){
    const qty = document.querySelector("#qty").value
    const temWP = document.querySelector("#wp").checked
    const incluirLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value  
    
    let preco = qty * 100;
    if (temWP) {
        preco = preco + (preco * 0.10)
    }
    if (incluirLayout) {
        preco += 500;
    }
    
    let taxaUrgencia = 1 - prazo * 0.1;
    preco = preco + (preco * taxaUrgencia)

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
