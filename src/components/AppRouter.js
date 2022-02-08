import React from "react";

import {Route, Routes, Navigate} from 'react-router-dom'
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";

function AppRouter() {
    const {user} = React.useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRouter;
