import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm';
import { UserContext } from '../context/UserContext';

export const LoginScreen = () => {
    const { _user, setUser } = useContext(UserContext);
    const initialForm = {
        name: "",
        technology: "",
        email: "",
        network: "",
    }
    const { name, technology, email, network, onInputChange } = useForm(initialForm);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() == '' || technology.trim() == '' || email.trim() == '' || network.trim() == '') return;
        setUser({
            name, technology, email, network
        })
    }

    return (
        <form className='container m-5' onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    onChange={onInputChange}
                    value={name}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="technology">Technology</label>
                <input
                    name="technology"
                    type="text"
                    className="form-control"
                    id="technology"
                    placeholder="Enter Technology"
                    onChange={onInputChange}
                    value={technology}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    onChange={onInputChange}
                    value={email}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="network">Network</label>
                <input
                    name="network"
                    type="text"
                    className="form-control"
                    id="network"
                    placeholder="Enter Network"
                    onChange={onInputChange}
                    value={network}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
