/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
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
            <div style={{ backgroundColor: `#${paleta[0]}` }} className="rounded-lg shadow p-6">
              <div className="text-sm uppercase" style={{ color: determinarOscuro(`#${paleta[0]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>
                Clientela
              </div>
              <div className="text-6xl font-bold mt-2" style={{ color: determinarOscuro(`#${paleta[0]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>
                1.553
                <i className="fas fa-arrow-up"></i>
              </div>
              <div className="text-sm mt-2" style={{ color: determinarOscuro(`#${paleta[0]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>
                Nuevos clientes en los últimos 30 días
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="font-bold" style={{ color: determinarOscuro(`#${paleta[0]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>
                Calendar
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm py-4">
                {daysOfWeek.map(day => (
                  <div key={day} style={{ color: determinarOscuro(`#${paleta[2]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>{day}</div>
                ))}
                <div className="col-span-7 border-t mt-2"></div>
                {daysOfMonth.map(day => (
                  <div key={day} className={day === 1 ? "col-start-2" : ""} style={{ color: determinarOscuro(`#${paleta[2]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>{day}</div>
                ))}
              </div>
              <div className="col-span-7 border-t mt-2"></div>
              <button
                style={{
                  backgroundColor: `#${paleta[2]}`,
                  color: determinarOscuro(`#${paleta[2]}`) ? `#${paleta[0]}` : `#${paleta[10]}`
                }}
                className="mt-4 px-4 py-2 rounded hover:bg-orange-300 transition duration-300"
              >
                Continue
              </button>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="bg-white p-8 rounded-lg shadow text-left">
              <div className="font-bold text-xl mb-2">Today</div>
              <div className="space-y-4">
                <div style={{ backgroundColor: `#${paleta[2]}` }} className="p-4 rounded-lg flex justify-between items-center relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: `#${paleta[7]}` }}></div>
                  <div className="pl-4">
                    <div className="font-semibold" style={{ color: determinarOscuro(`#${paleta[2]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>Design system meeting</div>
                    <div className="text-gray-700 text-sm">9 - 10 AM</div>
                  </div>
                  <i className="fas fa-ellipsis-h text-gray-600"></i>
                </div>
                <div style={{ backgroundColor: `#${paleta[2]}` }} className="p-4 rounded-lg flex justify-between items-center relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: `#${paleta[7]}` }}></div>
                  <div className="pl-4">
                    <div className="font-semibold" style={{ color: determinarOscuro(`#${paleta[2]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>Lunch</div>
                    <div className="text-gray-700 text-sm">1 - 2 PM</div>
                  </div>
                  <i className="fas fa-ellipsis-h text-gray-600"></i>
                </div>
                <div style={{ backgroundColor: `#${paleta[2]}` }} className="p-4 rounded-lg flex justify-between items-center relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: `#${paleta[7]}` }}></div>
                  <div className="pl-4">
                    <div className="font-semibold" style={{ color: determinarOscuro(`#${paleta[2]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>Design review</div>
                    <div className="text-gray-700 text-sm">3 - 4 PM</div>
                  </div>
                  <i className="fas fa-ellipsis-h text-gray-600"></i>
                </div>
              </div>
            </div>

            {/* <!-- Card 4 --> */}
            <div style={{ backgroundColor: `#${paleta[0]}` }} className="rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center">
                <i className="fas fa-chart-line mr-2" style={{ color: `#${paleta[7]}` }}></i>
                <div className="text-sm uppercase" style={{ color: `#${paleta[7]}` }}>
                  Ventas del Mes
                </div>
              </div>
              <hr className="my-4" style={{ borderColor: `#${paleta[7]}` }} />
              <div className="text-4xl font-bold" style={{ color: determinarOscuro(`#${paleta[0]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>
                $12,345
              </div>
              <div className="text-sm mt-2" style={{ color: `#${paleta[7]}` }}>
                Hasta ahora
              </div>
            </div>


            {/* <!-- Card 5 --> */}
            <div style={{ backgroundColor: `#${paleta[10]}` }} className="rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2" style={{ color: `#${paleta[2]}` }}></i>
                <div className="text-sm uppercase" style={{ color: `#${paleta[2]}` }}>
                  Tareas Completadas
                </div>
              </div>
              <div className="text-4xl font-bold mt-2" style={{ color: determinarOscuro(`#${paleta[10]}`) ? `#${paleta[0]}` : `#${paleta[0]}` }}>
                23
              </div>
              <div className="text-sm mt-2 mb-4" style={{ color: `#${paleta[2]}` }}>
                Tareas completadas hoy
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="h-2.5 rounded-full" style={{ width: "23%", backgroundColor: `#${paleta[7]}` }}></div>
              </div>
            </div>



            {/* <!-- Card 6 --> */}
            <div style={{ backgroundColor: `#${paleta[0]}` }} className="rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center">
                <i className="fas fa-user mr-2" style={{ color: `#${paleta[7]}` }}></i>
                <div className="text-sm uppercase" style={{ color: `#${paleta[7]}` }}>
                  Información del Usuario
                </div>
              </div>
              <hr className="my-4" style={{ borderColor: `#${paleta[7]}` }} />
              <div className="text-2xl font-bold" style={{ color: determinarOscuro(`#${paleta[0]}`) ? `#${paleta[0]}` : `#${paleta[10]}`}}>
                John Doe
              </div>
              <div className="text-sm mt-2" style={{ color: `#${paleta[7]}` }}>
                Email: john.doe@example.com
              </div>
              <div className="text-sm mt-2" style={{ color: `#${paleta[7]}` }}>
                Teléfono: +123 456 789
              </div>
            </div>

            {/* <!-- Card 7 --> */}
            <div style={{ backgroundColor: `#${paleta[10]}` }} className="rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center">
                <i className="fas fa-calendar-alt mr-2" style={{ color: `#${paleta[2]}` }}></i>
                <div className="text-sm uppercase" style={{ color: `#${paleta[2]}` }}>
                  Eventos Próximos
                </div>
              </div>
              <hr className="my-4" style={{ borderColor: `#${paleta[2]}` }} />
              <div className="text-lg font-bold" style={{ color: determinarOscuro(`#${paleta[10]}`) ? `#${paleta[0]}` : `#${paleta[0]}`}}>
                Reunión Anual
              </div>
              <div className="text-sm mt-2" style={{ color: `#${paleta[2]}` }}>
                Fecha: 25 de Mayo
              </div>
              <div className="text-sm mt-2" style={{ color: `#${paleta[2]}` }}>
                Hora: 10:00 AM
              </div>
            </div>

            {/* <!-- Card 8 --> */}
            <div style={{ backgroundColor: `#${paleta[0]}` }} className="rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center">
                <i className="fas fa-tasks mr-2" style={{ color: `#${paleta[7]}` }}></i>
                <div className="text-sm uppercase" style={{ color: `#${paleta[7]}` }}>
                  Progreso del Proyecto
                </div>
              </div>
              <div className="text-4xl font-bold mt-2" style={{ color: determinarOscuro(`#${paleta[0]}`) ? `#${paleta[0]}` : `#${paleta[10]}` }}>
                75%
              </div>
              <div className="text-sm mt-2 mb-4" style={{ color: `#${paleta[7]}` }}>
                Completado
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="h-2.5 rounded-full" style={{ width: "75%", backgroundColor: `#${paleta[5]}` }}></div>
              </div>
            </div>

            {/* <!-- Card 9 --> */}
            <div style={{ backgroundColor: `#${paleta[10]}` }} className="rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center">
                <i className="fas fa-envelope mr-2" style={{ color: `#${paleta[2]}` }}></i>
                <div className="text-sm uppercase" style={{ color: `#${paleta[2]}` }}>
                  Mensajes Recientes
                </div>
              </div>
              <hr className="my-4" style={{ borderColor: `#${paleta[2]}` }} />
              <div className="text-lg font-bold" style={{ color: determinarOscuro(`#${paleta[10]}`) ? `#${paleta[0]}` : `#${paleta[0]}` }}>
                Tienes 5 mensajes nuevos
              </div>
              <div className="text-sm mt-2" style={{ color: `#${paleta[2]}` }}>
                Revisa tu bandeja de entrada para más detalles.
              </div>
            </div>

          </div>
        </div>
      </body>
    </>
  );
}

export default Examples;
