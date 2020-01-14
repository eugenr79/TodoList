import React from 'react';


export function EditBox({
  add, remove, clear
}) {
  let input;  
  return (
    <form onSubmit={e=>{
      e.preventDefault();
    }}>
      <textarea ref={$=>input=$}/>
      <button onClick={() => add(input.value)}>Add</button>
      <button onClick={() => remove()}>Remove</button>
      <button onClick={() => clear()}>Clear</button>
    </form>
  );
}

