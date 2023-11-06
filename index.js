class crudVector {
    constructor() {
      this.vector = [];
    }
  
    criarVetor(item) {
      this.vector.push(item);
    }
  
    atualizarVetor(id, novoVetor) {
      try {
        const index = this.vector.findIndex(vector => vector.id === id);
        if (index !== -1) {
          const vetorExistente = this.vector[index];
          vetorExistente.nome = novoVetor.nome;
          vetorExistente.idade = novoVetor.idade;
        } else {
          throw new Error(`Registro com ID ${id} não encontrado.`);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  
    deletarVetor(id) {
      try {
        const index = this.vector.findIndex(vector => vector.id === id);
        if (index !== -1) {
          this.vector.splice(index, 1);
        } else {
          throw new Error(`Registro com ID ${id} não encontrado.`);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  
  class Animal extends crudVector {
    fazerBarulho() {
      console.log(`O ${this.especie} está fazendo barulho.`);
    }
  }
  
  class Pessoa extends crudVector {
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  const animais = new Animal();
  const pessoas = new Pessoa();
  
  const leao = { id: 1, nome: "Nenem", especie: "leao" };
  const gato = { id: 2, nome: "Gatinho", especie: "gato" };
  
  animais.criarVetor(leao);
  animais.criarVetor(gato);
  
  const pessoa1 = { id: 1, nome: "Larissa", idade: 19 };
  const pessoa2 = { id: 2, nome: "Mateus", idade: 25 };
  const pessoa3 = { id: 3, nome: "Picolo", idade: 32 };
  pessoas.criarVetor(pessoa1);
  pessoas.criarVetor(pessoa2);
  pessoas.criarVetor(pessoa3);
  
  const novaPessoa = { id: 1, nome: "Sevilha", idade: 20 };
  pessoas.atualizarVetor(1, novaPessoa);
  
  try {
    animais.deletarVetor(1);
} catch (error) {
  console.error(error.message);
}
  
console.log("Animais:", animais.vector);
console.log("Pessoas:", pessoas.vector);

const pessoaNova = new Pessoa();
Object.assign(pessoaNova, pessoas.vector[0]);
pessoaNova.saudacao();

const animalNovo = new Animal();
Object.assign(animalNovo, animais.vector[0]);
animalNovo.fazerBarulho();

const animalN = new Animal();
Object.assign(animalN, animais.vector[1]);
animalN.fazerBarulho();
  