import {useState, useEffect} from 'react'

export default function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitting:', { username, password });

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}