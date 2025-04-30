import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormApp = () => {
    const initialForm = {
        username: 'SergioCode',
        nickname: 'sergio',
        email: 'sergiocode@digitalhouse.com',
        password: '123456'
    }
    const { username, nickname, email, password, onInputChange } = useForm(initialForm);

    const handlSubmit = () => {
        event.preventDefault();
        console.log(username, nickname, email, password);
    }

    return (
        <>
            <form onSubmit={handlSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                        name="username"
                        type="text"
                        className="form-control"
                        id="userName"
                        placeholder="Enter Username"
                        onChange={onInputChange}
                        value={username}
                    />
                    <small id="userNameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="nickname">Nickname</label>
                    <input
                        name="nickname"
                        type="text"
                        className="form-control"
                        id="nickName"
                        placeholder="Enter Nickname"
                        onChange={onInputChange}
                        value={nickname}
                    />
                    <small id="nickNameeHelp" className="form-text text-muted">We'll never share your nickname with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={onInputChange}
                        value={email}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={onInputChange}
                        value={password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
