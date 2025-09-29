import {useState} from "react";

export default function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function submitLogin(formData) {
        const { username, password } = formData;
        console.log(username, password);


    }
    return (
        <>
            <form onSubmit={submitLogin}>
                <label htmlFor="username">Username: </label>
                <input type="text"
                       id="username"
                       placeholder="Username"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       className=""
                />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password"
                       id="password"
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                    />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
