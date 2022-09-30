import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getTodo } from '../actions';

const App = () => {
  const emps = useSelector((state) => state.employee);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, [todos]);

  return (
    <div className="App">
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: 'ADD_EMPLOYEE',
              payload: { name: 'Mahavir', dept: 'Senior S/W Engineer' },
            });
          }}
        >
          + Add
        </button>
        <h1>Employee List</h1>
        <table border="1">
          <tr>
            <th>ID.</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Action</th>
          </tr>
          {emps.map((emp, index) => (
            <tr key={emp.id + emp.name + index}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.dept}</td>
              <td style={{ textAlign: 'center' }}>
                <a
                  onClick={() => {
                    dispatch({
                      type: 'REMOVE_EMPLOYEE',
                      id: emp.id,
                    });
                  }}
                >
                  X
                </a>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <h1>Todo List</h1>
        <table border="1">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
          {todos.todos.map((todo, index) => (
            <tr key={todo.id + todo.title + index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed}</td>
              <td style={{ textAlign: 'center' }}>
                <a>X</a>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default App;
