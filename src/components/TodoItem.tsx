import React, {Dispatch, useState} from "react";
import {ITodoItemProps} from "../utils/interfaces";
import {chosenTodo, completeTodo, deleteTodo, setToDeleteBasketTodo} from "../utils/api";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Action} from "redux";
import {change_loading} from "../store/actions";
import {useTypeSelector} from "../store/typeHooks";
import {Loader, SmallLoader} from "./Loader";

export const TodoItem: React.FC<ITodoItemProps> = ({todo,refreshData}) => {
    const [deleteIconLoad, setDeleteIconLoad] = useState<boolean>(false)
    const [setBasketDeleteIcon, setSetBasketDeleteIcon] = useState<boolean>(false)
    const [bookmarkIconLoad, setBookmarkIconLoad] = useState<boolean>(false)
    const [checkedIconLoad, setCheckedIconLoad] = useState<boolean>(false)
    const dispatch = useDispatch<Dispatch<Action>>()
    const {loading} = useTypeSelector(state => state)

    const deleteTodoHandler = async (id : number | string)  => {
        setDeleteIconLoad(true)
        await deleteTodo(id)
        setDeleteIconLoad(false)
        refreshData()
    }
    const setToDeleteBasketHandler = async (id : number | string, deletedBool: boolean)  => {
        setSetBasketDeleteIcon(true)
        await setToDeleteBasketTodo(id,{deleted: !deletedBool})
        setSetBasketDeleteIcon(false)
        refreshData()
    }
    const chosenTodoHandler = async (id: string | number, chosenBool: boolean) => {
        setBookmarkIconLoad(true)
        await chosenTodo(id,{chosen: !chosenBool })
        setBookmarkIconLoad(false)
        refreshData()
    }
    const changeCompleteHandler = async (id: string | number, completeBool: boolean)  => {
        setCheckedIconLoad(true)
        await completeTodo(id,{complete: !completeBool })
        setCheckedIconLoad(false)
        refreshData()
    }
    const activeClasses = ['collection-item']
    if (todo.complete) {
        activeClasses.push('active indigo')
    }
    if (loading) {
        return <Loader/>
    }
    if (todo.deleted) {
        return (
            <li className="collection-item">
                <div>
                        {todo.title}
                    <a className="secondary-content">
                        {
                            deleteIconLoad
                                ?
                                <SmallLoader/>
                                :
                                <i className="material-icons" onClick={() => deleteTodoHandler(todo.id)}>delete</i>
                        }
                    </a>
                    <a className="secondary-content">
                        {
                            setBasketDeleteIcon
                                ?
                                <SmallLoader/>
                                :
                                <i className="material-icons" onClick={() => setToDeleteBasketHandler(todo.id, todo.deleted)}>{'reply'}</i>
                        }
                    </a>

                </div>
            </li>
        )
    }
    return (
            <li className={activeClasses.join(' ')}>
                <div>
                    <a>
                        {
                            checkedIconLoad
                                ?
                                <SmallLoader/>
                                :<>
                                <input type="checkbox" className="filled-in" checked={todo.complete}/>
                                <span style={{color: "transparent"}} onClick={() => changeCompleteHandler(todo.id, todo.complete)}>i</span>
                                </>
                                }

                    </a>
                    {todo.title}
                    <a className="secondary-content">
                        {
                            bookmarkIconLoad
                                ?
                                <SmallLoader/>
                                :
                                <i className="material-icons" onClick={() => chosenTodoHandler(todo.id, todo.chosen)}>{todo.chosen ? 'bookmark' : 'bookmark_border'}</i>
                        }
                    </a>
                    <a className="secondary-content">
                        {
                            deleteIconLoad
                                ?
                                <SmallLoader/>
                                :
                                <i className="material-icons" onClick={() => setToDeleteBasketHandler(todo.id, todo.deleted)}>{'delete'}</i>
                        }

                    </a>
                    <Link to={`/todo/${todo.id}`} className="secondary-content">
                        <i className="material-icons">create</i>
                    </Link>
                </div>
            </li>
    )
}