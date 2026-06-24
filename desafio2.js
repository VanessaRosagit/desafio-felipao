// Desafio 2: Calculadora de Partidas Rankeadas

// 1. Criação da função principal exigida pelo desafio
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo de rankeadas
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 2. Estrutura de decisão para determinar o nível com base nas vitórias
    // Nota: O enunciado usa "Se vitórias for..." para os limites
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // Para vitórias maior ou igual a 101
        nivel = "Imortal";
    }

    // Retorna um objeto com os valores necessários para a saída
    return { saldoVitorias, nivel };
}

// 3. Laço de Repetição (Simulando uma lista de checagem ou múltiplas análises)
// Criamos uma estrutura para validar o funcionamento da função
let checagens = 0;
while (checagens < 1) {
    // Chamada da função passando os parâmetros (Vitórias, Derrotas)
    const resultado = calcularNivel(85, 15); // Exemplo: 85 vitórias e 15 derrotas

    // 4. Exibição da mensagem de saída formatada exatamente como pedido
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
    
    checagens++;
}