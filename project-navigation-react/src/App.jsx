import React from 'react'
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './routes/HomeScreen'
import { AboutScreen } from './routes/AboutScreen'
import { ContactScreen } from './routes/ContactScreen'

export const App = () => {
    return (
        <>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<HomeScreen />}></Route>
                <Route path="/about" element={<AboutScreen />}></Route>
                <Route path="/contact" element={<ContactScreen />}></Route>
                <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
        </>
    )
}
