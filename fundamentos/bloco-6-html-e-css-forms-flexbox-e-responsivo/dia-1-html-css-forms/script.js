const selected = document.getElementById('estado');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const enviar = document.getElementById('enviar');

const estados = {
    ac: 'Acre',
    al: 'Alagoas',
    ap: 'Amapá',
    am: 'Amazonas',
    ba: 'Bahia',
    ce: 'Ceará',
    pe: 'Pernambuco',
    sp: 'São Paulo',
    rj: 'Rio de Janeiro',
    mg: 'Minas Gerais',
    rs: 'Rio Grande do Sul',
    rn: 'Rio Grande do Norte',
};

function addEstados() {
    const pega = Object.keys(estados);
    for (let index = 0; index < pega.length; index += 1) {
        const option = document.createElement('option');
        option.innerText = estados[pega[index]];
        option.classList.add(pega[index]);
        selected.appendChild(option);
    }
}

function dataEmprego(event){
    const valorDia = dia.value;
    const valorMes = mes.value;
    const valorAno = ano.value;
    if(valorDia < 1 || valorDia > 31){
        window.alert('Dia incorreto');
    }else if(valorMes < 1 || valorMes > 12){
        window.alert('Mês incorreto');
    }else if(valorAno < 0 || valorAno.length !== 4){
        window.alert('Ano incorreto');
    }else{
        event.preventDefault();
        const div = document.createElement('div');
        console.log(dia.getAttribute('name'));

    }
}

function pegaInp(){
    const inputs = document.querySelectorAll('input');
    
}


enviar.addEventListener('click',dataEmprego);


/* addEstados(); */
