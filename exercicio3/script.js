//Primeira tentativa

//a)
/*const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"*/

//b)
// const corCasa = "rosa"
// const corPortao = "laranja"

//EXTRA:
// const gato = "mas não deixe o gato sair"

//a)
// const frase = `Jorge tem uma casa ${corCasa} e com portão ${corPortao}, com os dizeres: "BOAS VINDAS, ${gato.toUpperCase()}"`

//c)
// console.log(frase);

//Créditos: Edson Aurelio

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(frase);

const novaFrase = frase.replace("verde","rosa").replace("azul","laranja").replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")

console.log(novaFrase);