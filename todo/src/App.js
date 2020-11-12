import React from 'react';
import TodoList from './components/todoList';
import styles from './components/styles.css';
import TodoForm from './components/todoForm';

const taskList = [
  {
    task: 'Clean the kitchen',
    id: '1',
    completed: false
  },
  {
    task: 'Organize comic collection',
    id: '2',
    completed: false
  },
  {
    task: 'do laundry',
    id: '3',
    completed: false
  },
  {
    task: 'Take out trash',
    id: '4',
    completed: false
  },
  {
    task: 'Clean the counter',
    id: '5',
    completed: false
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