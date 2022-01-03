import React, { useContext, useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { ColorContext } from "../../contexts/ColorContext";

export default function ColorPicker() {
    const { color, colorList, setColor } = useContext(ColorContext);

    const handleChangeColor = (index) => {
        setColor(colorList[index]);
    };

    return (
        <>
            <Badge bg="secondary" style={{ width: "100%", fontSize: 20 }}>
                Color Picker
            </Badge>
            <div
                style={{
                    width: "100%",
                    height: "fit-content",
                    border: "1px solid #333",
                    padding: "10px 20px",
                }}
            >
                {colorList.map((item, index) => (
                    <span
                        onClick={() => handleChangeColor(index)}
                        key={index}
                        style={{
                            display: "inline-block",
                            marginLeft: 10,
                            width: "50px",
                            height: "50px",
                            backgroundColor: item,
                            border: color === item ? "2px solid #222" : "none",
                        }}
                    ></span>
                ))}
            </div>
        </>
    );
}
