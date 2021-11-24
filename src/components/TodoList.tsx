import React, {useEffect, useRef, useState} from "react";
import {addTodo, getTodo, patchTodo} from "../utils/api";
import {useDispatch} from "react-redux";
import {add_todo} from "../store/actions";
import {IFetchTodo, ITodoListProps} from "../utils/interfaces";
import { useNavigate, useParams} from "react-router-dom";


export const TodoList: React.FC<ITodoListProps> = ({edit}) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>('')
    const navigate = useNavigate()
    const {id} = useParams()
    const input = useRef<HTMLInputElement>(null)

    const postTodo = async () : Promise<any> => {
        const data : IFetchTodo= {
            title,
            date: new Date().toString(),
            deleted: false,
            chosen: false,
            complete: false
        }
        try {
            const response = await addTodo(data)
            dispatch(add_todo({
                ...data,
                id: response.name
            }))
            setTitle('')
        } catch (e) {
            alert(e)
        }
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        setTitle(e.target.value)
    }
    const onSubmitHandler = (e : React.FormEvent<HTMLFormElement>) : void=> {
        e.preventDefault()
        title.trim() && postTodo()
    }
    useEffect(() => {
        if (edit) {
            getTodo(id || '').then(todo => {
                if(todo) {
                    input.current!.focus()
                    setTitle(todo.title)
                } else {navigate('/')}
            })
        }
    },[])
    const saveTodoHandler = (e : React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        patchTodo(id || '',{title}).then(_ => navigate('/'))
    }
    if (edit) {
        return (
            <div className={'todo_wrapper mT-4'}>
                <div className="row">
                    <form className="col s10 m12" onSubmit={saveTodoHandler}>
                        <div className="row">
                            <div className="input-field col s11">
                                <i className="material-icons prefix">create</i>
                                <input id="icon_telephone" type="tel" className="validate" value={title} onChange={changeHandler} ref={input}/>
                                <label htmlFor="icon_telephone">Edit Todo</label>
                                <a className={'submit-a'}>
                                    <i role={'button'} className="material-icons prefix">check</i>
                                    <button type={'submit'}>b</button>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className={'todo_wrapper'}>
            <div className="row">
                <form className="col s10 m12" onSubmit={onSubmitHandler}>
                    <div className="row">

                            <div className="input-field col s11">
                                <i className="material-icons prefix">create</i>
                                <input id="icon_telephone" type="tel" className="validate" value={title} onChange={changeHandler}/>
                                <label htmlFor="icon_telephone">New Todo</label>
                            </div>
                        <div className="input-field col s1">
                            <button type={'submit'} className="btn-floating pulse btn-large waves-effect waves-light indigo">
                                <i className="material-icons">add</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}