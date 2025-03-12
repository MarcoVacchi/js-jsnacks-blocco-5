const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const numEven = nums.filter ((number) => number % 2 === 0);
console.log(numEven);

/* equivale a
const numEven = nums.filter ((number) => {
    if (number % 2 === 0){
        return true;
    }
})
console.log(numEven);*/