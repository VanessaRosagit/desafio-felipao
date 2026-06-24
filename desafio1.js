// Desafio: Classificador de Nível de Herói

// 1. Variáveis iniciais
const nomeHeroi = "Vanessa";
let xpHeroi = 0; // Começa do zero para usarmos o laço de repetição
let nivel = "";

// 2. Laço de repetição (Simulando o ganho de XP em uma jornada)
// O herói vai ganhando XP repetidamente até atingir um valor específico
while (xpHeroi < 7500) { 
    xpHeroi += 1500; // Adiciona 1500 de XP a cada iteração do laço
}

// 3. Estruturas de decisões e Operadores
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// 4. Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);