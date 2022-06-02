import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';

function App() {
  const navigate = useNavigate()
  const handleVoltar = () =>{
    navigate(-1)
}


  return (

    <div>
      <div className="galeria">
        <h1>Galeria de Fotos</h1>
      </div>
      <button onClick={handleVoltar} className="button">Voltar</button>
      <MainRoutes />
    </div>

  );
}

export default App;
