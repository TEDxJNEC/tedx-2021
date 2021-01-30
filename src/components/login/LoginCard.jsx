import React from 'react'
import '../../common/admin/loginCard.scss'
import useForm from '../login/useForm'
import validate from '../login/validateInfo'

const LoginCard = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);


    return (
        <div  className="loginPage">
            <div className="card">
                <div className="left">
                    <h2 className="heading">Login Here</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="textbox">
                            <input type="email" id="email" name="email" autoComplete="off" value={values.email} onChange={handleChange}/> 
                            <span></span>
                            <label>Email</label><br/>
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className="textbox">
                            <input type="password"  id="password" name="password" autoComplete="off" value={values.password} onChange={handleChange}/>
                            <span></span>
                            <label>Password</label><br/>
                            {errors.password && <p>{errors.password}</p>}
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
