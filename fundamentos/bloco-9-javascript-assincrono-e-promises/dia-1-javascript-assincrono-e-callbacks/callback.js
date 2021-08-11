const myExpenses = [
    {
        gym: 99,
    },
    {
        ifood: 200,
        rest:500,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {

    const totalExpenses = callback(myExpenses);
    const totalAfterExpenses = myIncome - totalExpenses;

    console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
};

const handleExpenses = (myExpenses) => {
    const eachValue = myExpenses.map((item => Object.values(item)));
    const totalExpense = eachValue.reduce((acc, curr) => acc += curr.reduce((ac,el) => ac += el,0), 0);
    return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);