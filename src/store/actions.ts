import {IReduxActionAddTodo, IReduxActionChangeLoading, IReduxActionSetAllTodos, ITodoElem} from "../utils/interfaces";
import {actionTypes} from "./types";

export const set_all_todos = ( data : ITodoElem[]) : IReduxActionSetAllTodos => ({
    type: actionTypes.SET_ALL_TODOS,
    payload: data
})
export const add_todo = ( data : ITodoElem) : IReduxActionAddTodo => ({
    type: actionTypes.ADD_TODO,
   payload: data
})
export const change_loading = ( loading : boolean) : IReduxActionChangeLoading => ({
    type: actionTypes.CHANGE_LOADING,
    payload: loading
})