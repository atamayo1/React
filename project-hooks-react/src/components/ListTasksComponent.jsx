import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

export const ListTasksComponent = () => {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const addTask = (event) => {
        event.preventDefault();
        if (task === '') return;
        const newTask = {
            id: new Date().getTime(),
            name: task,
            finished: false
        };
        const action = {
            type: '[TASKS] ADD TASK',
            payload: newTask
        }
        dispatch(action);
    }

    const endTask = (id) => {
        console.log(id)
        const action = {
            type: '[TASKS] FINISH TASK',
            payload: id
        }
        dispatch(action);
    };

    const deleteTask = (id) => {
        console.log(id)
        const action = {
            type: '[TASKS] DELETE TASK',
            payload: id
        }
        dispatch(action);
    };

    const deleteTasks = () => {
        console.log('Delete all tasks')
        const action = {
            type: '[TASKS] DELETE TASKS',
            payload: null
        }
        dispatch(action);
    }

    const { task, onInputChange } = useForm({ task: '' });
    // const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <>
            <h1>List Tasks</h1>
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Add new task</label>
                    <input type="text" className="form-control" id="task" name="task" onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
                <button type="button" className="btn btn-danger mx-2" onClick={deleteTasks}>Delete all</button>
            </form>
            <hr />
            <ul className="list-group">
                {
                    tasks.map((task) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
                                <span>{task.name}</span>
                                <div>
                                    <input type="checkbox" value={task.finished} onChange={() => endTask(task.id)} />
                                    <button className="btn btn-danger m-2" onClick={() => deleteTask(task.id)}>Delete</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
