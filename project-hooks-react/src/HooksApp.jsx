import React from 'react'
import { CounterApp } from './components/CounterApp'

export const HooksApp = () => {
    return (
        <>
            <h1>App Hooks</h1>
            <button type="button" className="btn btn-danger">Danger</button>
            <hr />
            <CounterApp />
        </>
    )
}
