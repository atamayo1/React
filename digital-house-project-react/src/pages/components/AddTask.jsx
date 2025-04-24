import PropTypes from "prop-types";
import { useState } from "react";

export const AddTask = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            addTask(inputValue)
        }
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="inputVal"
                placeholder="Enter new task"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired
}
