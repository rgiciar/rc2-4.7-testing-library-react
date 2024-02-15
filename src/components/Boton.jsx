import { useState } from "react";

function Boton() {
  const [hovered, setHovered] = useState(false);
  const [eliminado, setEliminado] = useState(false);

  const handleClick = () => {
    setEliminado(true);
  };

  return (
    <div>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        {hovered ? "Eliminar" : "❌"}
      </button>
      {eliminado && <p>Eliminado</p>}
    </div>
  );
}

export default Boton;
