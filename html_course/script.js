let nomes = ["João", "Maria", "Pedro", "Ana", "Lucas"];

nomes.push(prompt("Digite um nome:"));

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log("Quantidade de nomes:", nomes.length);