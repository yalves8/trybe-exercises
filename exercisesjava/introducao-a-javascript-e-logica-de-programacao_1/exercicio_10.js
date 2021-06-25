let custoProduto = -10;
let valorVenda = 1500;
let impostoProduto = custoProduto * 0.20;
let valorCustoTotal = custoProduto + impostoProduto;
let lucroProduto = valorVenda - valorCustoTotal;

if (custoProduto < 0 | valorVenda < 0) {
    console.log("Verifique os valores corretamente, devem ser maior que zero!");
    return;
    
}

console.log("Imposto = " + impostoProduto);
console.log("Custo Total = " + valorCustoTotal);
console.log("Lucro = " + lucroProduto);

