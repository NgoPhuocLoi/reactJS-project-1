import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

export default function TaskListProvider({ children }) {
    const [taskList, setTaskList] = useState([]);
    const taskListData = {
        taskList,
        setTaskList,
    };
    return (
        <TaskListContext.Provider value={taskListData}>
            {children}
        </TaskListContext.Provider>
    );
}
