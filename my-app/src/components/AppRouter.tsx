import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";
import { AppRouterContainer } from "./styled/AppRouter";


function AppRouter() {
  return (
    <AppRouterContainer>
        <Routes>
            {publicRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element}/>
            )}    
        </Routes>
    </AppRouterContainer>
    
  )
}

export default AppRouter