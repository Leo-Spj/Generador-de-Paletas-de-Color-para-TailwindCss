function PaletaColor({colors}) {
  return (
    <>
      <div className="flex justify-center space-x-2">
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[0]}`}}>
          <p className={` font-semibold`} style={{color: `#${colors[9]}`}}>50</p>
          <p className="text-sm text-green-800 mt-2"> {colors[0]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[1]}`}}>
          <p className={`font-semibold`} style={{color: `#${colors[8]}`}}>100</p>
          <p className="text-sm text-green-800 mt-2"> {colors[1]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[2]}`}}>
          <p className={`font-semibold`}  style={{color: `#${colors[7]}`}}>200</p>
          <p className="text-sm text-green-800 mt-2"> {colors[2]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[3]}`}}>
          <p className={`font-semibold`}  style={{color: `#${colors[7]}`}}>300</p>
          <p className="text-sm text-green-800 mt-2"> {colors[3]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[4]}`}}>
          <p className="text-white font-semibold">400</p>
          <p className="text-sm text-white mt-2"> {colors[4]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[5]}`}}>
          <p className="text-white font-semibold">500</p>
          <p className="text-sm text-white mt-2"> {colors[5]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[6]}`}}>
          <p className="text-white font-semibold">600</p>
          <p className="text-sm text-white mt-2"> {colors[6]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[7]}`}}>
          <p className="text-white font-semibold">700</p>
          <p className="text-sm text-white mt-2"> {colors[7]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[8]}`}}>
          <p className="text-white font-semibold">800</p>
          <p className="text-sm text-white mt-2"> {colors[8]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[9]}`}}>
          <p className="text-white font-semibold">900</p>
          <p className="text-sm text-white mt-2"> {colors[9]} </p>
        </div>
        <div className={`p-4 min-w-20 rounded-lg text-center`} style={{backgroundColor: `#${colors[10]}`}}>
          <p className="text-white font-semibold">950</p>
          <p className="text-sm text-white mt-2"> {colors[10]} </p>
        </div>
      </div>
    </>
  );
}

export default PaletaColor;
