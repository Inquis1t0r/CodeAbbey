const input = prompt();

const lines = input.split(' ');

const numOfLines = parseInt(lines[0], 10);
console.log(`Number of lines to read: ${numOfLines}`);
console.log(lines);
for (let i = 1; i <= numOfLines; i++) {
    console.log(`Pair ${i}: ${lines[i]}`);
}
