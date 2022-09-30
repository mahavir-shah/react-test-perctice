import axios from 'axios';

// For Employee CRUD.
export const addEmployee = (data) => {
  return { type: 'ADD_EMPLOYEE', payload: data };
};
export const editEmployee = (data, id) => {
  return { type: 'EDIT_EMPLOYEE', payload: data, id: id };
};
export const removeEmployee = (id) => {
  return { type: 'REMOVE_EMPLOYEE', id: id };
};

const ADD_TODO_STARTED = 'ADD_TODO_STARTED';
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const addTodo = ({ title, userId }) => {
  return (dispatch) => {
    dispatch(addTodoStarted());
    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        userId,
        completed: false,
      })
      .then((res) => {
        console.log('data', res.data);
        dispatch(addTodoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const getTodo = () => {
  return (dispatch) => {
    dispatch(addTodoStarted());
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo,
  },
});

export const addTodoStarted = () => ({
  type: ADD_TODO_STARTED,
});

export const addTodoFailure = (error) => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error,
  },
});
