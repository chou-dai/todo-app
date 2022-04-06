import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


var dt = new Date();
var month = dt.getMonth()+1;
var date = dt.getDate();
var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var day = week[dt.getDay()];

function TodoList(){

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return(
    <div className="todo-app">
      <h1>{month}/{date} ({day})&nbsp;&nbsp;&nbsp;TodoList</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;