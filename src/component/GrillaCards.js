import React from "react";
import CardsCitas from "./CardsCitas";

const GrillaCards = (props) => {

  

  const mostrarComponente = (props.citas.length === 0) ? (<h3 className="text-center mt-5">No hay citas pendientes</h3>) : (<section>
    <h3 className="text-center mt-5">Citas pendientes</h3>
    <div className="row justify-content-center my-5">
      {props.citas.map((cita, index) => (
        <CardsCitas
          key={index}
          index={index}
          cita={cita}
          borrarCita={props.borrarCita}
        ></CardsCitas>
      ))}
    </div>
  </section>);

  return (
    <>
      <hr />
      {mostrarComponente}
    </>
  );
};

export default GrillaCards;
