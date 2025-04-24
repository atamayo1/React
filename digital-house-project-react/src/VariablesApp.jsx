import PropTypes from 'prop-types'

export const VariablesApp = ({ title, subtitle }) => {
    return (
        <>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </>
    )
}

VariablesApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

VariablesApp.defaultProps = {
    title: 'Course from React',
    subtitle: 'Section from properties'
}