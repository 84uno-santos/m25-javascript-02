/** 
 * Criação de funções em JavaScript
 */

function fatorial(numero) {
    let ret = 1;
    // Loop decrementando
    for (let i=numero; i>1; i--) {
        ret*=i;
    }
    return ret;
}

// usando a função fatorial
console.log("O Fatorial de 5 é " + fatorial(5)); // 120