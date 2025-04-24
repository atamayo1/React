import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";

export const TodoApp = () => {
    const arrayObjectos = [
        { id: 1, name: 'Intro to React', isDone: true },
        { id: 2, name: 'Vite', isDone: true },
        { id: 3, name: 'Variables', isDone: true },
        { id: 4, name: 'Map', isDone: false }
    ];
    const [array, setArray] = useState(arrayObjectos);

    const addTask = (newTaskName) => {
        const newTask = { id: array.length + 1, name: newTaskName, isDone: false }
        setArray([...array, newTask])
    }

    return (
        <>
            <AddTask addTask={addTask} />
            <ul>
                {
                    array.map((arr) => <Task key={arr.name} name={arr.name} isDone={arr.isDone}></Task>)
                }
            </ul>
        </>
    )
}
