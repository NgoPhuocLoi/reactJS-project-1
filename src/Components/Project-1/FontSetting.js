import React, { useContext, useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import { SizeContext } from "../../contexts/SizeContext";
export default function FontSetting() {
    const { size, setSize } = useContext(SizeContext);

    const handleIncreaseSize = () => {
        if (size === 38) return;
        setSize(size + 2);
    };
    const handleDecreaseSize = () => {
        if (size === 16) return;
        setSize(size - 2);
    };
    return (
        <>
            <Badge
                bg="danger"
                style={{
                    width: "100%",
                    fontSize: 20,
                    textAlign: "left",
                }}
            >
                Size: {size}px
            </Badge>
            <div
                style={{
                    width: "100%",
                    height: "fit-content",
                    border: "1px solid #333",
                    padding: "10px 10px",
                }}
            >
                <Button onClick={handleIncreaseSize} variant="success">
                    Increase
                </Button>{" "}
                <Button onClick={handleDecreaseSize} variant="success">
                    Decrease
                </Button>{" "}
            </div>
        </>
    );
}
