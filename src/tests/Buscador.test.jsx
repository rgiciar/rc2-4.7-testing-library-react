import { render, fireEvent, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Buscador from "../components/Buscador";

const recetas = [
  { id: 1, nombre: "Pizza" },
  { id: 2, nombre: "Ensalada" },
  { id: 3, nombre: "Tarta de manzana" },
];

test("Filtra correctamente las recetas por nombre", () => {
  render(<Buscador recetas={recetas} />);

  const input = screen.getByPlaceholderText("Buscar receta");

  fireEvent.change(input, { target: { value: "pizza" } });

  expect(screen.getByText("Pizza")).toBeInTheDocument();
  expect(screen.queryByText("Ensalada")).not.toBeInTheDocument();
  expect(screen.queryByText("Tarta de manzana")).not.toBeInTheDocument();
});

test("Busca la ensalada", () => {
    render(<Buscador recetas={recetas} />);
  
    const input = screen.getByPlaceholderText("Buscar receta");
  
    fireEvent.change(input, { target: { value: "ENSALADA" } });
  
    expect(screen.getByText("Ensalada")).toBeInTheDocument();
    expect(screen.queryByText("Pizza")).not.toBeInTheDocument();
    expect(screen.queryByText("Tarta de manzana")).not.toBeInTheDocument();
  });
