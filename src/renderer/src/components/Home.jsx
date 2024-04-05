import ColorPicker from "./ColorPicker";

function Home() {
  return (
    <>

      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Tailwind CSS Color Generator</h1>
            <p className="text-lg mb-6">Ingrese un código hexadecimal o cambie los valores HSL para crear una escala de color personalizada</p>


            <ColorPicker />


          </div>
          <div className="w-full px-6">

            <div className="flex justify-center">
              <div className="flex justify-end space-x-2 mb-6">
                <button className="text-sm text-gray-500">Contrast grid</button>
                <button className="text-sm text-gray-500">Export</button>
                <button className="text-sm text-gray-500">Edit</button>
                <button className="text-sm text-gray-500">Save</button>
              </div>
            </div>


            <div className="flex justify-center space-x-2">
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <p className="text-green-800 font-semibold">50</p>
                <p className="text-sm text-green-800 mt-2">F6FAF3</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg text-center">
                <p className="text-green-800 font-semibold">100</p>
                <p className="text-sm text-green-800 mt-2">E9F5E3</p>
              </div>
              <div className="bg-green-300 p-4 rounded-lg text-center">
                <p className="text-green-800 font-semibold">200</p>
                <p className="text-sm text-green-800 mt-2">D3EAC8</p>
              </div>
              <div className="bg-green-400 p-4 rounded-lg text-center">
                <p className="text-green-800 font-semibold">300</p>
                <p className="text-sm text-green-800 mt-2">AFD89D</p>
              </div>
              <div className="bg-green-500 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">400</p>
                <p className="text-sm text-white mt-2">82BD69</p>
              </div>
              <div className="bg-green-600 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">500</p>
                <p className="text-sm text-white mt-2">61A146</p>
              </div>
              <div className="bg-green-700 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">600</p>
                <p className="text-sm text-white mt-2">4C8435</p>
              </div>
              <div className="bg-green-800 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">700</p>
                <p className="text-sm text-white mt-2">3D692C</p>
              </div>
              <div className="bg-green-900 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">800</p>
                <p className="text-sm text-white mt-2">345427</p>
              </div>
              <div className="bg-green-950 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">900</p>
                <p className="text-sm text-white mt-2">2B4522</p>
              </div>
              <div className="bg-green-950 p-4 rounded-lg text-center">
                <p className="text-white font-semibold">950</p>
                <p className="text-sm text-white mt-2">13250E</p>
              </div>
            </div>
          </div>
        </div>
      </body>

    </>
  );
}

export default Home;
