// hit our backend api

// url testing
//export const url = "http://localhost:5000/api";
// url when backend has been published, dont forget about the api at the end
export const url = "https://mean-stack-todo-app.herokuapp.com/api";

// function to set the headers of our req with a key for auth
export const setHeaders = () => {
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    return headers;
};