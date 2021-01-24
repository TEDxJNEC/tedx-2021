import React from 'react'
import '../../common/admin/loginCard.scss'

const LoginCard = () => {
    return (
        <div  className="loginPage">
            <div className="card">
                <div className="left">
                    <h2 className="heading">Login Here</h2>
                    <form>
                        <div className="textbox">
                            <input type="email" id="email" name="email"  required /> 
                            <span></span>
                            <label>Email</label><br/>
                        </div>
                        <div className="textbox">
                            <input type="password"  id="password" name="password"  required />
                            <span></span>
                            <label>Password</label><br/>
                        </div>
                        <div className="pass">
                            <h5>Forgot your password</h5>
                        </div>
                        <input type="submit" value="Login" className="btn" />
                    </form>
                    
                </div>
                <div className="right">
                    <h2>OR</h2>
                    <input type="submit" value="google" className="button" /><br/>
                    <input type="submit" value="facebook" className="button" />
                </div>
            </div>
        </div>
    )
}

export default LoginCard
