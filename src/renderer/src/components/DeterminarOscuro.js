function determinarOscuro(colorHex) {

  // hexadecimal a RGB. RGB es de 0 a 255 - decimal
  const r = parseInt(colorHex.substr(1, 2), 16); // el 16 es la base, por tanto al hacer el parseint se convierte a decimal
  const g = parseInt(colorHex.substr(3, 2), 16);
  const b = parseInt(colorHex.substr(5, 2), 16);

  // Calcula el brillo del color
  const brillo = (r * 299 + g * 587 + b * 114) / 1000;
  // Esta es una formula simplificada de la formula de brillo de YIQ
  // https://es.planetcalc.com/7779/

  // Determina si el color es oscuro o no
  if (brillo < 128) {
    return true;
  } else {
    return false;
  }
}

export default determinarOscuro;
