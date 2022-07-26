const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(`Minha string antes tinha ${minhaString.length} caracteres.`);

//a)
const novaString = minhaString.trim()

//b)
console.log(`Minha string depois teve ${novaString.length} caracteres.`);

//c)
console.log(`${novaString.replace("________","sticioso")}`);