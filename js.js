//Conversion de pesos chilenos a Dolar o Euro segun lo requieran

let dolar = 0.0011;
let euro = 0.0012;
let valor1, valor2;

function pesosADolar(monto) {
  return monto * dolar;
}

function pesosAEuro(monto) {
  return monto * euro;
}

do {
  valor1 = parseFloat(prompt("Ingrese monto a calcular"));
  valor2 = prompt("Indique D para Dolar y E para Euro");
  switch (valor2.toUpperCase()) {
    case "D":
      alert(pesosADolar(valor1) + " Dolar");
      break;
    case "E":
      alert(pesosAEuro(valor1) + " Euro");
      break;
  }
} while (isNaN(valor1) && valor2 != "");

class datosDeUsuario {
  constructor () {
    this.nombre = nombre
    this.edad = edad
    this.tipo = tipo
  }
}