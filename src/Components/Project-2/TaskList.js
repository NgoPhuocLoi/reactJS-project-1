import React, { useContext, useState } from "react";
import { Table, Form, Badge, Button } from "react-bootstrap";
import { SearchAndSortDataContext } from "../../contexts/project2/SearchAndSortDataContext";
import { TaskListContext } from "../../contexts/project2/TaskListContext";
import { FormContext } from "../../pages/Project2";
export default function TaskList() {
    const { taskList, setTaskList } = useContext(TaskListContext);
    const { editMode, setEditMode, setPayload, setDisplayForm } =
        useContext(FormContext);
    const { key, sort, type } = useContext(SearchAndSortDataContext);
    const [filter, setFilter] = useState({
        name: "",
        status: "-1",
    });
    let filteredList = [...taskList];

    const handleDeleteTask = (id) => {
        const newList = taskList.filter((item) => item.id != id);
        setTaskList(newList);
    };

    const handelFilterName = (e) => {
        setFilter({
            ...filter,
            name: e.target.value,
        });
    };

    const handleFilterStatus = (e) => {
        setFilter({
            ...filter,
            status: e.target.value,
        });
    };

    const onEdit = (id) => {
        setEditMode(true);
        setPayload(id);
        setDisplayForm(true);
    };

    const handleToggleStatus = (id, status) => {
        const item = taskList.find((item) => item.id === id);
        const index = taskList.indexOf(item);

        item.isActive = !status;
        taskList.splice(index, 1, item);

        setTaskList([...taskList]);
    };
    return (
        <>
            <Table bordered hover className="rounded">
                <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <Form.Control
                                type="text"
                                onChange={handelFilterName}
                            />
                        </td>
                        <td>
                            <Form.Select
                                className="mb-3"
                                onClick={handleFilterStatus}
                            >
                                <option value="-1">All</option>
                                <option value="0">Hide</option>
                                <option value="1">Active</option>
                            </Form.Select>
                        </td>
                        <td></td>
                    </tr>
                    {filteredList
                        .filter((item) =>
                            item.name
                                .toLowerCase()
                                .includes(filter.name.toLowerCase())
                        )
                        .filter((item) =>
                            filter.status === "-1"
                                ? true
                                : item.isActive ===
                                  (filter.status == "1" ? true : false)
                        )
                        .filter((item) =>
                            item.name.toLowerCase().includes(key.toLowerCase())
                        )
                        .sort((a, b) => {
                            if (sort.sortBy === "name") {
                                if (a.name.toLowerCase() > b.name.toLowerCase())
                                    return sort.sortValue;
                                else if (
                                    a.name.toLowerCase() < b.name.toLowerCase()
                                )
                                    return -sort.sortValue;
                                else return 0;
                            } else {
                                if (a.isActive > b.isActive)
                                    return sort.sortValue;
                                else if (a.isActive < b.isActive)
                                    return -sort.sortValue;
                                else return 0;
                            }
                        })
                        .map(({ id, name, isActive }, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>
                                    <div className="d-flex justify-content-center mt-2">
                                        <Badge
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                handleToggleStatus(id, isActive)
                                            }
                                            bg={isActive ? "primary" : "danger"}
                                        >
                                            {isActive ? "Active" : "Hide"}
                                        </Badge>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <Button
                                            variant="warning"
                                            onClick={() => onEdit(id)}
                                        >
                                            Edit
                                        </Button>{" "}
                                        <Button
                                            variant="danger"
                                            className="ms-2"
                                            onClick={() => handleDeleteTask(id)}
                                        >
                                            Delete
                                        </Button>{" "}
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
}
