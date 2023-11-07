const hobbies = ['ler', 'assistir séries', 'jogar'];

console.log("Meus hobbies:");
console.log(hobbies);


console.log("Primeiro hobby: " + hobbies[0]);
console.log("Segundo hobby: " + hobbies[1]);
console.log("Terceiro hobby: " + hobbies[2]);


hobbies[0] = 'tocar violão';
console.log("Lista de hobbies atualizada:");
console.log(hobbies);


console.log("Número de hobbies na lista: " + hobbies.length);


hobbies.push('costurar');
console.log("Lista de hobbies atualizada - novo hobbie inserido:");
console.log(hobbies);


hobbies.pop();
console.log("Lista de hobbies atualizada:");
console.log(hobbies);


const hobbyParaRemover = 'tocar guitarra';
const posicao = hobbies.indexOf(hobbyParaRemover);
if (posicao !== -1) {
  hobbies.splice(posicao, 1);
  console.log("Lista de hobbies após remoção '" + hobbyParaRemover + "':");
  console.log(hobbies);
}


const hobbiesDoAmigo = ['cantar', 'dançar', 'tocar piano'];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);
console.log("Lista de todos os nossos hobbies (minha lista + lista do amigo):");
console.log(todosOsHobbies);


const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['pescar', 'jogar futebol', 'cozinhar'];
const hobbiesCriativos = ['desenhar', 'escrever poemas', 'pintar'];

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];


console.log("Primeiro hobby musical: " + categoriasDeHobbies[0][0]);
console.log("Terceiro hobby musical: " + categoriasDeHobbies[0][2]);