import determinarOscuro from "./DeterminarOscuro"

function PaletaColor({colors}) {
  return (
    <>
      <div className="flex justify-center space-x-2">
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[0]}`}}>
          <p className={`font-semibold`} style={{ color: determinarOscuro(`#${colors[0]}`) ? "#ffffff" : "#000000" }}> 50 </p>
          <p className="text-sm mt-2" style={{ color: determinarOscuro(`#${colors[0]}`) ? "#ffffff" : "#000000" }}> {colors[0]} </p>
        </div>

        {colors.slice(1, -1).map((color, index) => (
          <div key={index} className={`p-4 min-w-20 rounded-lg text-center`} style={{ backgroundColor: `#${color}` }}>
            <p className={`font-semibold`} style={{ color: determinarOscuro("#"+color) ? "#ffffff" : "#000000" }}> {index * 100} </p>
            <p className="text-sm mt-2" style={{ color: determinarOscuro("#"+color) ? "#ffffff" : "#000000" }}> {color} </p>
          </div>
        ))}

        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[10]}`}}>
        <p className={`font-semibold`} style={{ color: determinarOscuro(`#${colors[10]}`) ? "#ffffff" : "#000000" }}> 950 </p>
          <p className="text-sm mt-2" style={{ color: determinarOscuro(`#${colors[10]}`) ? "#ffffff" : "#000000" }}> {colors[10]} </p>
        </div>
      </div>
    </>
  );
}

export default PaletaColor;
