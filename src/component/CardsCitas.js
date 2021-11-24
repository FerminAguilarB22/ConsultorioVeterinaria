import React from "react";
import { Card, Button } from "react-bootstrap";
const CardsCitas = (props) => {
  return (
    <Card className="col-12 col-md-4 bg-dark text-white mx-3 my-3">
      <Card.Body>
        <div>
          <h5 className="fs-6">
            Mascota: <span>{props.cita.mascota}</span>
          </h5>
          <h5 className="fs-6">
            Dueño: <span>{props.cita.dueno}</span>
          </h5>
          <hr />
        </div>
        <section>
          <div className="d-flex">
            <p>Fecha: </p>
            <span className="ms-3">{props.cita.fecha}</span>
          </div>
          <div className="d-flex">
            <p>Hora:</p>
            <span className="ms-3">{props.cita.hora}</span>
          </div>
          <div className="d-flex">
            <p>Sintomas:</p>
            <span className="ms-3">{props.cita.sintomas}</span>
          </div>
        </section>
        <div className="text-end">
          <Button
            variant="danger"
            onClick={() => props.borrarCita(props.cita.dueno)}
          >
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardsCitas;
