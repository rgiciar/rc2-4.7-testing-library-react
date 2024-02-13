import { useState } from "react"

export const Panel = () => {
    const [text, setText] = useState("");
    return (
        <>
            <h1>Haz click en el pulsador</h1>
            <button onClick={() => setText("Hola!")}>Púlsame</button>
            <p>{text}</p>
        </>
    );
};
