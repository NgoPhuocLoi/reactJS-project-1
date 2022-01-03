import React, { useContext, useState } from "react";
import {
    Col,
    InputGroup,
    Button,
    Dropdown,
    FormControl,
} from "react-bootstrap";
import { SearchAndSortDataContext } from "../../contexts/project2/SearchAndSortDataContext";
export default function Control() {
    const [type, setType] = useState(1);
    const [inputValue, setInputValue] = useState("");
    const { setKey, sort, setSort } = useContext(SearchAndSortDataContext);

    const handleSearchInput = (e) => {
        setInputValue(e.target.value);
        if (e.target.value === "") setKey("");
    };
    const handleSubmitSearchBtn = () => {
        setKey(inputValue);
    };
    const handleClickSortBtn = (type, sortBy, sortValue) => {
        setType(type);
        setSort({
            sortBy,
            sortValue,
        });
    };
    return (
        <>
            <Col lg={6}>
                <InputGroup className="mb-3">
                    <FormControl onChange={handleSearchInput} />
                    <Button variant="primary" onClick={handleSubmitSearchBtn}>
                        Search
                    </Button>
                </InputGroup>
            </Col>
            <Col>
                <Dropdown>
                    <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="primary"
                    >
                        Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item
                            role="button"
                            className={type === 1 ? "active" : ""}
                            onClick={() => handleClickSortBtn(1, "name", 1)}
                        >
                            Name A-Z
                        </Dropdown.Item>
                        <Dropdown.Item
                            role="button"
                            className={type === 2 ? "active" : ""}
                            onClick={() => handleClickSortBtn(2, "name", -1)}
                        >
                            Name Z-A
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item
                            role="button"
                            className={type === 3 ? "active" : ""}
                            onClick={() => handleClickSortBtn(3, "status", 1)}
                        >
                            Hide Status
                        </Dropdown.Item>
                        <Dropdown.Item
                            role="button"
                            className={type === 4 ? "active" : ""}
                            onClick={() => handleClickSortBtn(4, "status", -1)}
                        >
                            Active Status
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </>
    );
}
