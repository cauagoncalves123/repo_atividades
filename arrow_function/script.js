/*
A função double_value recebe uma variável com vários valores e retorna a array com os valores dobrados
'i' é o índice de cada item na variavel
  |_o item de índice 'i' é dobrado
retorna a mesma variavel, mas com valores diferentes
*/
const double_value = (array) => {
    for(i in array){ 
        array[i] = array[i] * 2;  
    };
    return array; 
};
/*
A função length_sort recebe uma variável com várias palavras, em seguida retorna a variável em ordem de tamanho ->
enquanto a variavel 'flag' for falsa, o programa faz:
  |_ 'i' é o índice de cada item na variavel, e enquanto ele não for o penúltimo ele faz:
      |_  se o item de indice 'i' for menor que o de proximo indice, ele faz:
        |_  auxiliar passa a receber o item de indice 'i'
        |_  item de indice 'i' recebe o item de proximo indice
        |_  o item de proximo indice recebe o item atual
        |_  a troca foi realizada, então adiciona 1 troca
  se o numero de trocas for 0
    |_  faz a flag ser verdadeira, nesse caso o loop termina
  retorna a mesma variavel, mas com valores diferentes
*/ 
const length_sort = (array) => {
    let aux; 
    let flag = false;
    while(!flag){
      let swaps = 0; 
      for(let i = 0; i < array.length - 1; i++){
            if(array[i].length < array[i + 1].length){ 
                aux = array[i]; 
                array[i] = array[i + 1] 
                array[i + 1] = aux 
                swaps += 1 
          }
      };
      if(swaps === 0){ 
        flag = true 
      }
    };
    return array; 
};
/*
A função even_number recebe uma variável com varios números
para cada item, ele checa se é divisivel por 2 sem restos, e então ele adiciona esse item à nova variavel,
então retorna essa variavel
*/
const even_number = (array) => {
  let even_array = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      even_array[even_array.length] = array[i]
    };
  };
  return even_array
};

let doubles = double_value([1, 2, 3, 7, 8, 9])
let sorted = length_sort(["professor", "icaro", "botelho"])
let evens = even_number([2,3,4,5,6,7,8,9])

console.log(doubles)
console.log(sorted)
console.log(evens)


