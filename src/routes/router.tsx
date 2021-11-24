import React from "react";
import {Routes,Route} from 'react-router-dom'
import {Home} from "../pages/Home";
import {NotFoundPage} from "../pages/404";
import {ChosenItemsPage} from "../pages/ChosenItemsPage";
import {DeletedItemsPage} from "../pages/DeletedItemsPage";
import {ActiveItemsPage} from "../pages/ActiveItemsPage";
import {EditTodoPage} from "../pages/EditTodoPage";
import {CompleteItems} from "../pages/CompleteItems";

export const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/todo/:id'} element={<EditTodoPage/>}/>
                <Route path={'/chosen_items'} element={<ChosenItemsPage />}/>
                <Route path={'/deleted_items'} element={<DeletedItemsPage />}/>
                <Route path={'/active_items'} element={<ActiveItemsPage />}/>
                <Route path={'/completed_items'} element={<CompleteItems />}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}