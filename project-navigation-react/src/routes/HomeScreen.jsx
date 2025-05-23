import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export const HomeScreen = () => {
    const { user } = useContext(UserContext);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Technology</th>
                    <th scope="col">Email</th>
                    <th scope="col">Network</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{user.name}</th>
                    <td>{user.technology}</td>
                    <td>{user.email}</td>
                    <td>{user.network}</td>
                </tr>
            </tbody>
        </table>
    )
}
