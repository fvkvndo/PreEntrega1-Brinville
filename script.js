let valorEnPesos = prompt("Ingresa el valor en pesos (o ESC para salir):");

while (valorEnPesos !== "ESC") {
  if (!isNaN(valorEnPesos)) {
    const arrayDeImpuestos = [
      {
        nombre: "IVA",
        valor: valorEnPesos * 0.21,
      },
      {
        nombre: "Impuesto PAIS",
        valor: valorEnPesos * 0.08,
      },
      {
        nombre: "Impuesto a las ganancias",
        valor: valorEnPesos * 0.45,
      },
      {
        nombre: "Ingresos Brutos",
        valor: valorEnPesos * 0.02,
      },
    ];

    const nombres = arrayDeImpuestos.map((el) => el.nombre)
    console.log(nombres);

    for (let i = 0; i < arrayDeImpuestos.length; i++) {
      console.log("=====================");
      console.log("Nombre: " + arrayDeImpuestos[i].nombre);
      console.log("Valor: " + arrayDeImpuestos[i].valor);
    }

    class Impuestos {
      constructor(iva, impuestoGanancia, impuestoPais, ingresosBrutos) {
        this.iva = iva;
        this.impuestoGanancia = impuestoGanancia;
        this.impuestoPais = impuestoPais;
        this.ingresosBrutos = ingresosBrutos;
      }
    }

    const imp = new Impuestos("21%", "45%", "8%", "2%");
    console.log("===================");
    console.log("IVA:", imp.iva);
    console.log("Impuesto a la ganancia:", imp.impuestoGanancia);
    console.log("Impuesto país:", imp.impuestoPais);
    console.log("Ingresos brutos:", imp.ingresosBrutos);

    const calcularImpuesto = () => parseFloat(valorEnPesos) * 0.76;
    const calcularValorFinal = () => parseFloat(valorEnPesos) + calcularImpuesto();

    let impuesto = calcularImpuesto();
    let valorFinal = calcularValorFinal();
    alert("El impuesto a pagar es de: $" + impuesto);
    alert("El valor final es de: $" + valorFinal);
  } else {
    alert("Error: Debes ingresar un valor numérico válido.");
  }

  valorEnPesos = prompt("Ingresa otro valor en pesos (o ESC para salir):");
}
