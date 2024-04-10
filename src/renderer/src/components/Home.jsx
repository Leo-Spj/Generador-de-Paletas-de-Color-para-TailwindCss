import ColorPicker from "./ColorPicker";

function Home() {
  return (
    <>


      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Tailwind CSS <br/> Generador de Color</h1>
            <p className="text-lg mb-6">Ingrese un código hexadecimal o cambie los valores RGB <br/> para crear una escala de color personalizada</p>


            <ColorPicker />



          </div>
        </div>
      </body>

    </>
  );
}

export default Home;
