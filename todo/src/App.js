import React from 'react';
import TodoList from './components/todoList';
import styles from './components/styles.css';
import TodoForm from './components/todoForm';

const taskList = [
  {
    task: 'Clean the kitchen',
    completed: false,
    id: '1'
  },
  {
    task: 'Organize comic collection',
    completed: false,
    id: '2'
  },
  {
    task: 'Do laundry',
    completed: false,
    id: '3'
  },
  {
    task: 'Take out trash',
    completed: false,
    id: '4'
  },
  {
    task: 'Clean the counter',
    completed: false,
    id: '5'
  },
]

class App extends React.Component {

constructor() {
  super();
  this.state = {
    taskList
  }
}

toggleTodo = todoId => {
  this.setState({
    taskList: this.state.taskList.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
    })
  });
};

addTodo = (todo) => {
  const newTodo = {
    task: todo,
    id: Date.now(),
    completed: false
  };
  this.setState({
    taskList: [...this.state.taskList, newTodo]
  })
};

clearTodo = e => {
  e.preventDefault();
  this.setState({
    taskList: this.state.taskList.filter(todo => !todo.completed)
  })
}

render() {
  return (
<div className='App'>
        <div className="header">
          <h2>My Todo App!</h2>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList 
          taskList={this.state.taskList}
          toggleTodo={this.toggleTodo}
          clearTodo={this.clearTodo}
          />
      </div>
    );
  }
}
export default App;