let valorEnPesos = prompt("Ingresa el valor en pesos:");

const calcularImpuesto = () => parseFloat(valorEnPesos) * 0.75;
const calcularValorFinal = () => parseFloat(valorEnPesos) + calcularImpuesto();

while (valorEnPesos !== "ESC") {
  if (!isNaN(valorEnPesos)) {
    let impuesto = calcularImpuesto();
    let valorFinal = calcularValorFinal();
    alert("El impuesto a pagar es de: $" + impuesto);
    alert("El valor final es de: $" + valorFinal);
  } else {
    alert("Error: Debes ingresar un valor numérico válido.");
  }
  
  valorEnPesos = prompt("Ingresa otro valor en pesos (o ESC para salir):");
}
