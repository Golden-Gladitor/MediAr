import React from 'react';
import { publicRoute } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

    const getPublicRoutes = publicRoute.map(route => <Route
        key={route.path}
        path={route.path}
        element={route.component}
    />);

    return (
        <BrowserRouter>
            <Routes>
                {getPublicRoutes}
            </Routes>
        </BrowserRouter>
    )
};