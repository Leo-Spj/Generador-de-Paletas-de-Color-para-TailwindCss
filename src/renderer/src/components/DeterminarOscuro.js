function determinarOscuro(colorHex) {
  // hexadecimal a RGB
  const r = parseInt(colorHex.substr(1, 2), 16) / 255;
  const g = parseInt(colorHex.substr(3, 2), 16) / 255;
  const b = parseInt(colorHex.substr(5, 2), 16) / 255;

  // Encuentra el valor RGB lineal para cada componente
  const linear = (c) => c > 0.03928 ? Math.pow(((c + 0.055) / 1.055), 2.4) : c / 12.92;

  // Obtiene la luminancia relativa
  const luminance = 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);

  // Retorna si el color es oscuro o no
  if (luminance < 0.5) {
    return true;
  } else {
    return false;
  }
}

export default determinarOscuro;
