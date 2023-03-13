function checkWord(solution, guess) {

    let output = [];
    output.length = 5;

    for (let i in solution) {
        if (solution[i] === guess[i])
            output[i] = 1
        else if (solution.includes(guess[i]))
            output[i] = 0;
        else output[i] = -1;
    }
    return output;
}

console.log(checkWord("bucle", "rozas")); // [-1, -1, -1, -1, -1]
console.log(checkWord("bucle", "luces")); // [0, 0, 1, 0, -1]
console.log(checkWord("bucle", "clubs")); // [0, 0, 0, 0, 0]
console.log(checkWord("bucle", "bucle")); // [1, 1, 1, 1, 1]

// let solution = 'bucle';
// let guess = 'luces';

// console.log(solution.includes('ur'))