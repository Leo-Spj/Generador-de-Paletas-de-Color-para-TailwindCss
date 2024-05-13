import determinarOscuro from "./DeterminarOscuro"

function Examples({ paleta }) {

  const daysOfWeek = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
  const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <>
      <body className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ejemplos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">



            {/* <!-- Card 1 --> */}
            <div style={{ backgroundColor: `#${paleta[0]}` }} className="rounded-lg shadow p-6 text-white">
              <div className="text-sm uppercase" style={{ color: determinarOscuro(`#${paleta[0]}`) ? "#ffffff" : "#000000" }}>
                Clientela
              </div>
              <div className="text-6xl font-bold mt-2" style={{ color: determinarOscuro(`#${paleta[0]}`) ? "#ffffff" : "#000000" }}>
                1.553
                <i className="fas fa-arrow-up">
                </i>
              </div>
              <div className="text-sm mt-2" style={{ color: determinarOscuro(`#${paleta[0]}`) ? "#ffffff" : "#000000" }}>
                Nuevos clientes en los últimos 30 días
              </div>
            </div>


            {/* <!-- Card 2 --> */}
            <div class="bg-white p-8 rounded-lg shadow">
              <div class="font-bold text-gray-700">
                Calendar
              </div>
              <div class="grid grid-cols-7 gap-1 text-center text-sm py-4">

                {daysOfWeek.map(day => (
                  <div key={day}>{day}</div>
                ))}

                <div class="col-span-7 border-t mt-2"></div>

                {daysOfMonth.map(day => (
                  <div key={day} class={day === 1 ? "col-start-2" : ""}>{day}</div>
                ))}

              </div>

              <div className="col-span-7 border-t mt-2"></div>

              <button style={{ backgroundColor: `#${paleta[2]}` , color: determinarOscuro(`#${paleta[0]}`) ? "#ffffff" : "#000000"  }} class="mt-4 px-4 py-2 rounded hover:bg-orange-300 transition duration-300">
                Continue
              </button>
            </div>



            {/* <!-- Card 3 --> */}

            <div class="bg-white p-8 rounded-lg shadow text-left">
              <div class="font-bold text-xl mb-2">Today</div>
              <div class="space-y-4">
                <div style={{ backgroundColor: `#${paleta[2]}` }} class=" p-4 rounded-lg flex justify-between items-center relative">
                  <div class="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: `#${paleta[7]}` }}></div>
                  <div class="pl-4">
                    <div class="font-semibold" style={{ color: determinarOscuro(`#${paleta[0]}`) ? "#ffffff" : "#000000" }}>Design system meeting</div>
                    <div class="text-gray-700 text-sm">9 - 10 AM</div>
                  </div>
                  <i class="fas fa-ellipsis-h text-gray-600"></i>
                </div>

                <div style={{ backgroundColor: `#${paleta[2]}` }} class=" p-4 rounded-lg flex justify-between items-center relative">
                  <div class="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: `#${paleta[7]}` }}></div>
                  <div class="pl-4">
                    <div class="font-semibold">Lunch</div>
                    <div class="text-gray-700 text-sm">1 - 2 PM</div>
                  </div>
                  <i class="fas fa-ellipsis-h text-gray-600"></i>
                </div>
                <div style={{ backgroundColor: `#${paleta[2]}` }} class=" p-4 rounded-lg flex justify-between items-center relative">
                  <div class="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: `#${paleta[7]}` }}></div>
                  <div class="pl-4">
                    <div class="font-semibold">Design review</div>
                    <div class="text-gray-700 text-sm">3 - 4 PM</div>
                  </div>
                  <i class="fas fa-ellipsis-h text-gray-600"></i>
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
