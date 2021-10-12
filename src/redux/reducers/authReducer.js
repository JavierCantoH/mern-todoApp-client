// toastify messages
import { toast } from "react-toastify";
// decode jwt for login or signup
import jwtDecode from "jwt-decode";

// initial state
const initialState = {
    // local storage for some persistency whenever we refresh the page or whenever we come back later and try to aces the app
    token: localStorage.getItem("token"),
    name: null,
    email: null,
    _id: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // THIS FIRST 3 CASES DO THE SAME FUNCITONALITY
        case "USER_LOADED":
        case "SIGN_IN":
        case "SIGN_UP":
            toast("Welcome...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            // include user to the auth state using jwt-decode
            const user = jwtDecode(action.token); 
            return {
                // update the initial state properties
                ...initialState,
                token: action.token,
                name: user.name,
                email: user.email,
                _id: user._id,
            };
        case "SIGN_OUT":
            localStorage.removeItem("token");
            toast("Goodbye...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return {
                token: null,
                name: null,
                email: null,
                _id: null,
            };
      default:
        return state;
    }
};
  
export default authReducer;