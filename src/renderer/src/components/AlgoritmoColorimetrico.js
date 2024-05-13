function generarGamaDeColores(colorHex, cantidad) {

  const r = parseInt(colorHex.substr(1, 2), 16); // el 16 es la base, por tanto al hacer el parseint se convierte a decimal
  const g = parseInt(colorHex.substr(3, 2), 16);
  const b = parseInt(colorHex.substr(5, 2), 16);

  let pasos = [];
  for (let i = 0; i < cantidad; i++) {
      let factor = i / (cantidad - 1) * 0.9;
      let rNuevo = Math.round(r + factor * (255 - r));
      let gNuevo = Math.round(g + factor * (255 - g));
      let bNuevo = Math.round(b + factor * (255 - b));
      rNuevo = rNuevo.toString(16).padStart(2, '0');
      gNuevo = gNuevo.toString(16).padStart(2, '0');
      bNuevo = bNuevo.toString(16).padStart(2, '0');
      pasos.push(rNuevo + gNuevo + bNuevo);
  }

  return pasos.reverse();
}

export default generarGamaDeColores;
