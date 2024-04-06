import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import Popover from 'react-popover';

const colorData = {
  '50': '#fcf5f4',
  '100': '#fae8e6',
  '200': '#f6d5d2',
  '300': '#efb7b2',
  '400': '#e48d85',
  '500': '#d6675d',
  '600': '#c4544a',
  '700': '#a23c33',
  '800': '#86352e',
  '900': '#70322c',
  '950': '#3c1613',
};

const buttons = ['Tailwind (HEX)', 'Tailwind (OKLCH)', 'Tailwind (HSL)', 'SCSS (HEX)', 'CSS (HEX)', 'CSS (RGB)', 'SVG (Figma)'];

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

function ExportCode() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  }

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
