import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

function ColorPicker() {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r: '0',
    g: '0',
    b: '0',
    a: '0',
  });

  const [hexColor, setHexColor] = useState('#82BD69'); // Nuevo estado para el color hexadecimal

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
    setHexColor(color.hex); // Actualiza el color hexadecimal cuando el color cambia
  };

  const handleInputChange = (event) => {
    setHexColor(event.target.value);
  };

  useEffect(() => {
    // Convierte el color hexadecimal a RGB cuando el valor del input cambia
    const rgbColor = hexToRgb(hexColor);
    if (rgbColor) {
      setColor(rgbColor);
    }
  }, [hexColor]);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: '1',
    } : null;
  };

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

        <input type="text" className="outline-none text-center ml-4" value={hexColor} onChange={handleInputChange} />

        <div className="ml-4 text-sm text-gray-500 p-4">HEX <i className="fas fa-chevron-down"></i></div>
      </div>
    </div>
  );
}

export default ColorPicker;
