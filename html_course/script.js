let dado1 = 0, dado2 = 0, contador = 0;

for(let i = 1; i <= 10;) {
    contador++;
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;

    if(dado1 !== dado2) {
        continue;
    }
    i++
}

console.log(`Os dados deram ${dado1} e ${dado2}, contador: ${contador}`);