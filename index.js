const tty = require('tty')

if (process.stdout.isTTY == true) {
    const prompt = require('prompt-sync')()
}

/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.
    /* return []; */

    return people.reverse()
}

if (process.stdout.isTTY == true) {
    const nomes = new Array

    for (let i = 0; i < 3; i++) {
        nomes.push(prompt(`Informe o ${(i+1)}º nome: `))
    }

    console.log (invert(nomes))
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    let media = 0
    for (let i = 0; i < grades.length; i++) {
        media += parseInt(grades[i])
    }
    media /= grades.length

    return media;
}

if (process.stdout.isTTY == true) {
    let aluno = prompt("Informe o nome do(a) aluno(a): ")
    const notas = new Array

    for (i = 0; i < 3; i++) {
        notas.push(prompt(`Informe a nota ${(i+1)} do(a) ${aluno}: `))
    }

    const media = mean(notas)

    console.log(`A média de notas do(a) ${aluno} foi ${media}.\nO(A) aluno(a) foi...`)
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    if (mean < 7) {
        return "reprovado"
    } else {
        return "aprovado"
    }
}

console.log(isApproved(media))

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    let data_array = strDate.split("/")
    let mes_int = parseInt(data_array[1])
    let mes_str = ""

    switch(mes_int) {
        case 1:
            mes_str = "janeiro"
            break
        case 2:
            mes_str = "fevereiro"
            break
        case 3:
            mes_str = "março"
            break
        case 4:
            mes_str = "abril"
            break
        case 5:
            mes_str = "maio"
            break
        case 6:
            mes_str = "junho"
            break
        case 7:
            mes_str = "julho"
            break
        case 8:
            mes_str = "agosto"
            break
        case 9:
            mes_str = "setembro"
            break
        case 10:
            mes_str = "outubro"
            break
        case 11:
            mes_str = "novembro"
            break
        case 12:
            mes_str = "dezembro"
            break
        default:
            return ""
    }

    return (`${data_array[0]} de ${mes_str} de ${data_array[(data_array.length-1)]}`)
}

if (process.stdout.isTTY == true) {
    const data = prompt("Informe uma data no formato (dd/mm/aaaa): ")

    console.log(wide(data))
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}