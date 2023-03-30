import React, {useState} from 'react'
import "../styles/css/Login.css";
import IMAGES from '../asset';
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useNavigate} from 'react-router-dom'
import Logo from '../utilities/Logo';


interface LoginForm {
    password: string;
    email: string;
}

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    }

    const navigate = useNavigate()
    const schema = yup.object().shape({email: yup.string().email().required("Input correct email"), password: yup.string().required(" Your password is required ")})

    const {register, handleSubmit, formState: {
            errors
        }, reset} = useForm < LoginForm > ({resolver: yupResolver(schema)});


    const onSubmit = (data : LoginForm) => {
        const userJson = JSON.stringify(data);
        localStorage.setItem("user", userJson);
        console.log(data);
        reset();
        navigate('/users')
    }

    return (
        <div className='login'>
            <div className="login-container">
                <div className="left-section">
                    <div className="left-control">
                        <Logo/>
                        <div className='bg-image'>
                            <img alt="pablo" height="250"
                                src={
                                    IMAGES.pablo
                                }/>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="form-control">
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                        <form onSubmit={
                            handleSubmit(onSubmit)
                        }>
                            <div><input type="email"
                                    placeholder={
                                        errors.email ? errors.email ?. message : 'Email'
                                    }
                                    className={
                                        errors.email ? " error" : "input"
                                    }
                                    {...register('email')}/>
                            </div>

                            <div id='password-input'>
                                <div>
                                    <input type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        placeholder={
                                            errors.password ? errors.password.message : 'Password'
                                        }
                                        className={
                                            errors.password ? "error" : "input"
                                        }

                                        {...register('password')}/>
                                </div>
                                <div className="password-toggle"
                                    onClick={togglePasswordVisibility}>
                                    {
                                    showPassword ? 'Hide' : 'Show'
                                } </div>
                            </div>

                            <h6>FORGOT PASSWORD ?</h6>
                            <div><input type="submit" value='LOG IN'/></div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
