import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Movie from "../components/Movie";

test("Muestra la pelicula Asesinos de la luna", () => {
  render(<Movie title="Los asesinos de la luna" director="Martin Scorsese" />);

  expect(
    screen.queryByText("Título: Los asesinos de la luna")
  ).toBeInTheDocument();
  expect(screen.queryByText("Director: Martin Scorsese")).toBeInTheDocument();
});

test("Muestra la pelicula Barbie", () => {
  render(<Movie title="Barbie" director="Greta Gerwig" />);

  expect(screen.queryByText("Título: Barbie")).toBeInTheDocument();
  expect(screen.queryByText("Director: Greta Gerwig")).toBeInTheDocument();
});
