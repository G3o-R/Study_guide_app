import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const {username, password} = loginData

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value

        setLoginData({...loginData, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(loginData)
    }

    return(
        <div className="login-page">
            <div name="login-wrapper">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 name="title"> The Study Guide App</h2>
                    <input type="text" id="username" name="username" value={username} placeholder="Username..." onChange={handleChange} />
                    <input type="text" id="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
                    <button type="submit">login</button>
                </form>
                <div name="create-account">
                    <p>Don't have an account? <span onClick={(e)=>navigate("/sign-up")}>sign up</span></p>
                </div>
            </div>
        </div>
    )
}