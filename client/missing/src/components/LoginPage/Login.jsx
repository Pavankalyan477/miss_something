import "./Login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";




const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(firstName, lastName, email, password);
      };
    return (
        <div className="login_form">
            <h2>We are here to Help you...</h2>
            <form className="form">
                <h5>Sign Up</h5>
                <TextField
                label="First Name"
                variant="filled"
                value={firstName}
                onChange = {e => setFirstName(e.target.value)}
                required/>
                <TextField
                label = "Last Name"
                variant="filled"
                value={lastName}
                onChange = {e => setLastName(e.target.value)}
                required/>
                <TextField
                label = "Email"
                variant="filled"
                value={email}
                type = "email"
                onChange={e => setEmail(e.target.value)}
                required/>
                <TextField
                label = "Mobile No"
                variant = "filled"
                value={mobile}
                type = "tel"
                onChange={e => setMobile(e.target.value)}
                required/>
                <TextField
                label = "Password"
                variant="filled"
                value={password}
                type = "password"
                onChange={e => setPassword(e.target.value)}
                required
                />

                <div>
                    <Button variant="contained">Cancel</Button>
                    <Button variant="contained" type="submit">SIGN UP</Button>
                </div>
            </form>
        </div>
    )
}

export {Login};