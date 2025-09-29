import RegisterComponent from '../components/RegisterComponent.jsx'
import LoginComponent from '../components/LoginComponent'

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

        </>
    )
}
