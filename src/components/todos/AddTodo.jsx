import React from 'react';
// material ui components
import { TextField, Button } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// material ui icons
import { Send } from '@material-ui/icons';
// dispatch: redux hook
import { useDispatch } from 'react-redux';
// import action creators
import { addTodo, updateTodo } from '../../redux/actions/todoActions';

// using makeStyles
const useStyles = makeStyles({
    formStyle: {
      margin: "0px auto",
      padding: "30px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
      display: "flex",
      justifyContent: "space-between",
    },
    submitButton: {
        marginLeft: "20px",
    }
});
// props from parent Todos.jsx
const AddTodo = ({ todo, setTodo }) => {
    // using the material ui styles
    const classes = useStyles();
    // using dispatch redux hook
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        // prevent the page for refreshing when submiting form
        e.preventDefault();
        // checking if we are adding a new todo or updating an existing one
        if(todo._id){
            // if it exist we are updating the todo
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,    
                date: todo.date,
                author: todo.author,
                uid: todo.uid
            }
            // dispatch of updated todo from update todo action creator
            dispatch(updateTodo(updatedTodo, id));
        } else {
            // the todo does not exist so we create a new todo
            const newTodo = {
                ...todo,
                date: new Date()
            }
            // dispatch of new todo from add todo action creator 
            dispatch(addTodo(newTodo));
        }
        // when the function is done, reseting todo to default state
        setTodo({ 
            name: '', 
            isComplete: false
        });
    }
    

    return (
        <>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit = { handleSubmit }>
                <TextField
                    id="enter-todo"
                    label="enterToDo"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    // default value from state
                    value = {todo.name}
                    // on change event to update our value (e) for "event"
                    // ... spread operator to spread the properties of our todo
                    onChange = {(e) => setTodo({...todo, name: e.target.value})}
                />
                <Button variant="contained" color="primary" className = {classes.submitButton} type="submit">
                    <Send/>
                </Button>
            </form>
        </>
    );
}

export default AddTodo;