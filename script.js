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
  const storedName = localStorage.getItem('nombre');

  if (storedName) {
    const name = JSON.parse(storedName);
    mostrarMenu(name);
  } else {
    solicitarNombre();
  }
}

function solicitarNombre() {
  const nameContainer = document.getElementById('name-container');
  nameContainer.innerHTML = `
    <label for="name-input">Ingresa tu nombre:</label>
    <input type="text" id="name-input">
    <button id="name-submit-button">Enviar</button>
  `;

  const nameSubmitButton = document.getElementById('name-submit-button');
  nameSubmitButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();

    if (name !== '') {
      localStorage.setItem('nombre', JSON.stringify(name));
      nameContainer.innerHTML = '';
      mostrarMenu(name);
    } else {
      alert('Debes ingresar tu nombre para continuar.');
    }
  });
}

function mostrarMenu(name) {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = `
    <h1>Calculador de Impuestos a las compras digitales</h1>
    <h2>Hola, ${name}.</h2>
    <p>¿Qué deseas hacer?</p>
    <button id="calculate-button">Calcular impuesto</button>
    <button id="show-button">Conocer valores del impuesto</button>
    <button id="exit-button">Salir</button>
  `;

  const calculateButton = document.getElementById('calculate-button');
  const showButton = document.getElementById('show-button');
  const exitButton = document.getElementById('exit-button');

  calculateButton.addEventListener('click', solicitarValor);
  showButton.addEventListener('click', mostrarImpuestos);
  exitButton.addEventListener('click', exit);

  const startButton = document.getElementById('start-button');
  startButton.style.display = 'none'; // Ocultar el botón "Comenzar"
}

function solicitarValor() {
  const valueContainer = document.getElementById('value-container');
  valueContainer.innerHTML = `
    <label for="value-input">Ingresa el valor en pesos:</label>
    <input type="number" id="value-input">
    <button id="calculate-impuesto-button">Calcular</button>
  `;

  const calculateImpuestoButton = document.getElementById('calculate-impuesto-button');
  calculateImpuestoButton.addEventListener('click', calcularImpuesto);
}

function mostrarImpuestos() {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';

  arrayDeImpuestos.forEach((impuesto) => {
    const listItem = document.createElement('p');
    listItem.textContent = `${impuesto.id} - ${impuesto.nombre} - ${impuesto.valor}`;
    listContainer.appendChild(listItem);
  });

  const backButton = document.createElement('button');
  backButton.textContent = 'Volver';
  backButton.addEventListener('click', () => {
    listContainer.innerHTML = '';
    mostrarMenu();
  });
  listContainer.appendChild(backButton);
}

function calcularImpuesto() {
  const valueInput = document.getElementById('value-input');
  const value = parseFloat(valueInput.value);

  if (isNaN(value)) {
    alert('Ingresa un valor válido.');
    return;
  }

  const calculateValueImpuesto = value * 0.76;
  const calculateValueFinal = value + calculateValueImpuesto;

  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `
    <p>El impuesto a pagar es de: ${calculateValueImpuesto}</p>
    <p>El total a pagar es de: ${calculateValueFinal}</p>
    <button id="back-button">Volver</button>
  `;

  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', () => {
    resultContainer.innerHTML = '';
    mostrarMenu();
  });

  // Limpiar el contenedor de valor
  const valueContainer = document.getElementById('value-container');
  valueContainer.innerHTML = '';
}

function exit() {
  localStorage.removeItem('nombre');

  // Limpiar los contenedores
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = '';

  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';

  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';

  const valueContainer = document.getElementById('value-container');
  valueContainer.innerHTML = '';

  solicitarNombre();
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    init();
    startButton.style.display = 'none'; // Ocultar el botón "Comenzar"
  });
});
