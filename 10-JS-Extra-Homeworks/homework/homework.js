// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //var arr = Map.objeto.entries(function(key) {
    //return arr;
    var matriz = [];
    var llaves = Object.keys(objeto);
    for(var i = 0; i < llaves.length; i++){
      matriz.push(llaves[i]);
    }
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {}
    for(var i = 0; i < string.length; i++){
      if(!obj[string[i]]){
        obj[string[i]] = 0;
      }
      obj[string[i]]++;
    }
    return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var capital = '';
  var lower = '';
  for(let i = 0; i < s.length; i++){
  if(s[i].toLowerCase() === s[i]){
    lower += s[i];
  }else{
    capital += s[i];
  };
  };
  return capital + lower;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase = str.split(' ');
  var fraseEspejo = '';
  for(var i = 0; i < frase.length; i++){
    frase += str[i]
   return frase.split('').reverse().join('');
  }
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var reverse = '';
  var num = numero.toString();
  for(var i = num.length -1; i >= 0; i--){
    reverse += num[i];
  }
  if(reverse === numero.toString()){
    return 'Es capicua';
 }
 return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaModificada = ''
  for(var i = 0; i < cadena.length; i++){
  if(cadena.length === 'a' || cadena-length === 'b' || cadena.length === 'c'){
    delete cadena.length[i] === 'a' || 'b' || 'c';
    }
    cadenaModificada.push(cadena[i]);
  }
  return cadenaModificada;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(elemento1, elemento2){
    return elemento1.length - elemento2.length;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var iguales = 0;
  for(var i = 0; i < arreglo1.length; i++){
   for(var j = 0; j < arreglo2.length; i++){
     if(arreglo1[i] === arreglo2[j])
     iguales++;
   }
   return iguales;
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

