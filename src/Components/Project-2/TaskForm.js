import React, { useContext, useEffect, useRef, useState } from "react";
import { Badge, FloatingLabel, Form, Button } from "react-bootstrap";
import { v4 } from "uuid";
import { TaskListContext } from "../../contexts/project2/TaskListContext";
import { FormContext } from "../../pages/Project2";

export default function TaskForm() {
    const [name, setName] = useState();
    const [status, setStatus] = useState();
    const { taskList, setTaskList } = useContext(TaskListContext);
    const { editMode, setEditMode, payload, displayForm, setDisplayForm } =
        useContext(FormContext);
    const inputRef = useRef();
    const selectRef = useRef();

    useEffect(() => {
        const item = taskList.find((item) => item.id === payload);
        if (item) {
            inputRef.current.value = item.name;
            setName(item.name);
        }
        if (!editMode) {
            inputRef.current.value = "";
            setName("");
        }
    }, [editMode]);

    useEffect(() => {
        const item = taskList.find((item) => item.id === payload);
        if (item) {
            if (displayForm && editMode) inputRef.current.value = item.name;
            else inputRef.current.value = "";
        }
    }, [displayForm]);

    const handleSubmit = () => {
        setTaskList([
            ...taskList,
            {
                id: v4(),
                name: name,
                isActive: status === "1" ? true : false,
            },
        ]);
        selectRef.current.value = "0";
        setStatus("0");
        setName("");
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    const handleEdit = (e) => {
        const item = taskList.find((item) => item.id === payload);
        const index = taskList.indexOf(item);

        item.name = name;
        item.isActive = status;
        taskList.splice(index, 1, item);

        setTaskList([...taskList]);
        setEditMode(false);
        setName("");
        setDisplayForm(false);
    };

    return (
        <div className="border rounded p-3 ">
            <Badge bg="warning" className="w-100 mb-4 p-2 fs-5">
                {editMode ? "Edit work" : "Add work"}
            </Badge>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3 "
            >
                <Form.Control
                    ref={inputRef}
                    type="text"
                    placeholder=""
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </FloatingLabel>
            <Form.Select
                ref={selectRef}
                className="mb-3"
                onChange={(e) => {
                    setStatus(e.target.value);
                }}
            >
                <option value="0">Hide</option>
                <option value="1">Active</option>
            </Form.Select>
            <div className="text-center">
                {editMode ? (
                    <Button variant="danger" onClick={handleEdit}>
                        Edit
                    </Button>
                ) : (
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                )}
                <Button
                    variant="danger"
                    onClick={() => {
                        inputRef.current.value = "";
                    }}
                    className="ms-2"
                >
                    Cancel
                </Button>{" "}
            </div>
        </div>
    );
}
