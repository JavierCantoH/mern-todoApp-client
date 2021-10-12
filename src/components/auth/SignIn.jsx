// use state hook for redux
import React, { useState } from 'react';
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// redux hooks
import { useDispatch, useSelector } from 'react-redux';
// import action creators
import { signIn } from '../../redux/actions/authActions';
// for redirect user when sign up
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
    formStyle: {
      margin: "0px auto",
      padding: "30px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
    },
    spacing: {
      marginTop: "20px",
    },
});

const SignIn = () => {
    const classes = useStyles();
    // using dispatch redux hook
    const dispatch = useDispatch();
    // set up default state hook
    const [creds, setCreds] = useState({
        email:"",
        password:"",
    });

    // select the state from the redux store
    const auth = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        // prevent the page for refreshing when submiting form
        e.preventDefault();
        // dispatch action creator and reset form values to default state
        dispatch(signIn(creds))
        setCreds({ 
            email: "", 
            password: "" 
        });
    };

    // if a user is signin or sign up we redirect them to main page
    if (auth._id) return <Redirect to="/" />;

    return(
        <>
            <form
                noValidate
                autoComplete="off"
                className={classes.formStyle}
                onSubmit={handleSubmit}
            >
                <Typography variant="h5">
                    Sign In
                </Typography>
                <TextField
                    className={classes.spacing}
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    // default value from state
                    value = {creds.email}
                    // on change event to update our value (e) for "event"
                    // ... spread operator to spread the properties of our user
                    onChange = {(e) => setCreds({...creds, email: e.target.value})}
                />
                <TextField
                    className={classes.spacing}
                    id="enter-password"
                    type="password"
                    label="enterPassword"
                    variant="outlined"
                    fullWidth
                    // default value from state
                    value = {creds.password}
                    // on change event to update our value (e) for "event"
                    // ... spread operator to spread the properties of our user
                    onChange = {(e) => setCreds({...creds, password: e.target.value})}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.spacing}
                    type="submit"
                >
                    Sign In
                </Button>
            </form>
        </>
    );
}

export default SignIn;