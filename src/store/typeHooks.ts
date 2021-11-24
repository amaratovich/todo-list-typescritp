import {useSelector,TypedUseSelectorHook} from "react-redux";
import {rootTypeReducer} from "./reducer";

export const useTypeSelector : TypedUseSelectorHook<rootTypeReducer> = useSelector