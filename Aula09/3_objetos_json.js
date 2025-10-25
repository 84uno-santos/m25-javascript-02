/** 
 * Objetos e JSON in JavaScript
 * JSON = JavaScript Object Notation
*/

const meuObjeto = {
    "nome": "Bruno",
    "endereco": "Rua ETC",
    "numero": 123,
    "ativo": true,
    "cursos": ["JavaScript", "HTML", "CSS"],
    "ola": () => //{ return "Olá Mundo!" },
                 {console.log("Olá Mundo!");                    
    },
    "telefone": {
        "residencial": "1234-5678",
        "celular": "9876-5432"
    }
}
meuObjeto.ola();
console.log(meuObjeto);