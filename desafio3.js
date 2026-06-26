// Criando a classe genérica para o Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Garante consistência na validação
    }

    // Método para simular o ataque do herói
    atacar() {
        let ataque = "";

        // Estrutura de decisão para determinar o ataque com base no tipo
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        // Exibindo a mensagem final formatada de acordo com o requisito
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Testando a implementação com diferentes heróis ---

const mago = new Heroi("Gandalf", 150, "mago");
const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
const monge = new Heroi("Aang", 12, "monge");
const ninja = new Heroi("Naruto", 17, "ninja");

// Chamando o método atacar para cada um deles
mago.atacar();       // Saída: o mago atacou usando magia
guerreiro.atacar();  // Saída: o guerreiro atacou usando espada
monge.atacar();      // Saída: o monge atacou usando artes marciais
ninja.atacar();      // Saída: o ninja atacou usando shuriken