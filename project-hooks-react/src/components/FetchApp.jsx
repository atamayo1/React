import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const FetchApp = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data, isLoading, errors } = useFetch(url);

    if (isLoading) return <h4>Cargando...</h4>;
    if (!isLoading && errors) return <h4>Ha ocurrido un error: {errors}</h4>

    return (
        <>
            <h2>List de Usuarios:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => {
                            return <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
