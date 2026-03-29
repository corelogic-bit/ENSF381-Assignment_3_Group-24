import { useState} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayStatus from "./DisplayStatus";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const [usedLogin, setUsedLogin] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!usedLogin) {
            return;
        }
        async function validateLogin() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const users = await response.json();
                const userFound = users.find((user) => {
                    return user.username === username;
                });


                if (!userFound) {
                    setMessageType("error");
                    setMessage("Error. Username not found.");
                    setUsedLogin(false);
                    return;
                }
                if (userFound.email !== password) {
                    setMessageType("error");
                    setMessage("Error. Incorrect Password.");
                    setUsedLogin(false);
                    return;

                }

                setMessageType("success");
                setMessage("Login Successful");

                setTimeout(() => {
                    window.location.href = "/flavors";
                }, 2000);


                    
            } catch (error) {
                setMessageType("error")
                setMessage("error in fetching user's data");

            }
            setUsedLogin(false);
        }
        validateLogin();

    }, [usedLogin, username, password, navigate]);
    
    
    function handleSubmit(event) {
        event.preventDefault();
        if ((password.trim() === "") || (username.trim() === "")) {
            setMessageType("error");
            setMessage("Error. Username and Password cannot be empty.");
            return;
        }
        if (password.length < 8) {
            setMessageType("error");
            setMessage("Password should be atleast 8 characters");
            return;

        }

        setMessage("");
        setMessageType("");
        setUsedLogin(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>Username: </label>
                    <input 
                        type = "text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                


                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type = "password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                </div>


                <button type="submit">Login</button>
                <br/>
                <a href="/">Forgot Password?</a>
            </form>

            {message && <DisplayStatus type={messageType} message={message} />}
        </div>
    );

    

}

export default LoginForm;