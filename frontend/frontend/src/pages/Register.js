import React from 'react';

function Register() {
    return (
        <div>
            <h2>Register Page</h2>
            <form>
                <input type="email" placeholder="Email" className="border p-2" />
                <input type="password" placeholder="Password" className="border p-2" />
                <button className="bg-blue-600 text-white p-2">Register</button>
            </form>
        </div>
    );
}

export default Register;
