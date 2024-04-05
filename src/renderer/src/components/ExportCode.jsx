import React, { useState } from 'react';
import Popover from 'react-popover';
import ReactJson from 'react-json-view';

function ExportCode() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const openPopover = () => {
    setIsPopoverOpen(true);
  }

  const closePopover = () => {
    setIsPopoverOpen(false);
  }

  return (
    <>
      <Popover
        isOpen={isPopoverOpen}
        place='end' // Change 'start' to 'end'
        onOuterAction={closePopover}
        body={
          <div className="flex bg-white justify-end rounded-lg">

            <div className="relative bg-white rounded-lg p-3 max-w-lg">

              <div className="font-semibold text-lg mb-4">Export code</div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex flex-col space-y-2">
                  <button className="text-left text-gray-800 font-mono text-sm">Tailwind (HEX)</button>
                  <button className="text-left text-gray-800 font-mono text-sm">Tailwind (OKLCH)</button>
                  <button className="text-left text-gray-800 font-mono text-sm">Tailwind (HSL)</button>
                  <button className="text-left text-gray-800 font-mono text-sm">SCSS (HEX)</button>
                  <button className="text-left text-gray-800 font-mono text-sm">CSS (HEX)</button>
                  <button className="text-left text-gray-800 font-mono text-sm">CSS (RGB)</button>
                  <button className="text-left text-gray-800 font-mono text-sm">SVG (Figma)</button>
                </div>
              </div>

            </div>

            <div className='flex flex-col justify-end  p-3'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 mb-3 rounded">
                Copiar código
              </button>

              <div className="bg-[#f3f4f6] p-4 rounded-lg">
                <div className="">
                  <ReactJson src={{
                    'chestnut': {
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
                    }
                  }}
                    theme={{
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
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <button className="text-sm text-gray-500" onClick={openPopover}>Exportar</button>
      </Popover>
    </>
  );
}

export default ExportCode;
