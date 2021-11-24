import {
    IReduxActionAddTodo, IReduxActionChangeLoading,
    IReduxActionDeleteTodo,
    IReduxActionEditTodo,
    IReduxActionSetAllTodos,
    IReduxState
} from "../utils/interfaces";
import {actionTypes} from "./types";

const initialState : IReduxState= {
    todos: [],
    loading: false
}
type Action = IReduxActionAddTodo | IReduxActionDeleteTodo | IReduxActionEditTodo | IReduxActionSetAllTodos | IReduxActionChangeLoading

export const rootReducer = (state = initialState, action : Action) : IReduxState => {
    switch (action.type) {
        case actionTypes.SET_ALL_TODOS:
            return {
                ...state,
                todos :action.payload
            }
            break;
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos : [...state.todos,action.payload]
            }
            break;
        case actionTypes.CHANGE_LOADING:
            return {
                ...state,
                loading : action.payload
            }
            break;
        default:
            return state
        break;
    }
}
export type rootTypeReducer = ReturnType<typeof rootReducer>