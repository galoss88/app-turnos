import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
const Formulario = ({ crearCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);
  //destructuring datos de state citas
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Funcion almcenamiento datos en state
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);

      return;
    }
    //Si no hay error, seteamos a false, el state error
    setError(false);

    //asignacion ID
    cita.id = uuidv4();
    //crear cita
    crearCita(cita);
    //reiniciar form
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de su mascota"
          value={mascota}
          onChange={(e) => handleChange(e)}
        />

        <label>Nombre del dueño de mascota</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de mascota"
          value={propietario}
          onChange={(e) => handleChange(e)}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={(e) => handleChange(e)}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={(e) => handleChange(e)}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};
export default Formulario;
