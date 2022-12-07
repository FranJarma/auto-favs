import React, { FC } from 'react'

import * as loginStyles from './../../styles/Login.module.css';
import Image from 'next/image';
import Logo from 'assets/images/favorites.svg';
import GoogleIcon from 'assets/icons/google.svg';

const Login: FC = () => {
  return (
    <>
        <section className='flex-container'>
            <section className='flex-column-half'>
                <section className={loginStyles['login-container']}>
                    <h1>Welcome back</h1>
                    <h2>Please enter your details</h2>
                    <section>
                        <form action=''>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='text' />
                            <label htmlFor='password'>Password</label>
                            <input id='password' type='password' />
                            <section className='flex-container center'>
                                <label>
                                    <input id='remember-me' type='checkbox' />
                                    <span>Remember me</span>
                                </label>
                                <span style={{marginLeft: 'auto'}}>
                                    <a href="/">Forgot password?</a>
                                </span>
                            </section>
                        </form>
                    </section>
                    <section>
                        <button className='button-primary mb-10'>Log In</button>
                        <button className='button-google-sign-in'><Image alt="google-icon" src={GoogleIcon} width={15} height={15}></Image> Sign in with google</button>
                    </section>
                    <h3>Don't you have an account? <a>Create one</a></h3>
                    </section>
                </section>
                <section className='flex-column-half bg-white' style={{textAlign: 'center'}}>
                    <Image className={loginStyles['login-image']} src={Logo} width={100} height={100} alt={'login-image'}/>
                </section>
        </section>
    </>
  )
}

export default Login;