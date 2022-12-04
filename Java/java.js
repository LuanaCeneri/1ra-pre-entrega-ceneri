let entrada="si";
while (entrada=="si"){

alert("Bienvenido! Vamos a calcular promedios");
let nombre=prompt("Ingresa tu nombre");
let saludar=alert("Hola "+nombre+"! Calculemos tu promedio");


function promedio(nota1,nota2,nota3,estado){

  let promedioo=(nota1+nota2+nota3)/3;
  if (promedioo >=7 && (estado=="regular" || estado=="Regular"||
estado=="REGULAR")) {
  console.log("Felicitaciones "+nombre+"! Aprobas");
  console.log("Tu promedio fue de",promedioo);
  }
  else if (promedioo>=4 && (estado=="regular" || estado=="Regular"||
estado=="REGULAR")) {
  console.log("Lo lamentamos "+nombre+"! Vas a recuperatorio");
  console.log("Tu promedio fue de",promedioo);
  }


  else if (promedioo<4 ||( estado=="irregular"|| estado=="IRREGULAR"
|| estado=="Irregular")){
  console.log(nombre+ " recursas la materia");
  console.log("Tu promedio fue de",promedioo);
  }


  else{
  console.log("datos incorrectos");
  }
}

console.log(promedio(9,9,9,"regular"))
  entrada=prompt("Escribi si para continuar o no para salir");

  }
