let salario = 5000;
let aliquotaInss;
let aliquotaIR;
let parcelaIR;
let aliquotaMax;
let total = 0;

if (salario < 1556.94) {
    aliquotaInss = 0.08 * salario;
    total = salario - aliquotaInss;
    console.log(total);
}
else if (salario >= 1595.05 & salario < 2594.92) {
    aliquotaInss = 0.08 * salario;
    if (aliquotaInss >= 1903.99 & aliquotaInss < 2826.65) {
        aliquotaIR = 0.075 * salario;
        parcelaIR = 142.80;

        total = aliquotaInss - (aliquotaIR - parcelaIR);
        console.log(total);
        return;
    

    }
    else {
        console.log(aliquotaInss);

    }

}
else if (salario >= 2594.92 & salario < 5189.82) {
    aliquotaInss = salario - (salario * 0.11);
    if (aliquotaInss >= 1903.99 & aliquotaInss <= 2826.65) {

        aliquotaIR = aliquotaInss * 0.075;
        parcelaIR = 142.80;
        total = aliquotaInss - (aliquotaIR - parcelaIR);
        console.log(total);


    }
    else if (aliquotaInss >= 2826.66 & aliquotaInss <= 3751.05) {

        aliquotaIR = aliquotaInss * 0.15;
        parcelaIR = 354.80;
        total = aliquotaInss - (aliquotaIR - parcelaIR);
        console.log(total);
    }
    else if (aliquotaInss >= 3751.06 & aliquotaInss < 4667.68) {

        aliquotaIR = aliquotaInss * 0.225;
        parcelaIR = 636.13;
        total = aliquotaInss - (aliquotaIR - parcelaIR);
        console.log(total);
    }
    else if (aliquotaInss >= 4664.68) {

        aliquotaIR = aliquotaInss * 0.275;
        parcelaIR = 869.36;
        total = aliquotaInss - (aliquotaIR - parcelaIR);
        console.log(total);
    }



}
else if (salario >= 5189.82){
    aliquotaInss = aliquotaInss - 570.88;
    if (aliquotaInss >= 4664.68){
        aliquotaIR = aliquotaInss * 0.275;
        parcelaIR = 869.36;
        total = aliquotaInss - (aliquotaIR - parcelaIR);
        console.log(total);
    }
    console.log(aliquotaInss);
}

