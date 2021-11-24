import {IChosenItem, ICompleteItem, IDeleteItem, IFetchTodo, IPatchItem} from "./interfaces";
const DEF_URL = 'https://ts-todo-app-b3563-default-rtdb.europe-west1.firebasedatabase.app/'

export const getAllTodos = async () => await Fetch('todos.json',{
    method: 'GET',
})
export const getTodo = async (id: string | number) => await Fetch(`todos/${id}.json`,{
    method: 'GET',
})
export const patchTodo = async (id: string | number, item: IPatchItem) => await Fetch(`todos/${id}.json`,{
    method: 'PATCH',
    body: item
})
export const deleteTodo = async (id: string | number) => await Fetch(`todos/${id}.json`,{
    method: 'DELETE',
})
export const setToDeleteBasketTodo = async (id: string | number, item: IDeleteItem) => await Fetch(`todos/${id}.json`,{
    method: 'PATCH',
    body: item
})
export const addTodo = async (todo: IFetchTodo) => await Fetch('todos.json',{
    method: 'POST',
    body: todo
})
export const chosenTodo = async (id: number | string,item: IChosenItem) => await Fetch(`todos/${id}.json`,{
    method: 'PATCH',
    body: item
})
export const completeTodo = async (id: number | string,item: ICompleteItem) => await Fetch(`todos/${id}.json`,{
    method: 'PATCH',
    body: item
})


type HttpOptions = {
    method: string,
    body? : any
}

const Fetch = (path:string, options: HttpOptions): Promise<any> => {
    if (options.method !== 'GET' && options.method !== 'DELETE') {
        options.body = JSON.stringify(options.body)
    }
    const promise = new Promise((resolve, reject) => {
        fetch(`${DEF_URL}${path}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        })
            .then(response => {
                if (response.ok) {
                        resolve(response.json())
                } else {
                    reject(response)
                }
            })
            .catch(err => reject(err))
    })
    return promise
}