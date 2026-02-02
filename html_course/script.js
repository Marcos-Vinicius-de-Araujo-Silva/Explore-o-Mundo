let num = 0; resultado = 0, flag = 10;

num = parseInt(prompt("Digite um número:"));

for (let i = 1; i <= 1000; i++) {
    resultado = i * num;
    
    if (resultado/flag >= 1){
        document.write("----<br>");
        flag *= 10;
    }

    document.write(i + " x " + num + " = " + resultado + "<br>");
}