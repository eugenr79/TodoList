import *  as ActionTypes from "../actions";

const impl = (state, action) => {
    switch (action.type) {      
      case ActionTypes.TODOLIST_REQUEST:
        return {...state, loading:true, loaded:false } 
      case ActionTypes.TODOLIST_SUCCESS:
        return {...state, loading:false, loaded:true, todos:action.response } 
      case ActionTypes.TODOLIST_FAILURE:
        return {...state, loading:false, loaded:true, error:action.error }           
      
      case ActionTypes.TODOADD_REQUEST:
        return {...state, loading:true, loaded:false } 
      case ActionTypes.TODOADD_FAILURE:
        return {...state, loading:false, loaded:true, error:action.error }           
      case ActionTypes.TODOADD_SUCCESS:
        if (action.response && action.response.text)
          return {...state, 
            todos:[
              ...state.todos, action.response
            ]}                
        else 
          return state;

      case ActionTypes.TODOREMOVE_REQUEST:
        return {...state, loading:true, loaded:false } 
      case ActionTypes.TODOREMOVE_FAILURE:
        return {...state, loading:false, loaded:true, error:action.error }           
      case ActionTypes.TODOREMOVE_SUCCESS:
        if (action.response && action.response.length > 0)
        {          
          const id = action.response;
          const newTodos = state.todos.filter(function(e) { return e._id !== id });            
          return {...state, todos:newTodos}                
        }                  
        else 
          return state;
      
      case ActionTypes.TODOCLEAR_REQUEST:
        return {...state, loading:true, loaded:false } 
      case ActionTypes.TODOCLEAR_FAILURE:
        return {...state, loading:false, loaded:true, error:action.error }           
      case ActionTypes.TODOCLEAR_SUCCESS:
        if (action.response)
          return {...state, 
            todos:[]}
        else 
          return state;

      case ActionTypes.TODO_SELECT:
        return {...state, 
          selectedTodo:action.payload}

      default:
        return state
    }
  }
export default impl