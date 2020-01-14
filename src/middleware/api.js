//import { v1 } from 'uuid'

export const CALL_API = 'Call API'

//const API_ROOT = 'http://localhost:4000/'

const callApi = (endpoint, body) => {    
  const fullUrl = endpoint;//(endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  let init = undefined;
  if (body)
    init = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
  return fetch(fullUrl, init).then(res => res.json());
};

export const api = store => next => action => {  
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { types, endpoint, body } = callAPI
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, body).then(
    response => next(actionWith({      
      type: successType,
      response
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Error'
    }))
  )  
}