import {actionTypes} from "../store/types";

export interface ITodoItemProps {
    todo: ITodoElem,
    refreshData: () => void,
}
export interface ITodoListProps {
    edit: boolean
}
export interface IReduxState {
    todos: ITodoElem[],
    loading: boolean
}
export interface IReduxActionSetAllTodos {
    type: actionTypes.SET_ALL_TODOS,
    payload: any
}
export interface IReduxActionAddTodo {
    type: actionTypes.ADD_TODO,
    payload: any
}
export interface IReduxActionChangeLoading {
    type: actionTypes.CHANGE_LOADING,
    payload: boolean
}
export interface IReduxActionDeleteTodo {
    type: actionTypes.DELETE_TODO,
    payload: any
}
export interface IReduxActionEditTodo {
    type: actionTypes.EDIT_TODO,
    payload: any
}
export interface IFetchTodo {
    title: string,
    date: string,
    deleted: boolean,
    chosen: boolean,
    complete: boolean
}
export interface ITodoElem {
    title: string,
    id: string | number,
    date: string,
    deleted: boolean,
    chosen: boolean,
    complete: boolean
}
export interface IChosenItem {
    chosen: boolean,
}
export interface IDeleteItem {
    deleted: boolean,
}
export interface IPatchItem {
    title: string,
}
export interface ICompleteItem {
    complete: boolean,
}

