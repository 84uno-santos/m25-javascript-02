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

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

// transformando o objeto em JSON em texto  
const meuObjetoTexto =  JSON.stringify(meuObjeto); // transforma o JSON em texto
console.log("Objeto em texto JSON:");
console.log(meuObjetoTexto);    

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

// transformando o texto JSON em objeto novamente
const meuObjeto2 = JSON.parse(meuObjetoTexto);      // transforma o texto em JSON
console.log("Objeto JSON recriado a partir do texto:");
console.log(meuObjeto2);

console.log("=+".repeat(20))  // texto separador  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

const v_txt = '{"Nome":"Ana","Idade":52,"Cidade":"São Paulo"}';
const v_obj = JSON.parse(v_txt);        // transforma o texto em JSON
console.log("Objeto JSON criado a partir do texto:");
console.log(v_obj);