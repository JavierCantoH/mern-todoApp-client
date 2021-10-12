// useEffect is a react hook called every time our component renders, once it is called, we are able to dispatch our action creator from there
import React, { useEffect } from 'react';
// material ui components
import { Typography } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// import single todo
import Todo from "./Todo";
// dispatch: redux hook, useSelector: redux hook for enebale us to select a piece of state from the redux store
import { useDispatch, useSelector } from 'react-redux';
// import action creators
import { getTodos } from '../../redux/actions/todoActions';


// using makeStyles
const useStyles = makeStyles((theme) => ({
    todosStyle: {
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
      },
}));

// props from parent Todos.jsx
const ListTodos = ({ setTodo }) => {
    // using the material ui styles
    const classes = useStyles();
    // using dispatch redux hook
    const dispatch = useDispatch();
    // select the state from the redux store
    const todos = useSelector((state) => state.todos)
    // use useEffect hook
    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch])

    return (
        <>
            <div className={classes.todosStyle}>
                <Typography variant="h5">
                    {/* if statement to check the existance fo todos */}
                    {todos.length > 0 ? "theTodos;" : "noTodosYet;"}
                </Typography>
                {/* if there exist todos, we map the array of todos */}
                { todos && todos.map((todo) => {
                    return(
                        // send todo to Todo.jsx as a prop
                        <Todo
                            todo={todo}
                            key={todo._id}
                            setTodo={setTodo}
                        />
                    );
                })}
        </div>
    </>
    );
}

export default ListTodos;