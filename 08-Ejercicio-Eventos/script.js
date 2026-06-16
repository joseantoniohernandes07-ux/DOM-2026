// Referencia del emoji de cursor 

const cursor = document.querySelector(`.cursor`);

// Detectamos el evento del movimiento del raton/mouse

document.addEventListener(`mousemove`, (e) => {
  // Codigo que se ejecuta
  // console.log(e.clientY);

  // Guardar los datos de coordenadas del mouse en variables

  let mouseX = e.clientX;
  let mouseY = e.clientY;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

} );

// Detectar el evento de precionar una tecla.

document.addEventListener(`keydown`, (e) => {
  // Codigo que se ejecuta
  // console.log(e.key);

  switch (e.key) {
    // Casos
    case `1`:
      cursor.innerText = `🤖`;
      document.body.style.backgroundColor = '#13dd6e';
      break;
    case `2`:
      cursor.innerText = `🙀`;
      document.body.style.backgroundColor = '#a33c10';
      break;
    case `3`:
      cursor.innerText = `🤠`;
      document.body.style.backgroundColor = '#1316dd';
      break;
    case `4`:
      cursor.innerText = `🐷`;
      document.body.style.backgroundColor = '#9ea01e';
      break;
    default:
      cursor.innerText = `💩`
      document.body.style.backgroundColor = '#a35e14';
      break;
  }
} )