import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { ColorContext } from "../../contexts/ColorContext";
import { SizeContext } from "../../contexts/SizeContext";
export default function Result() {
    const { color } = useContext(ColorContext);
    const { size } = useContext(SizeContext);

    return (
        <>
            <Form.Label htmlFor="inputPassword5">
                Color: {color} - Font-size: {size}px
            </Form.Label>
            <Form.Control
                type="text"
                placeholder="Content"
                style={{
                    fontSize: `${size}px`,
                    color: color,
                    border: `2px solid ${color}`,
                }}
            />
        </>
    );
}
