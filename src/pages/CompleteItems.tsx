import React, {Dispatch, useEffect} from "react";
import {useTypeSelector} from "../store/typeHooks";
import {useDispatch} from "react-redux";
import {getAllTodos} from "../utils/api";
import {IReduxState, ITodoElem} from "../utils/interfaces";
import {set_all_todos} from "../store/actions";
import {TodoItem} from "../components/TodoItem";
import {Action} from "redux";

export const CompleteItems: React.FC = () => {
    const {todos} = useTypeSelector<IReduxState>(state => state)

    const dispatch = useDispatch<Dispatch<Action>>()
    const getAllTodosHandler = async () : Promise<any> => {
        try {
            const response = await getAllTodos()
            if(response) {
                const key = Object.keys(response)
                const data : ITodoElem[] = []
                key.map(key => {
                    data.push({...response[key], id: key})
                })
                dispatch(set_all_todos(data))
            } else {
                dispatch(set_all_todos([]))
            }

        } catch (e) {
            console.log(e, 'e')
        }
    }
    useEffect(() => {
        getAllTodosHandler()
    },[])
    const renderItemHandler = () => {
        const elements :ITodoElem[] = todos.filter(i => i.complete && !i.deleted)
        if (!elements.length) {
            return <div className={'center'}>
                <img src="https://cdn.dribbble.com/users/634336/screenshots/2246883/media/7beefb96feac302ee313cf510fca4577.png?compress=1&resize=800x600" alt=""/>
            </div>
        }
        return elements.map(el => (
            <TodoItem key={el.id} todo={el} refreshData={getAllTodosHandler}/>
        ))
    }
    return (
        <>
            <ul className="collection col s12 m8 offset-m2 l6 offset-l3 mB-5 mT-4" >
                {renderItemHandler()}
            </ul>
        </>
    )
}