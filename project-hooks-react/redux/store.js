import { legacy_createStore as createStore } from 'redux';

const initialState = [
    { id: 1, name: 'Explain reducers', finished: false },
]

const taskReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TASKS] ADD TASK':
            return [...state, action.payload];
        case '[TASKS] FINISH TASK':
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        finished: !task.finished
                    }
                } else return task;
            })
        case '[TASKS] DELETE TASK':
            return state.filter(task => task.id !== action.payload);
        case '[TASKS] DELETE TASKS':
            return [];
        default:
            break;
    }
    return state;
}

export const store = createStore(taskReducer);