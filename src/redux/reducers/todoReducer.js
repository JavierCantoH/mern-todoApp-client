// toastify messages
import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
    // check action types and then update the state according to the action performed
    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data;
        case "ADD_TODO":
            // toastify messages notifications 
            toast.success("A todo was added...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.todo.data, ...state];
        case "UPDATE_TODO":
            // toastify messages notifications 
            toast.success("A todo was updated...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return state.map((todo) => 
                // checking if the updated todo from actions matches with the todo updated
                // maping array of todos
                // if it doesnt match just return the old todo and check the next one in the array til de id matches
                todo._id === action.todo.data._id ? action.todo.data : todo
            )
        case "CHECK_TODO":
            // toastify messages notifications 
            toast.success("A todo status was changed...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return state.map((todo) => 
                // checking if the updated todo from actions matches with the todo updated
                // maping array of todos
                // if it doesnt match just return the old todo and check the next one in the array til de id matches
                todo._id === action.todo.data._id ? action.todo.data : todo
            )
        case "DELETE_TODO":
            // toastify messages notifications 
            toast.success("A todo was deleted...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            // filter our todos and exclude the one we just deleted
            return state.filter((todo) => todo._id !== action.id);
        default:
            return state;
    }
};
  
export default todoReducer;