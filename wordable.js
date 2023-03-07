function checkWord(solution, guess) {}

console.log(checkWord("bucle", "rozas")); // [-1, -1, -1, -1, -1]
console.log(checkWord("bucle", "luces")); // [0, 0, 1, 0, -1]
console.log(checkWord("bucle", "clubs")); // [0, 0, 0, 0, 0]
console.log(checkWord("bucle", "bucle")); // [1, 1, 1, 1, 1]
