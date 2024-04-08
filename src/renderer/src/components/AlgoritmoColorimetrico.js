
function generarGamaDeColores(colorHex, numeroTonos) {
  // Convertir el color hexadecimal a valores RGB
  let r = parseInt(colorHex.substring(1, 3), 16);
  let g = parseInt(colorHex.substring(3, 5), 16);
  let b = parseInt(colorHex.substring(5, 7), 16);

  // Calcular los pasos de cambio de color
  // (La formula tiene como explicación el siguiente ejemplo: si el color es #FF0000 (rojo puro) y se quiere obtener una gama de 5 tonos, el paso de cambio de color sería 255 / 5 = 51)
  let pasoR = r / numeroTonos;
  let pasoG = g / numeroTonos;
  let pasoB = b / numeroTonos;

  // Generar la gama de colores
  let gamaColores = [];
  for (let i = 0; i < numeroTonos; i++) {
      // Calcular los valores RGB para el nuevo tono
      let nuevoR = Math.round(r - (pasoR * i));
      let nuevoG = Math.round(g - (pasoG * i));
      let nuevoB = Math.round(b - (pasoB * i));

      // Convertir los valores RGB a formato hexadecimal
      let nuevoColorHex = nuevoR.toString(16).padStart(2, '0') +
                          nuevoG.toString(16).padStart(2, '0') +
                          nuevoB.toString(16).padStart(2, '0');

      // Agregar el nuevo color a la gama
      gamaColores.push(nuevoColorHex);
  }

  return gamaColores;
}

export default generarGamaDeColores;
