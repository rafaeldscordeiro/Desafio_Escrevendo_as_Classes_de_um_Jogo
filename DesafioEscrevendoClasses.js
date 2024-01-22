// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Escolhendo o ataque com base no tipo do herói
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
          ataque = "um ataque indefinido";
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  let heroi1 = new Heroi("Toguro", 30, "ninja");
  let heroi2 = new Heroi("Goku", 100, "mago");
  
  // Chamando o metodo atacar
  heroi1.atacar();
  heroi2.atacar();