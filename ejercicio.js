let contara = palabraa => {
 
  let letraa="a"

  let cantidada=0;
  for (const letrab of palabraa) {
      if (letraa.includes(letrab.toLowerCase())) {
          cantidada++;
      }
  }
  return cantidada;
  }

let contarvocales = palabra => {
  let vocales = "aáeéiíoóuú";

  let cantidadvocales=0;
  
  for (const letra of palabra) {
      if (vocales.includes(letra.toLowerCase())) {
          cantidadvocales++;
      }
  }
  return cantidadvocales;
  }
  let cadena = prompt("Ingrese una frase");
  let letraa=contara(cadena);
  let vocales = contarvocales(cadena);
    console.log(`La longitud de la cadena: ${cadena.length} `);
  console.log(`La cantidad de a es: ${letraa}`);
  console.log(`La cantidad de vocales es: ${vocales}`);
