import React from "react";

const TodoListItem = props => {
  console.log(props)
  
  return (
    <div>
      <span className="name">
        <span>{props.task.title}</span>
      </span>
      <span className="actions">
        <span>
          <button>Edit</button>
          <button onClick={props.handleRemoveListItem}>Delete</button>
        </span>
      </span>
    </div>
  )
}

export default TodoListItem