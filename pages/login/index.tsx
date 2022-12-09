import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import { useSession, signIn, signOut } from "next-auth/react"

import { BiLogIn } from 'react-icons/bi';
import { FaGithubSquare, FaGoogle, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FavouriteImage, LoginImage } from 'assets/images/index';
import { FormMessage } from '../../components/ui/FormMessage';
import { Layout } from '../../components/layout';
import { LoginForm } from '../../interfaces/forms';
import { loginFormOptions } from '../../helpers/frontend/forms/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './../../styles/Login.module.css';


const Login: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const { data: session } = useSession()
    const onSubmit: SubmitHandler<LoginForm> = data => alert(JSON.stringify(data));

    return (
        <Layout>
            <section className='flex-container'>
                <section className='flex-column-half'>
                    <section className={styles['login-container']}>
                        <h1>Welcome to AutoFavs <Image src={FavouriteImage} width={40} height={40} alt={'main-image'}/></h1> 
                        <h2>Please enter your details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor='email'>Email</label>
                            <input className={errors.email ? 'input-error' : ''} {...register('email', loginFormOptions.email )} />
                            {errors.email && <FormMessage message={errors.email.message}/>}

                            <label htmlFor='password'>Password</label>
                            <input className={errors.password ? 'input-error' : ''} type='password' {...register('password', loginFormOptions.password )} />
                            {errors.password && <FormMessage message={errors.password.message}/>}

                            <section className='flex-container center'>
                                <label>
                                    <input id='remember-me' type='checkbox' {...register('rememberMe')} />
                                    <span>Remember me</span>
                                </label>
                                <span style={{marginLeft: 'auto'}}>
                                    <Link href='/forgot-password'>Forgot password?</Link>
                                </span>
                            </section>

                            <button className='button-primary mb-10' type='submit'> <BiLogIn/> Log In</button>
                            <button onClick={() => signIn()} className='button-google-sign-in' type='button'><FaGoogle/> Sign in with google</button>
                        </form>
                        <h3>Don&apos;t you have an account? <Link href='/create-account'>Create one</Link></h3>
                        </section>
                    </section>

                    <section className='flex-column-half bg-white' style={{textAlign: 'center'}}>
                        <Image className={styles['login-image']} src={LoginImage} width={800} height='auto' alt={'login-image'}/>
                        <section className={styles['login-footer']}>
                            <span>Created by: <strong>Francisco Jarma</strong></span>
                            <section className={styles['login-social-media']}>
                                <a href='https://github.com/FranJarma' rel="noreferrer" target='_blank'>
                                    <span><FaGithubSquare size={35}/></span>
                                </a>
                                <a href='https://www.linkedin.com/in/francisco-jarma/' rel="noreferrer" target='_blank'>
                                    <span><FaLinkedin size={35} style={{ marginLeft: '15px'}}/></span>
                                </a>
                                <a href='https://www.instagram.com/franjarma' rel="noreferrer" target='_blank'>
                                    <span><FaInstagramSquare size={35} style={{ marginLeft: '15px'}}/></span>
                                </a>
                            </section>
                        </section>
                    </section>
            </section>
        </Layout>
    )
}

export default Login;