import React, { useState } from 'react'
import LoginCard from '../../components/login/LoginCard'
import "../../common/admin/loginCard.scss"

const Login = () => {
    const[isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            <LoginCard/>  
            
        </div>
    )
}

export default Login
