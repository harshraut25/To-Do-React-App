import React from "react";

class ToDoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos?.length > 0 && 
          todos.map((item) => 
          <>
            <h1>{item.value} </h1>
            <button onClick= {() => this.props.deleteTodo(item.id)}>Delete</button>
          </>
        )}
      </div>
    );
  }
}

export default ToDoList;
