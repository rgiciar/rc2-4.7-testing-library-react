import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Panel } from "../components/Panel";

test("El panel no muestra mensaje al principio", () => {
    render(<Panel />);

    expect(screen.queryByText("Hola!")).not.toBeInTheDocument();
});

test("El panel muestra un mensaje si pulsamos el botón", () => {
    render(<Panel />);

    fireEvent.click(screen.getByText(/Púlsame/i));

    expect(screen.queryByText("Hola!")).toBeInTheDocument();
});

