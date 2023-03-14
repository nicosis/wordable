function checkWord(solution, guess) {

    let output = [];

    for (let i in solution) {
        if (solution[i] === guess[i]) {
            output.push(1);
        } else if (solution.includes(guess[i])) {
            output.push(0);
        } else {
            output.push(-1);
        }
    }
    return output;
}

console.log(checkWord("bucle", "rozas")); // [-1, -1, -1, -1, -1]
console.log(checkWord("bucle", "luces")); // [0, 1, 1, 0, -1]
console.log(checkWord("bucle", "clubs")); // [0, 0, 0, 0, -1]
console.log(checkWord("bucle", "bucle")); // [1, 1, 1, 1, 1]