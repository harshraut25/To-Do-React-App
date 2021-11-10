import "./styles.css";
import React from "react";
import { FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./Components/ToDoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: ""
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      textValue: e.target.value
    });
  }

  addToDo = () => {
    console.log("button clicked");
    const { todos, textValue } = this.state;
    this.setState({
      todos: [...todos, { id: todos.length + 1, value: textValue }],
      textValue: ""
    });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((item) => item.id === id);

    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  };

  render() {
    //console.log(this.state.todos);
    const { todos, textValue } = this.state;

    return (
      <React.Fragment>
        <div className="d-flex">
          <FormControl
            type="text"
            value={textValue}
            onChange={this.handleChange.bind(this)}
          />
          <Button onClick={this.addToDo}>Add Task</Button>
        </div>
        <ToDoList todos={todos} deleteTodo={this.deleteTodo} />

        <ToDoList />
      </React.Fragment>
    );
  }
}

export default App;
