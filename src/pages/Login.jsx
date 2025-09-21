export default function LoginPage() {
    return (
        <>
            <div className="login">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" placeholder="Username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
            </div>
        </>
    )
}
