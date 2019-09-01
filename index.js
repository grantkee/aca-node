const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input math equation: ', (answer) => {
    console.log(`Calculating ${answer}= ...`);
    doMath(answer);

    rl.close();
});

function doMath(answer) {}