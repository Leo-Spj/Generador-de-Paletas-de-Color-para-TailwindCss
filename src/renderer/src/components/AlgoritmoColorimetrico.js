function generarGamaDeColores(colorBase, cantidad) {
  // Convertir el color hexadecimal a HSL
  let [r, g, b] = colorBase.match(/\w\w/g).map(x => parseInt(x, 16));
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Calcular límites de luminosidad
  let lMin = Math.max(0.2, l - 0.2); // Ajusta este valor según tus necesidades
  let lMax = Math.min(1, l + 0.3);

  // Calcular pasos de luminosidad
  let pasos = [];
  for (let i = 0; i < cantidad; i++) {
    let lNuevo = lMin + (lMax - lMin) * (i / (cantidad - 1));
    pasos.push([h, s, lNuevo]);
  }

  // Convertir de nuevo a hexadecimal
  let paletaHex = pasos.map(hsl => {
    let [h, s, l] = hsl;
    let hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    let r = hue2rgb(p, q, h + 1 / 3);
    let g = hue2rgb(p, q, h);
    let b = hue2rgb(p, q, h - 1 / 3);
    return `${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}`;
  });

  return paletaHex.reverse();
}

export default generarGamaDeColores;
