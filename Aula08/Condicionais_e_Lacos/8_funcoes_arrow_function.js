/** 
 * Criação de funções em JavaScript com Arrow similar ao function
 */

// Arrow Function
const fatorial_arrow = (numero) => {
    let ret = 1;
    for (let i=numero;i>1;i--){
        ret*=i
    }
    return ret;
}

// usando a função fatorial
console.log("O Fatorial (arrow) de 5 é " + fatorial_arrow(5)); // 120

