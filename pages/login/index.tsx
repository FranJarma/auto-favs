import React from 'react'
import Image from 'next/image';
import { NextPage } from 'next';

import { FavouriteIcon, GoogleIcon, InstagramIcon, LinkedinIcon} from 'assets/icons/index';
import { Layout } from '../../components/layout';
import styles from './../../styles/Login.module.css';
import LoginImage from 'assets/images/login.svg';

const Login: NextPage = () => {
  return (
    <Layout>
        <section className='flex-container'>
            <section className='flex-column-half'>
                <section className={styles['login-header']}>
                    <span>Created by: <strong>Francisco Jarma</strong></span>
                    <br></br>
                    <Image style={{marginTop: 25}} src={LinkedinIcon} width={35} height={35} alt={'linkedin-icon'}/>
                    <Image style={{marginLeft: 25}} src={InstagramIcon} width={35} height={35} alt={'instagram-icon'}/>
                </section>
                <section className={styles['login-container']}>
                    <h1>Welcome to AutoFavs <Image src={FavouriteIcon} width={40} height={40} alt={'instagram-icon'}/></h1> 
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
                                    <a href='/'>Forgot password?</a>
                                </span>
                            </section>
                        </form>
                    </section>
                    <section>
                        <button className='button-primary mb-10'>Log In</button>
                        <button className='button-google-sign-in'><Image alt='google-icon' src={GoogleIcon} width={15} height={15}></Image> Sign in with google</button>
                    </section>
                    <h3>Don't you have an account? <a>Create one</a></h3>
                    </section>
                </section>
                <section className='flex-column-half bg-white' style={{textAlign: 'center'}}>
                    <Image className={styles['login-image']} src={LoginImage} width={100} height={100} alt={'login-image'}/>
                </section>
        </section>
    </Layout>
  )
}

export default Login;