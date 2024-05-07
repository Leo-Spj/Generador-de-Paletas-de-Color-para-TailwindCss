import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import Popover from 'react-popover';


const buttons = ['Tailwind (HEX)'];
// , 'Tailwind (OKLCH)', 'Tailwind (HSL)', 'SCSS (HEX)', 'CSS (HEX)', 'CSS (RGB)', 'SVG (Figma)'

const theme = {
  base00: "#f3f4f6",
  base01: "#ddd",
  base02: "#ddd",
  base03: "#444",
  base04: "purple",
  base05: "#444",
  base06: "#444",
  base07: "#444",
  base08: "#444",
  base09: "rgba(70, 70, 230, 1)",
  base0A: "rgba(70, 70, 230, 1)",
  base0B: "rgba(70, 70, 230, 1)",
  base0C: "rgba(70, 70, 230, 1)",
  base0D: "rgba(70, 70, 230, 1)",
  base0E: "rgba(70, 70, 230, 1)",
  base0F: "rgba(70, 70, 230, 1)"
};

function ExportCode({paleta}) {

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  }

  let colorData = {
    '50': `#${paleta[0]}`,
    '100': `#${paleta[1]}`,
    '200': `#${paleta[2]}`,
    '300': `#${paleta[3]}`,
    '400': `#${paleta[4]}`,
    '500': `#${paleta[5]}`,
    '600': `#${paleta[6]}`,
    '700': `#${paleta[7]}`,
    '800': `#${paleta[8]}`,
    '900': `#${paleta[9]}`,
    '950': `#${paleta[10]}`
  };

  return (
    <Popover
      isOpen={isPopoverOpen}
      place='left'
      onOuterAction={togglePopover}
      body={
        <div className="relative bg-white rounded-lg max-w-lg py-1 shadow-xl">

          <div className="font-semibold text-lg ml-2 align-middle">Exportar Código</div>

          <div className='flex space-x-2 mx-2 my-2'>

            <div className="bg-white rounded-lg max-w-lg">
              <div className="bg-gray-100 p-2 rounded-lg">
                <div className="flex flex-col space-y-2">
                  {buttons.map((button, index) => (
                    <button key={index} className="text-left text-gray-800 font-mono text-sm">{button}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className=''>
              <div className="bg-[#f3f4f6] rounded-lg p-2">
                <div className="min-w-52">
                  <ReactJson
                    src={colorData}
                    name={'paleta'}
                    displayDataTypes={false}
                    theme={theme}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      }
    >
      <button className="text-sm text-gray-500" onClick={togglePopover}>Exportar</button>
    </Popover>
  );
};

export default ExportCode;
