import { useState } from "react";

export default function SignUp(){
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    const { username, email, password, password_confirmation } = signUpData;

    function handleChange(e){

    }
    function handleSubmit(e){
        e.preventDefault()
        console.log("submitted")
    }
    return(
        <div className="sign-up">
            <div classname="sign-up-container">
                <h2>The Study Guide App</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={username} placeholder="Username..." onChange={handleChange} />
                    <input type="text" name="email" value={email} placeholder="Email..." onChange={handleChange} />
                    <input type="text" name="password" value={password} placeholder="Password..." onChange={handleChange} />
                    <input type="text" name="password_confirmation" value={password_confirmation} placeholder="Confirm Password..." onChange={handleChange} />
                </form>
            </div>
        </div>
    );
}