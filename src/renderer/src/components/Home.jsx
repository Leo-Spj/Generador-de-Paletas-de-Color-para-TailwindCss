import ColorPicker from "./ColorPicker";

function Home() {
  return (
    <>

        <div className="mt-24 text-center ">
        <h1 className="text-5xl font-bold mb-6">Tailwind CSS <br /> Generador de Color</h1>
        <p className="text-lg mb-6">Ingrese un código hexadecimal o cambie los valores RGB <br /> para crear una escala de color personalizada</p>

            <ColorPicker />

        </div>

    </>
  );
}

export default Home;
