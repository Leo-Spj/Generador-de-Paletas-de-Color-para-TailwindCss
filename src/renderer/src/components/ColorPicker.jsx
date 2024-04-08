import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

import ExportCode from "./ExportCode";
import PaletaColor from "./PaletaColor";

import generarGamaDeColores from "./AlgoritmoColorimetrico";

function ColorPicker() {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);


  const [color, setColor] = useState({
    r: '0',
    g: '0',
    b: '0',
    a: '0',
  });

  const [hexColor, setHexColor] = useState('22C55E'); // Nuevo estado para el color hexadecimal sin '#'

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
    setHexColor(color.hex.replace('#', '')); // Actualiza el color hexadecimal sin '#'
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace('#', '');
    if (inputValue.length <= 6) { // Solo actualiza hexColor si inputValue tiene 6 caracteres o menos
      setHexColor(inputValue);
    }
  };


  const hexToRgb = (hex) => {
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: '1',
    } : null;
  };

  const [paleta, setPaleta] = useState([]); // Nuevo estado para la paleta de colores

  useEffect(() => {
    if (hexColor.length === 6) { // Solo aplica el color cuando hexColor tiene 6 caracteres
      const rgbColor = hexToRgb(hexColor);
      if (rgbColor) {
        setColor(rgbColor);
        const nuevaPaleta = generarGamaDeColores(`#${hexColor}`, 11); // Genera la nueva paleta de colores
        setPaleta(nuevaPaleta); // Actualiza el estado de la paleta de colores
      }
    }
  }, [hexColor]);

  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
        margin: '0',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
        marginTop: '245px',
        marginLeft: '-230px',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <>
      <div className="flex items-center justify-center mb-12">
        <div className="bg-white rounded-full p-2 shadow-lg flex items-center justify-between">

          <div className="flex items-center">
            <div style={styles.swatch} onClick={handleClick}>
              <div style={styles.color} />
            </div>
            {displayColorPicker ? <div style={styles.popover}>
              <div style={styles.cover} onClick={handleClose} />
              <SketchPicker color={color} onChange={handleChange} />
            </div> : null}
          </div>

          <input type="text" className="outline-none text-center ml-4" value={`#${hexColor}`} onChange={handleInputChange} />

          <div className="ml-4 text-sm text-gray-500 p-4">HEX <i className="fas fa-chevron-down"></i></div>
        </div>
      </div>

      <div className="w-full px-6">

        <div className="flex justify-center">
          <div className="flex justify-end space-x-2 mb-6">

            <ExportCode colors={paleta} />

          </div>
        </div>


        <PaletaColor colors={paleta} />
      </div>
    </>
  );
}

export default ColorPicker;
