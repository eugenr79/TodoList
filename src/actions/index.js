
import { CALL_API } from '../middleware/api'

export const TODOADD_REQUEST = "TODOADD_REQUEST";
export const TODOADD_SUCCESS = "TODOADD_SUCCESS";
export const TODOADD_FAILURE = "TODOADD_FAILURE";

export const TODOREMOVE_REQUEST = "TODOREMOVE_REQUEST";
export const TODOREMOVE_SUCCESS = "TODOREMOVE_SUCCESS";
export const TODOREMOVE_FAILURE = "TODOREMOVE_FAILURE";

export const TODOCLEAR_REQUEST = "TODOCLEAR_REQUEST";
export const TODOCLEAR_SUCCESS = "TODOCLEAR_SUCCESS";
export const TODOCLEAR_FAILURE = "TODOCLEAR_FAILURE";

export const TODO_SELECT = "TODO_SELECT";

export const TODOLIST_REQUEST = 'TODOLIST_REQUEST'
export const TODOLIST_SUCCESS = 'TODOLIST_SUCCESS'
export const TODOLIST_FAILURE = 'TODOLIST_FAILURE'



export const loadTodo2 = ()=>dispatch=>(
    dispatch(
      {
        [CALL_API]: {
        types: [ TODOLIST_REQUEST, TODOLIST_SUCCESS, TODOLIST_FAILURE ],
        endpoint: `todos`,}
      }
    ));

export const loadTodo = ()=>(
    {
      [CALL_API]: {
      types: [ TODOLIST_REQUEST, TODOLIST_SUCCESS, TODOLIST_FAILURE ],
      endpoint: `todos`,}
    });

export const addTodo = (text)=>dispatch=>(
  dispatch(
    {
      [CALL_API]: {
        types: [ TODOADD_REQUEST, TODOADD_SUCCESS, TODOADD_FAILURE ],
        endpoint: `todos/add`,
        body: { text: text }
      }
    }
  ));

export const removeTodo = (id)=>dispatch=>(
  dispatch(
    {
      [CALL_API]: {
        types: [ TODOREMOVE_REQUEST, TODOREMOVE_SUCCESS, TODOREMOVE_FAILURE ],
        endpoint: `todos/remove`,
        body: { id: id }
      }
    }
  ));

  

export const clearTodo = ()=>dispatch=>(
  dispatch(
    {
      [CALL_API]: {
        types: [ TODOCLEAR_REQUEST, TODOCLEAR_SUCCESS, TODOCLEAR_FAILURE ],
        endpoint: `todos/clear`
      }
    }
  ));


export const selectTodo = (id)=>({
        type: TODO_SELECT,
        payload: id
      });

  
