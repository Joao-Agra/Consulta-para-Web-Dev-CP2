// let n = Number(prompt("Escolha um número"))
// alert (n)

// Number = converte p número (tudo, mas se tiver letra da erro)

// Parseint = converte p número inteiro inclusive letra

// Parse float = igual o de cima mas pega vírgula

// Sempre ===
// Comparação por string é feita por caractere

//Verificações

// let nome;

// do {
//     nome = prompt("Digite seu nome: ")

//     if (!nome || nome.length < 4) {
//         alert("Digite um nome válido!")
//     }

// } while (!nome || nome.length < 3)


// let idade;

// do {
//     idade = prompt("Digite sua idade: ")

//     if (isNaN(idade) || idade < 0 || idade >= 150) {
//         alert("Digite uma idade válida!")
//     }

// } while (isNaN(idade) || idade < 0 || idade >= 150)


// let sal;

// do {
//     sal = prompt("Digite seu salário: ")

//     if (isNaN(sal) || sal <= 0) {
//         alert("Digite um salário válido!")
//     }

// } while (isNaN(sal) || sal <= 0)


// let gen;

// do {
//     gen = prompt("Digite seu gênero (f ou m): ").toLowerCase()

//     if (gen !== "f" && gen !== "m") {
//         alert("Digite um genero válido!")
//     }

// } while (gen !== "f" && gen !== "m")


// let est;

// do {
//     est = prompt("Digite seu estado civil (s ou c ou v ou d): ").toLowerCase()

//     if (est !== "s" && est !== "c" && est !== "v" && est !== "d") {
//         alert("Digite um estado civil válido!")
//     }

// } while (est !== "s" && est !== "c" && est !== "v" && est !== "d")


// alert(`Nome: ${nome} Idade: ${idade} Salário: ${sal} Gênero: ${gen} Estado Civil: ${est}`)

//Tabuada

// let n = prompt("Digite um número: ")

// console.log(`A tabuada do ${n} é:`)

// for (let i = 1; i < 11; i++) {

//     let n2 = n * i

//     console.log(`${n} * ${i} = ${n2}`)
// }

//contagem regressiva 

// Coleta o número do usuário
// const numero = Number(prompt("Digite um número inteiro positivo:"))

// // Valida se é um número
// if (isNaN(numero)) {
//     alert("Isso não é um número!")

// // Valida se é positivo
// } else if (numero <= 0) {
//     alert("O número deve ser positivo!")

// // Valida se é inteiro
// } else if (numero !== Math.floor(numero)) {
//     alert("O número deve ser inteiro!")

// // Se passou em todas as validações, executa a contagem
// } else {
//     let i = numero

//     while (i >= 1) {
//         console.log(i)
//         i--
//     }

//     alert("Contagem finalizada!")
// }

// let count = 0;

// do {
//     console.log(count);
//     count++;
// } while (count < 5)

// let n1 = parseInt(prompt("Digite um número: "))
// let n2 = parseInt(prompt("Digite um número: "))
// nu(n1, n2)

// function nu(nu1, nu2){
//     if (nu1 > nu2) {
//         return nu1
//     }

//     if (nu2 > nu1) {
//         return nu2
//     }

//     return "Números iguais"
// }

// alert(nu(n1, n2))

// let t = prompt("Digite um texto: ");
// alert(ex(t));

// function ex(tex){
//     return tex.trim().toUpperCase();
// }

// let computador = Math.floor(Math.random() * 10) + 1
// let jogador = parseInt(prompt("Digite um número entre 1 e 10"))

// alert(jogo(computador, jogador))

// function jogo(comp, jog){
//     if (comp === jog){
//         return 'Parabéns! Você acertou'
//     }
//     else{
//         return `Você errou, era ${comp}`
//     }
// }

// function verificarPalpite(palpite) {
//     const numeroAleatorio = Math.floor(Math.random() * 10) + 1

//     if (isNaN(palpite)) {
//         return "Digite um número válido!"
//     }

//     if (palpite === numeroAleatorio) {
//         return "Acertou! O número era " + numeroAleatorio
//     }

//     return "Errou! O número era " + numeroAleatorio + " e você chutou " + palpite
// }

// const tentativa = Number(prompt("Chute um número de 1 a 10:"))
// alert(verificarPalpite(tentativa))

// function reg(n){
//     while (n > 0) {
//         console.log(n)
//         n = n - 1;
//     }
// }

// let n = Number(prompt("Escolha um número"));
// reg(n)

// function contarPrimos(limite){
//     let quantidade = 0

//     for(let n = 2; n <= limite; n++){
//         let primo = true

//         for(let i = 2; i < n; i++){
//             if(n % i === 0){
//                 primo = false
//                 break
//             }
//         }

//         if(primo){
//             quantidade++
//         }
//     }

//     return quantidade
// }

// let numero = Number(prompt("Digite um número:"))

// alert("Quantidade de números primos: " + contarPrimos(numero))

// //função conta primo

// function verificarPrimo(numero){

//     if(numero < 2){
//         return "Não é primo"
//     }

//     for(let i = 2; i < numero; i++){

//         if(numero % i === 0){
//             return "Não é primo"
//         }

//     }

//     return "É primo"
// }

// let n = Number(prompt("Digite um número:"))

// alert(verificarPrimo(n))

// const nome1 = prompt("Digite o primeiro nome:")
// const nome2 = prompt("Digite o segundo nome:")
// if (nome1.toLowerCase() < nome2.toLowerCase()) {
//  alert(nome1 + " vem antes de " + nome2 + " no dicionário")
// } else if (nome1.toLowerCase() > nome2.toLowerCase()) {
//  alert(nome2 + " vem antes de " + nome1 + " no dicionário")
// } else {
//  alert("Os nomes são iguais!")
// }


// && = addEventListener
// || = ou
// ! = não (inverte)

//.trim() = remove espaços em branco

// for (let i = 1; i <= 10; i++) {
//  if (i % 2 === 0) {
//  continue // pula os números pares
//  }
//  console.log(i)
// }
// // 1, 3, 5, 7, 9

//nome.length = Mostra quantos caracteres a string possui

// nome.includes(“string”) == se TextMetrics

// nome.ToUpperCase() ou Lower

// nome.replace(busca,substituto) = substitui a primeira ocorrência

// nome.replaceAll(busca, substituto) = substitui todas as ocorrências 

// numero1.toFixed(2) = Define que o número terá 2 casas decimais

// isNan(valor) = sRetorna true/false se um valor é NaN

// Math.random() - irá retornar um número decimal aleatório, maior que zero e menor que um.

// Math.floor() - arredonda o número para baixo

// Math.ceil() - arredonda o número para cima

// Math.round() - arredonda para o valor inteiro mais próximo

// const preco = 1999.99;
// console.log(preco.toLocaleString("pt-BR", {
//   style: "currency",
//   currency: "BRL"
// })); // "R$ 1.999,99"

// console.log(preco.toLocaleString("en-US", {
//   style: "currency",
//   currency: "USD"
// })); // "$1,999.99"