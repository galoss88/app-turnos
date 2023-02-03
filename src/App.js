import React, { useEffect, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  //arreglo de citas
  const [citas, setCitas] = useState(citasIniciales);
  //Cargo datos al inicio del componente
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    }
  }, [citas]);

  //function que tome citas actuales y agrega la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };
  //funcion eliminar citas por ID
  const eliminarCita = (citaId) => {
    const actualizarCita = citas.filter((c) => c.id !== citaId);
    setCitas(actualizarCita);
  };

  //Mensaje si no hay citas
  const titulo = citas.length ? "Administra tus citas" : "No hay citas";
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}></Formulario>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>

            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
