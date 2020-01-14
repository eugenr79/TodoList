import React, { useEffect } from 'react'
import * as Redux  from "react-redux";

import { AgGridReact } from '@ag-grid-community/react';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

const TodoListPresenter = (props)=>{
  const { loading, loaded, todos, loadData, onSelect } = props;
  const shouldGetData = !loading && !loaded;    
  useEffect(() => {  
    if (shouldGetData)  
      loadData();
  });  
  if (shouldGetData)
    return <p>Loading...</p>    
  const onSelectionChanged = (event)=>{    
    if (!onSelect)
      return;
    const selectedRows = event.api.getSelectedRows();
    if (!selectedRows || selectedRows.length === 0)
      return;
    const todo = selectedRows[0];
    onSelect(todo.id);
  }
  const rows = todos.map((todo, idx)=>  ({id:todo._id, text:todo.text}));
  return <div className="ag-theme-balham" style={ {height: '200px', width: '600px'} }>
      <AgGridReact
          columnDefs={[
            { field: 'text', headerName: 'Text' },      
          ]}          
          rowSelection='single'
          onSelectionChanged={onSelectionChanged}
          rowData={rows}
          modules={AllCommunityModules}>
      </AgGridReact>
    </div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    loaded: state.loaded,
    error: state.error,
    todos: state.todos,
    loadData: ownProps.load,
    onSelect: ownProps.onSelect,
  }
};

export const TodoList = Redux.connect(mapStateToProps)(TodoListPresenter);

