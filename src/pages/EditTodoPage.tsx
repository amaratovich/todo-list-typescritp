import React from "react";
import {TodoList} from "../components/TodoList";

export const EditTodoPage: React.FC = () => {
    return (
        <>
           <TodoList edit={true}/>
        </>
    )
}