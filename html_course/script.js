let num = parseInt(prompt("Digite um número:"));

for(let i = 2; i <= num; i++) { 
    if(i % 2 === 0) {
        document.write(i + "<br>");
    }
}