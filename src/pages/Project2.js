import React, { useState, createContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TaskForm, Control, TaskList } from "../Components/Project-2";
import SearchAndSortDataProvider from "../contexts/project2/SearchAndSortDataContext";
import TaskListProvider from "../contexts/project2/TaskListContext";

export const FormContext = createContext();
export default function Project2() {
    const [displayForm, setDisplayForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [payload, setPayload] = useState();
    const data = {
        editMode,
        setEditMode,
        payload,
        setPayload,
        displayForm,
        setDisplayForm,
    };

    const toggleDisplayForm = () => {
        setDisplayForm(!displayForm);
        setEditMode(false);
    };
    const onAddJob = () => {
        setEditMode(false);
    };
    return (
        <Container>
            <Row>
                <h1 className="p-2 text-center">Workflow Management</h1>
                <hr />
            </Row>
            <TaskListProvider>
                <FormContext.Provider value={data}>
                    <Row>
                        <Col lg={4}>{displayForm ? <TaskForm /> : ""}</Col>
                        <Col lg={displayForm ? 8 : 12}>
                            <Button
                                variant={displayForm ? "danger" : "primary "}
                                onClick={toggleDisplayForm}
                            >
                                {displayForm ? "Close" : "Add job"}
                            </Button>
                            {editMode ? (
                                <Button
                                    variant="primary"
                                    className="ms-2"
                                    onClick={onAddJob}
                                >
                                    Add job
                                </Button>
                            ) : (
                                ""
                            )}
                            <SearchAndSortDataProvider>
                                <Row className="mt-3">
                                    <Control />
                                </Row>
                                <Row>
                                    <Col>
                                        <TaskList />
                                    </Col>
                                </Row>
                            </SearchAndSortDataProvider>
                        </Col>
                    </Row>
                </FormContext.Provider>
            </TaskListProvider>
        </Container>
    );
}
