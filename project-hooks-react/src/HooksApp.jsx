import React from 'react'
import { CounterApp } from './components/CounterApp'
import { FormApp } from './components/FormApp'
import { FetchApp } from './components/FetchApp'

export const HooksApp = () => {
    return (
        <>
            <h1>App Hooks</h1>
            <button type="button" className="btn btn-warning">Warning</button>
            <hr />
            <CounterApp />
            <hr />
            <FormApp />
            <hr />
            <FetchApp />
        </>
    )
}
