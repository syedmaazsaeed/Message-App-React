import { useState } from "react";
// Api Calls so use Axios Apis
import axios from 'axios';
import '../App.css';


const LoginForm=()=> {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
// e for event occur when click
    const handleSubmit=async (e)=>{
     e.preventDefault();

     const authObject = { 'Project-Id' : "c93f518c-993a-45d6-953a-5598f8cd53a0" , 'User-Name' : username, 'User-Secret' : password }

     try {
         // username | password =>  chatengine -> give message
         await axios.get('https://api.chatengine.io/chats' , { headers: authObject});
         // works out -> logged in 
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // page reload 
            window.location.reload();

     } catch (error) {
         // error -> try with new username . 

         setError('😔You Put it Wrong Credentials.')
        
     }

    }
    //  The default behavior of the browser is to refresh, so we need to add this because it won't refresh.

    //  In JavaScript, preventDefault() is an event handler function that is used to prevent the default behavior of an event (such as a click event, submit event, etc.). When an event is triggered, it comes with a default behavior that is defined by the browser or platform. The purpose of using preventDefault() is to stop this default behavior so that you can customize the behavior of the event according to your needs.
     
    //  For instance, if you click on a submit button that is inside a form, the browser typically submits the form, leading to a page refresh. However, if you want to avoid this page refresh and handle the form data submission or perform some other action using JavaScript, you can use preventDefault() to stop the default form submission behavior.
    
    return (
        <div className="wrapper">
                <div className="form">
                    <h1 className="title">Message Application</h1>
                    <form onSubmit={handleSubmit}>

                        <input type="text"
                         value={username}
                         onChange={(e)=> setUsername(e.target.value)}  
                         className="input"
                         placeholder="Username" required                      
                        />
                        <input type="password"
                         value={password}
                         onChange={(e)=> setPassword(e.target.value)}  
                         className="input"
                         placeholder="Password" required                      
                        />
                        <div align="center"  >
                            <button type="submit" className="button"
                            style={{backgroundColor:'#00FFFF'}}
                            >
                                <span>Start the Chatting</span>
                            </button>
                        </div>
                        <h2 className="error">{error}</h2>
                    </form>
                </div>
        </div>
    );

}

export default LoginForm;