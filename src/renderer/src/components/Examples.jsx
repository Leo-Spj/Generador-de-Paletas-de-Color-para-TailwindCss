function Examples() {
  return (
    <>
      <body className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ejemplos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* <!-- Card 1 --> */}
            <div className="bg-green-500 rounded-xl p-6 text-white">
              <div className="text-sm uppercase">
                Clientela
              </div>
              <div className="text-6xl font-bold mt-2">
                1.553
                <i className="fas fa-arrow-up">
                </i>
              </div>
              <div className="text-sm mt-2">
                Nuevos clientes en los últimos 30 días
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-sm uppercase">
                Calendario
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm mt-4">
                <div>
                  Mo
                </div>
                <div>
                  Tu
                </div>
                <div>
                  No
                </div>
                <div>
                  Fr
                </div>
                <div>
                  Sa
                </div>
                <div>
                  Su
                </div>
                <div className="col-span-7 border-t mt-2 pt-2">
                  <button className="bg-green-500 text-white rounded-md px-4 py-2 text-sm">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="text-sm uppercase">
                Hoy
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    Reunión del sistema de diseño
                  </div>
                  <i className="fas fa-ellipsis-h text-gray-400">
                  </i>
                </div>
                <div className="text-xs text-gray-500">
                  9 - 10 AM
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    Almuerzo
                  </div>
                  <i className="fas fa-ellipsis-h text-gray-400">
                  </i>
                </div>
                <div className="text-xs text-gray-500">
                  1 - 2 PM
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    Revisión del diseño
                  </div>
                  <i className="fas fa-ellipsis-h text-gray-400">
                  </i>
                </div>
                <div className="text-xs text-gray-500">
                  3 - 4 PM
                </div>
              </div>
            </div>

          </div>
        </div>
      </body>
    </>
  );
}

export default Examples;
