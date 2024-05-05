
function determinarOscuro(colorHex) {

  // hexadecimal a RGB
  const r = parseInt(colorHex.substr(1, 2), 16);
  const g = parseInt(colorHex.substr(3, 2), 16);
  const b = parseInt(colorHex.substr(5, 2), 16);

  // Calcula el brillo del color
  const brillo = (r * 299 + g * 587 + b * 114) / 1000;

  // Determina si el color es oscuro o no
  if (brillo < 128) {
    return true;
  } else {
    return false;
  }
}

export default determinarOscuro;
