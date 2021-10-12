// impor axios
import axios from "axios";
// import url end point to connect server side api and headers function for making sure that only users login (with token) can use the todos operations
import { url, setHeaders } from "../../api";
// toastify messages
import { toast } from "react-toastify";

// GETTING ALL TODOS action creator
export const getTodos = () => {
  // using redux thunk 
  return (dispatch) => {
    // perform an async action using axios
    axios
    // get parameter (endpoint)
    .get(`${url}/todos`, setHeaders())
    // .then is our async function
    // when is recieed in the backend it will be added to the data base 
    //and then we get a respnse which is the todo that was added to the db
    .then((todos) => {
      dispatch({
          // ADD_TODO from reducers
        type: "GET_TODOS",
        todos,
      });
    })
    .catch((error) => {
      console.log(error.response);
    });
  };
};


// ADDING A NEW TODO action creator
export const addTodo = (newTodo) => {
    // using redux thunk accessing the store
    return (dispatch, getState) => {
      const author = getState().auth.name;
      const uid = getState().auth._id;
        // perform an async action using axios
      axios
      // post parameter (endpoint, body of our req)
        .post(`${url}/todos`, { ...newTodo, author, uid }, setHeaders())
        // .then is our async function
        // when is recieed in the backend it will be added to the data base 
        //and then we get a respnse which is the todo that was added to the db
        .then((todo) => {
          dispatch({
              // ADD_TODO from reducers
            type: "ADD_TODO",
            todo,
          });
        })
        .catch((error) => {
          console.log(error.response);
          // toastify messages notifications using optional changing operator
          toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    };
};


// UPDATING A NEW TODO action creator
export const updateTodo = (updatedTodo, id) => {
  // using redux thunk 
  return (dispatch) => {
    // perform an async action using axios
    axios
    // put parameter (endpoint, body of our req)
      .put(`${url}/todos/${id}`, updatedTodo, setHeaders())
      // .then is our async function
      // when is recieed in the backend it will be added to the data base 
      //and then we get a respnse which is the todo that was added to the db
      .then((todo) => {
        dispatch({
            // ADD_TODO from reducers
          type: "UPDATE_TODO",
          todo
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

// CHECK A TODO  AS COMPLETE OR NOT action creator
export const checkTodo = (id) => {
  // using redux thunk 
  return (dispatch) => {
    // perform an async action using axios
    axios
    // patch parameter (endpoint, empty obj not used in the backend)
      .patch(`${url}/todos/${id}`, {}, setHeaders())
      // .then is our async function
      // when is recieed in the backend it will be added to the data base 
      //and then we get a respnse which is the todo that was added to the db
      .then((todo) => {
        dispatch({
            // ADD_TODO from reducers
          type: "CHECK_TODO",
          todo
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

// DELETE A TODO  AS COMPLETE OR NOT action creator
export const deleteTodo = (id) => {
  // using redux thunk 
  return (dispatch) => {
    // perform an async action using axios
    axios
    // delete parameter (endpoint)
      .delete(`${url}/todos/${id}`, setHeaders())
      // .then is our async function
      // when is recieed in the backend it will be added to the data base 
      //and then we get a respnse which is the todo that was added to the db
      .then(() => {
        dispatch({
            // ADD_TODO from reducers
          type: "DELETE_TODO",
          id
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};