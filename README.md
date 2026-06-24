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

---

# ⚔️ Desafio DIO - Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido como solução para o **segundo desafio de código da DIO (Digital Innovation One)**, focado no desenvolvimento de lógica de programação. O objetivo principal é praticar e consolidar a criação de funções, além da manipulação de variáveis, estruturas de repetição e condicionais.

## 📋 Requisitos do Desafio da DIO

O algoritmo foi estruturado utilizando os cinco pilares obrigatórios descritos na plataforma:
1. **Variáveis**: Para armazenar dados de vitórias, derrotas, saldo acumulado e a classificação do herói.
2. **Operadores**: Uso de operadores aritméticos para calcular o saldo (`vitórias - derrotas`), além de operadores relacionais e lógicos para definir os intervalos de classificação.
3. **Laços de Repetição**: Implementação de uma estrutura de controle (`while`) para simular o processamento da análise de dados.
4. **Estruturas de Decisão**: Uso de condicionais encadeadas (`if / else if / else`) para direcionar o herói ao nível correspondente com base nas vitórias.
5. **Funções**: Criação de uma função especializada que recebe parâmetros de desempenho do jogador e retorna os resultados calculados.

---

## 🎚️ Tabela de Níveis e Classificação

Os critérios de rankeamento baseiam-se na quantidade de **vitórias** do jogador:

| Qtd. de Vitórias | Nível |
| :--- | :--- |
| Menor que 10 | Ferro |
| Entre 11 e 20 | Bronze |
| Entre 21 e 50 | Prata |
| Entre 51 e 80 | Ouro |
| Entre 81 e 90 | Diamante |
| Entre 91 e 100 | Lendário |
| Maior ou igual a 101 | Imortal |

---

## 💻 Código Desenvolvido

```javascript
// Desafio 2: Calculadora de Partidas Rankeadas

// 1. Criação da função principal exigida pelo desafio
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo de rankeadas
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 2. Estrutura de decisão para determinar o nível com base nas vitórias
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
    } else {
        nivel = "Imortal";
    }

    // Retorna um objeto com os valores necessários para a saída
    return { saldoVitorias, nivel };
}

// 3. Laço de Repetição (Simulando uma lista de checagem ou múltiplas análises)
let checagens = 0;
while (checagens < 1) {
    // Chamada da função passando os parâmetros (Vitórias, Derrotas)
    const resultado = calcularNivel(85, 15); 

    // 4. Exibição da mensagem de saída formatada exatamente como pedido pela DIO
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
    
    checagens++;
}