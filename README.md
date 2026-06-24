# ⚔️ Desafio DIO - Classificador de Nível de Herói

Este projeto foi desenvolvido como solução para o **Desafio de Código da DIO (Digital Innovation One)**, integrante da jornada de formação em lógica de programação. O objetivo principal é aplicar os conceitos fundamentais para consolidar o conhecimento prático em desenvolvimento de software.

## 📋 Requisitos do Desafio da DIO

O algoritmo cumpre rigorosamente todos os critérios exigidos na plataforma da **DIO**, utilizando os seguintes pilares:
1. **Variáveis**: Para armazenar e manipular os dados do herói (nome, experiência e nível).
2. **Operadores**: Utilização de operadores relacionais (`<`, `>=`, `<=`) e lógicos (`&&`) para validar os intervalos de XP.
3. **Laços de Repetição**: Implementação de uma estrutura `while` para simular a progressão de experiência na jornada do herói.
4. **Estruturas de Decisão**: Uso de condicionais encadeadas (`if / else if / else`) para classificar e exibir o nível exato alcançado.

---

## 🎚️ Níveis de Classificação da Plataforma

A classificação do herói segue a tabela oficial proposta pelo desafio da **DIO**:

| XP Acumulado | Nível |
| :--- | :--- |
| Menor que 1.000 | Ferro |
| Entre 1.001 e 2.000 | Bronze |
| Entre 2.001 e 5.000 | Prata |
| Entre 5.001 e 7.000 | Ouro |
| Entre 7.001 e 8.000 | Platina |
| Entre 8.001 e 9.000 | Ascendente |
| Entre 9.001 e 10.000 | Imortal |
| Maior ou igual a 10.001 | Radiante |

---

## 💻 Código Desenvolvido

```javascript
// 1. Variáveis iniciais
const nomeHeroi = "Vanessa";
let xpHeroi = 0; // Inicia a jornada do herói do zero
let nivel = "";

// 2. Laço de repetição (Exigência do desafio DIO)
while (xpHeroi < 7500) { 
    xpHeroi += 1500; // Incrementa a experiência a cada iteração
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

// 4. Saída formatada esperada pelo avaliador
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
