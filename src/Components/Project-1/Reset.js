import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { SizeContext } from "../../contexts/SizeContext";
import { ColorContext } from "../../contexts/ColorContext";
export default function Reset() {
    const { color, setColor } = useContext(ColorContext);
    const { size, setSize } = useContext(SizeContext);

    const handleReset = () => {
        setColor("red");
        setSize(16);
    };
    return (
        <>
            <Button
                onClick={handleReset}
                variant="primary"
                className="mt-2 mb-2"
            >
                Reset
            </Button>{" "}
        </>
    );
}
