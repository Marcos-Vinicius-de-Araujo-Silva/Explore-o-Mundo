let num = 0, result = 0;

num = prompt("Please enter a number:");

for (let i = 0; i <= 1000; i++) {
    result = num * i;
    console.log(`${num} x ${i} = ${result}`);
}