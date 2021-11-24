import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import GrillaCards from "./GrillaCards";

const FormVet = () => {
  const arregloLocalStorage = JSON.parse(localStorage.getItem('arregloCitas')) || [];
  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [citas, setCitas] = useState(arregloLocalStorage);
  class NuevaCita {
    constructor(mascota, dueno, fecha, hora, sintomas) {
      this.mascota = mascota;
      this.dueno = dueno;
      this.fecha = fecha;
      this.hora = hora;
      this.sintomas = sintomas;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const paciente = new NuevaCita(mascota, dueno, fecha, hora, sintomas);
    setCitas([...citas, paciente]);
    setMascota("");
    setDueno("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  useEffect(() => {
    localStorage.setItem("arregloCitas", JSON.stringify(citas));
  }, [citas]);

  const borrarCita = (dueno)=>{


   let citasModificadas = citas.filter((cita)=> cita.dueno !== dueno);
   setCitas(citasModificadas);
  }

  return (
    <div className="bg-light p-2">
      <h5 className="text-start my-4 ms-5">Complete el formulario:</h5>
      <section className="row mt-5 justify-content-center">
        <Form className="col-12 col-md-7" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Label>Nombre de mascota:</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="w-50"
              onChange={(e) => setMascota(e.target.value)}
              value={mascota}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Label>Nombre de dueño:</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="w-50"
              onChange={(e) => setDueno(e.target.value)}
              value={dueno}
              required
            />
          </Form.Group>
          <div className="row">
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3 d-flex justify-content-between">
                <Form.Label>Fecha:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  className="w-50"
                  onChange={(e) => setFecha(e.target.value)}
                  value={fecha}
                  required
                />
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <Form.Group className="mb-3 d-flex justify-content-between">
                <Form.Label>Hora:</Form.Label>
                <Form.Control
                  type="time"
                  placeholder=""
                  className="w-50"
                  onChange={(e) => setHora(e.target.value)}
                  value={hora}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Form.Label>Sintomas:</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              className="w-50"
              type="text"
              onChange={(e) => setSintomas(e.target.value)}
              value={sintomas}
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="dark" type="submit" className="w-75">
              Agregar nueva cita
            </Button>
          </div>
        </Form>
      </section>
      <section>
          <GrillaCards citas={citas} borrarCita={borrarCita}></GrillaCards>
      </section>
    </div>
  );
};

export default FormVet;
