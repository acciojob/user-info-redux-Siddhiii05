import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../redux/actions";
import "../styles/App.css";

function App() {
const { name, email } = useSelector((state) => state);
const dispatch = useDispatch();

return (
    <div className="container">
        <h1>User Information</h1>

        <div className="form">
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => dispatch(updateName(e.target.value))}
            />

            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
            />
        </div>

        <div className="output">
            <p>Name - {name}</p>
            <p>Email - {email}</p>
        </div>
    </div>
);

}

export default App;