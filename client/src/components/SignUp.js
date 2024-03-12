

export default function SignUp(){


    function handleSubmit(e){
        e.preventDefault()
        console.log("submitted")
    }
    return(
        <div className="sign-up">
            <div classname="sign-up-container">
                <h2>The Study Guide App</h2>
                <form onSubmit={handleSubmit}>

                </form>
            </div>
        </div>
    );
}