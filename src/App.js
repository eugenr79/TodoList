import React from 'react';
import {bindActionCreators} from 'redux';
import * as Redux  from "react-redux";
import './App.css';
import {EditBox, TodoList} from "./containers"
import {loadTodo, addTodo, removeTodo, clearTodo, selectTodo} from "./actions"

const AppPresenter = (props)=>{  
  const {addTodo, clearTodo, removeTodo, loadTodo, selectTodo, selectedTodo} = props;
  const callRemove = ()=>{    
    if(selectedTodo !== undefined && selectedTodo.length > 0){
      removeTodo(selectedTodo);
    }
      
  };
  const onSelect = (id)=>{    
    selectTodo(id);
  };  
  return <div className="App">
      <EditBox add={addTodo} remove={callRemove} clear={clearTodo}/>
      <TodoList load={loadTodo} onSelect={onSelect}/>
    </div>
}

const mapDispatchToProps = (dispatch) => {  
  return bindActionCreators({
      loadTodo,
      addTodo,
      removeTodo,
      selectTodo,
      clearTodo
    }, dispatch)
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedTodo: state.selectedTodo
  }
};

export const App = Redux.connect(mapStateToProps, mapDispatchToProps)(AppPresenter);
