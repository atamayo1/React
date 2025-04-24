import PropTypes from 'prop-types'

export const Task = ({ name, isDone }) => {
    return (
        <li>
            {name} {isDone ? '✅' : '⛔'}
        </li>
    )
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
}