import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Boton from "../components/Boton";

test("Aparece una cruz en el boton", () => {
  render(<Boton />);

  expect(screen.queryByText("❌")).toBeInTheDocument();
});

test("Aparece un mensaje de eliminar al hacer hover", () => {
  render(<Boton />);

  fireEvent.mouseOver(screen.getByText("❌"));
  expect(screen.queryByText("Eliminar")).toBeInTheDocument();
});

test('Cuando le das a eliminar aparece el mensaje "Eliminado"', () => {
  render(<Boton />);

  fireEvent.click(screen.getByText("❌"));
  expect(screen.queryByText("Eliminado")).toBeInTheDocument();
});
