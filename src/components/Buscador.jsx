import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Buscador({ recetas }) {
  const [filtro, setFiltro] = useState("");

  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  // eslint-disable-next-line react/prop-types
  const recetasFiltradas = recetas.filter((receta) =>
    receta.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar receta"
        value={filtro}
        onChange={handleInputChange}
      />
      <ul>
        {recetasFiltradas.map((receta) => (
          <li key={receta.id}>{receta.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Buscador;
