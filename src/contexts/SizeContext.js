import React, { createContext, useState } from "react";

export const SizeContext = createContext();

function SizeProvider({ children }) {
    const [size, setSize] = useState(16);
    const SizeData = {
        size,
        setSize,
    };

    return (
        <SizeContext.Provider value={SizeData}>{children}</SizeContext.Provider>
    );
}

export default SizeProvider;
