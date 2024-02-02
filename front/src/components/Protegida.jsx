// Protegida.jsx
import React from 'react';

const Protegida = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Bienvenido a la Página Protegida</h2>
              <p className="card-text">
                Este contenido solo es accesible para usuarios autenticados. ¡Felicidades, has iniciado sesión correctamente!
              </p>
              <img
                src="https://cdn.pixabay.com/photo/2023/04/02/16/04/ai-generated-7894906_960_720.jpg" // Reemplaza con la URL de una imagen que quieras mostrar
                alt="Imagen protegida"
                className="img-fluid mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protegida;
