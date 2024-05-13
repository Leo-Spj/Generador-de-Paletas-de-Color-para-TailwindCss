function generarGamaDeColores(colorBase, cantidad) {
  let [r, g, b] = colorBase.match(/\w\w/g).map(x => parseInt(x, 16));

  let pasos = Array.from({length: cantidad}, (_, i) => {
    let factor = i / (cantidad - 1) * 0.9;
    let rNuevo = Math.round(r + factor * (255 - r)).toString(16).padStart(2, '0');
    let gNuevo = Math.round(g + factor * (255 - g)).toString(16).padStart(2, '0');
    let bNuevo = Math.round(b + factor * (255 - b)).toString(16).padStart(2, '0');
    return rNuevo + gNuevo + bNuevo;
  });

  return pasos.reverse();
}

export default generarGamaDeColores;
