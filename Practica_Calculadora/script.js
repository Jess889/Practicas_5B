const display = document.getElementById('pantallita');

const limpiarDisplay = () => {
  display.textContent = '';
};

const borrarUltimoCaracter = () => {
  display.textContent = display.textContent.slice(0, -1);
};

const agregarAlDisplay = (valor) => {
  display.textContent += valor;
};

const sumar = (v1, v2) => v1 + v2;

const restar = (v1, v2) => v1 - v2;

const multiplicar = (v1, v2) => v1 * v2;

const dividir = (v1, v2) => {
  if (v2 == 0) {
    return 'Operación no válida';
  } else {
    return v1 / v2;
  }
};

const porcentaje = () => {
  display.textContent = parseFloat(display.textContent) / 100;
};

const inversa = () => {
  display.textContent = 1 / parseFloat(display.textContent);
};

const cuadrado = () => {
  display.textContent = Math.pow(parseFloat(display.textContent), 2);
};

const raizCuadrada = () => {
  display.textContent = Math.sqrt(parseFloat(display.textContent));
};

const realizarOperacion = () => {
  const expresion = display.textContent.split(/([+\-xX÷])/);
  const v1 = parseFloat(expresion[0]);
  const op = expresion[1];
  const v2 = parseFloat(expresion[2]);

  switch (op) {
    case '+':
      display.textContent = sumar(v1, v2);
      break;
    case '-':
      display.textContent = restar(v1, v2);
      break;
    case 'x':
    case 'X':
      display.textContent = multiplicar(v1, v2);
      break;
    case '÷':
      display.textContent = dividir(v1, v2);
      break;
    default:
      // No hace nada si no hay operación válida
      break;
  }
};

const botones = document.querySelectorAll('.teclado');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const valorTeclado = boton.textContent;

    switch (valorTeclado) {
      case 'C':
        limpiarDisplay();
        break;
      case 'CE':
        borrarUltimoCaracter();
        break;
      case '←':
        borrarUltimoCaracter();
        break;
      case '1/x':
        inversa();
        break;
      case 'x²':
        cuadrado();
        break;
      case '²√x':
        raizCuadrada();
        break;
      case '%':
        porcentaje();
        break;
      case '=':
        // Utilizar la función general para todas las operaciones
        realizarOperacion();
        break;
      default:
        agregarAlDisplay(valorTeclado);
        break;
    }
  });
});
