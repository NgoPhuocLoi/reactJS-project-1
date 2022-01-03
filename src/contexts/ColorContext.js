import React, { createContext, useState } from "react";

export const ColorContext = createContext();

function ColorProvider({ children }) {
    const [color, setColor] = useState("red");
    const colorData = {
        colorList: ["red", "green", "blue", "orange"],
        color,
        setColor,
    };

    return (
        <ColorContext.Provider value={colorData}>
            {children}
        </ColorContext.Provider>
    );
}

export default ColorProvider;
