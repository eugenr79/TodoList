import todoReducer from './todo'
import descReducer from './desc'
import { initialState } from '../state'

const reducers= [
  todoReducer,
  descReducer
];

export default function rootReducer(state = initialState, action) {  
  return reducers.reduce((accumulator, current) => current(accumulator, action), state);
}

