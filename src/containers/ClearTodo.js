import React from 'react';
import * as Redux  from "react-redux";
import {clearTodo} from "../actions"


function Presenter({
  clear  
}) {
  return (
    <form onSubmit={e=>{
      e.preventDefault();
      clear();
    }}>
      <button type="submit">Clear</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => dispatch(clearTodo()),    
  }
};


export const ClearTodo = Redux.connect(null, mapDispatchToProps)(Presenter);
