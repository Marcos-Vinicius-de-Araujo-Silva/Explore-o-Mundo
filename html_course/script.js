const endereço = {
		rua: "Rua das Tulias",
		numero: 302
	}

const pessoa = {
	nome: "João",
	sobrenome: "Fagundes",
    endereço: endereço
};


document.write(`O endereço é ${pessoa.endereço.rua}, número ${pessoa.endereço.numero}.<br>`);