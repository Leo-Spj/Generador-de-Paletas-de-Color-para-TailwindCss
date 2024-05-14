import determinarOscuro from "./DeterminarOscuro"

function PaletaColor({paleta}) {
  return (
    <>
      <div className="flex justify-center space-x-2">
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${paleta[0]}`}}>
          <p className={`font-semibold`} style={{ color: determinarOscuro(`#${paleta[0]}`) ? "#ffffff" : "#000000" }}> 50 </p>
          <p className="text-sm mt-2" style={{ color: determinarOscuro(`#${paleta[0]}`) ? "#ffffff" : "#000000" }}> {paleta[0]} </p>
        </div>

        {paleta.slice(1, -1).map((color, index) => (
          <div key={index} className={`p-4 min-w-20 rounded-lg text-center`} style={{ backgroundColor: `#${color}` }}>
            <p className={`font-semibold`} style={{ color: determinarOscuro("#"+color) ? "#ffffff" : "#000000" }}> {index * 100 + 100} </p>
            <p className="text-sm mt-2" style={{ color: determinarOscuro("#"+color) ? "#ffffff" : "#000000" }}> {color} </p>
          </div>
        ))}

        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${paleta[10]}`}}>
        <p className={`font-semibold`} style={{ color: determinarOscuro(`#${paleta[10]}`) ? "#ffffff" : "#000000" }}> 950 </p>
          <p className="text-sm mt-2" style={{ color: determinarOscuro(`#${paleta[10]}`) ? "#ffffff" : "#000000" }}> {paleta[10]} </p>
        </div>
      </div>
    </>
  );
}

export default PaletaColor;
