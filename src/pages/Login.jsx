import React from 'react';
const Login = () => {
    return ( 
        <div className="background-image-container">
        <div className='formContainer'>
        <div className="formAndImageContainer">
            <div className='formWrapper'>
                <span className="title">Login</span>
                    <form>
                        <p>User Name</p>
                        <input className='inp' type="text" placeholder="User Name" />
                        <p>Password</p>
                        <input type="Password" placeholder="Password" />
                    </form>
                    <button className='login'>Sign in</button>
                    <p>Reset Password</p>
            </div>
            <div className='imgContainer'>
                <div className='rightImg'></div>
                <div className='logo'></div>

            </div>
        </div>
        </div>
        </div>
     );
}
 
export default Login ;