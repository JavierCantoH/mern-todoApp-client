// use state hook for redux
import React, { useState } from 'react';
// add todo file
import AddTodo from "./AddTodo";
// list todos file
import ListTodos from "./ListTodos";
// for redirect user 
import { Redirect } from "react-router-dom";
// redux hooks
import { useSelector } from 'react-redux';

const Todos = () => {
    // RAISING THE STATE
    // Tdos.jsx is the parent of add todo and list todo, and todo.jsx is a child of list todos

    //load auth from state
    const auth = useSelector((state) => state.auth);

    // set up default state hook
    const [todo, setTodo] = useState({
        name: "",
        isComplete: false
    })

    // if a user is not sign in, redirect a page to the same page
    if (!auth._id) return <Redirect to="/signin" />;

    
    return(
        <div>
            {/* sending as props the state to add todo and list todos */}
            <AddTodo todo = { todo } setTodo = { setTodo }/>
            <ListTodos setTodo = { setTodo }/>
        </div>
    );
}

export default Todos;