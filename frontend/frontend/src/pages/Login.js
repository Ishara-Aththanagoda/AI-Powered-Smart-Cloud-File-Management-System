import React from 'react';

function Login() {
    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <input type="email" placeholder="Email" className="border p-2" />
                <input type="password" placeholder="Password" className="border p-2" />
                <button className="bg-blue-600 text-white p-2">Login</button>
            </form>
        </div>
    );
}

export default Login;
