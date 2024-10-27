const input = prompt();

const lines = input.split('\n');

const numOfLines = parseInt(lines[0], 10);
console.log(`Number of lines to read: ${numOfLines}`);

for (let i = 1; i <= numOfLines; i++) {
    console.log(`Pair ${i}: ${lines[i]}`);
}

