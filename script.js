const arrayDeImpuestos = [
  {
    id: 1,
    nombre: 'iva',
    valor: '21%',
  },
  {
    id: 2,
    nombre: 'impuesto PAIS',
    valor: '8%',
  },
  {
    id: 3,
    nombre: 'impuesto a las ganancias',
    valor: '45%',
  },
  {
    id: 4,
    nombre: 'ingresos brutos',
    valor: '2%',
  },
];

function init() {
  alert('Esto es un simulador de impuestos a las compras digitales');

  const comienzo = confirm('Acepte para continuar');

  if (comienzo) {
    mostrarMenu();
  } else {
    return;
  }
}

function mostrarMenu() {
  const eleccionUsuario = parseInt(prompt('¿Qué desea hacer? 1) Calcular impuesto 2)Conocer valores del impuesto 3)Salir'));

  switch(eleccionUsuario){
  case 1:
    calcularImpuesto();
    break;
  case 2:
    monstrarImpuestos();
    break;
  case 3:
    return;
  }
}

function monstrarImpuestos() {
  const listado = arrayDeImpuestos.reduce( (acc, el) => acc += `${el.id} - ${el.nombre} - ${el.valor} \n`, "");

  alert('Estos son los valores del impuesto \n' + listado);

  mostrarMenu();
}



function calcularImpuesto() {
  const valorEnPesos = parseInt(prompt("Ingresa el valor en pesos (o ESC para salir):"));
  
  const calcularValorImpuesto = parseFloat(valorEnPesos) * 0.76;

  const calcularValorFinal = parseFloat(valorEnPesos) + calcularValorImpuesto;

  alert('El impuesto a pagar es de: ' + calcularValorImpuesto);
  alert('El total a pagar es de: ' + calcularValorFinal);

  mostrarMenu();
}


init();