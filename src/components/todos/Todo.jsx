import React from 'react';
// material ui components
import { Typography, ButtonGroup, Button } from "@material-ui/core";
// material ui styling
import { makeStyles } from "@material-ui/core/styles";
// material ui icons
import { Create, Delete, CheckCircle } from '@material-ui/icons';
// date styling format
import moment from "moment";
// dispatch: redux hook
import { useDispatch } from 'react-redux';
// import action creators
import { checkTodo, deleteTodo } from '../../redux/actions/todoActions';

// using makeStyles
const useStyles = makeStyles({
    todoStyle: {
      margin: "20px auto",
      padding: "20px",
      border: "2px solid #bdbdbd",
      borderRadius: "9px",
      display: "flex",
      justifyContent: "space-between",
    },
    moreStyle: {
      color: "#8f8f8f",
    },
    isComplete: {
      color: "green",
    },
    checked: {
      textDecoration: "line-through",
    },
});
  
// props todo received from List todos
const Todo = ({ todo, setTodo }) => {
    // using the material ui styles
    const classes = useStyles();
    // using dispatch redux hook
    const dispatch = useDispatch();

    const handleUpdateClick = (id) => {
        setTodo(todo);
        // scroll at the top every time we click on this button
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const handleCheck = (id) => {
        dispatch(checkTodo(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    
    

    return (
        <>
            <div className={classes.todoStyle}>
                <div>
                    {/* conditionally render the line through the todo if is completed  */}
                    {todo.isComplete ? 
                        (<Typography variant="subtitle1" className={classes.checked}>
                            {todo.name}
                        </Typography>) : 
                        (<Typography variant="subtitle1">
                            {todo.name}
                        </Typography>)
                    }
                    <Typography variant="subtitle1">

                    </Typography>
                    <Typography variant="body2" className={classes.moreStyle}>
                        Author: Javier
                    </Typography>
                    <Typography variant="body2" className={classes.moreStyle}>
                        Added: {moment(todo.date).fromNow()}
                    </Typography>
                </div>
                <div>
                    <ButtonGroup
                        size="small"
                        aria-label="outlined primary button group"
                    >
                        {/* conditionally render the buttons  */}
                        {/* button for marking complete or incomplete todo */}
                        <Button 
                            onClick={() => handleCheck(todo._id)}>
                                {todo.isComplete ? (<CheckCircle className={classes.isComplete} />) : 
                                (<CheckCircle color="action" />)
                            }
                        </Button>
                        <Button onClick={ () => handleUpdateClick()}>
                        {/* button for editing todo */}
                            <Create color="primary" />
                        </Button>
                        <Button onClick={() => handleDelete(todo._id)}>
                        {/* button for deleting todo */}
                            <Delete color="secondary" />
                        </Button>
                    </ButtonGroup>
          
                </div>
            </div>
        </>
    );
}

export default Todo;