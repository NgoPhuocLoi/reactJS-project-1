import React, { createContext, useState } from "react";

export const SearchAndSortDataContext = createContext();
export default function SearchAndSortDataProvider({ children }) {
    const [key, setKey] = useState("");
    const [sort, setSort] = useState({
        sortBy: "name",
        sortValue: 1,
    });
    const data = {
        key,
        setKey,
        sort,
        setSort,
    };
    return (
        <SearchAndSortDataContext.Provider value={data}>
            {children}
        </SearchAndSortDataContext.Provider>
    );
}
