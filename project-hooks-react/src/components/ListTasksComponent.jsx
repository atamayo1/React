export const ListTasksComponent = () => {
    const initialState = [
        { id: 1, name: 'Explain reducers', finished: false },
    ]

    const newTask = { id: 2, name: 'New explain reducers', finished: false };

    const addTask = {
        type: '[TASKS] ADD TASK',
        payload: newTask
    }
    /* 
       const taskEdited = { id: 1, name: 'Explain reducers', finished: false };
   
      const editTask = {
           type: '[TASKS] EDIT TASK',
           payload: taskEdited
       }
   
       const deleteTask = {
           type: '[TASKS] DELETE TASK',
       }
   
       const deleteTasks = {
           type: '[TASKS] DELETE TASKS',
       } */

    const taskReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[TASKS] ADD TASK':
                return [...state, action.payload];
            case '[TASKS] EDIT TASK':
                // return [...state, action.payload];
                break;
            case '[TASKS] DELETE TASK':
                // return [...state, action.payload];
                break;
            case '[TASKS] DELETE TASKS':
                return [];
            default:
                break;
        }
        return state;
    }

    console.log(taskReducer(initialState, addTask))

    return (
        <>
            <h1>List Tasks</h1>
            {JSON.stringify(taskReducer(initialState, addTask))}
        </>
    )
}
