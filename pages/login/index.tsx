import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';

import { FavouriteImage, GoogleImage, LinkedinImage, LoginImage } from 'assets/images/index';
import { FormMessage } from '../../components/ui/FormMessage';
import { Layout } from '../../components/layout';
import { LoginForm } from '../../interfaces/forms';
import { loginFormOptions } from '../../helpers/frontend/forms/auth/formOptions';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './../../styles/Login.module.css';

const Login: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const onSubmit: SubmitHandler<LoginForm> = data => alert(JSON.stringify(data));

    return (
        <Layout>
            <section className='flex-container'>
                <section className='flex-column-half'>
                    <section className={styles['login-container']}>
                        <h1>Welcome to AutoFavs <Image src={FavouriteImage} width={40} height={40} alt={'instagram-image'}/></h1> 
                        <h2>Please enter your details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor='email'>Email</label>
                            <input className={errors.email ? 'input-error' : ''} {...register("email", loginFormOptions.email )} />
                            {errors.email && <FormMessage message={errors.email.message}/>}

                            <label htmlFor='password'>Password</label>
                            <input className={errors.password ? 'input-error' : ''} type='password' {...register("password", loginFormOptions.password )} />
                            {errors.password && <FormMessage message={errors.password.message}/>}

                            <section className='flex-container center'>
                                <label>
                                    <input id='remember-me' type='checkbox' />
                                    <span>Remember me</span>
                                </label>
                                <span style={{marginLeft: 'auto'}}>
                                    <Link href='/forgot-password'>Forgot password?</Link>
                                </span>
                            </section>

                            <button className='button-primary mb-10' type="submit">Log In</button>
                            <button className='button-google-sign-in'><Image alt='google-image' src={GoogleImage} width={15} height={15}></Image> Sign in with google</button>
                        </form>
                        <h3>Don&apos;t you have an account? <Link href="/create-account">Create one</Link></h3>
                        </section>
                    </section>
                    <section className='flex-column-half bg-white' style={{textAlign: 'center'}}>
                        <Image className={styles['login-image']} src={LoginImage} width={800} height="auto" alt={'login-image'}/>
                        <section className={styles['login-footer']}>
                        <span>Created by: <strong>Francisco Jarma</strong></span>
                        <br></br>
                        <Image style={{marginTop: 25}} src={LinkedinImage} width={35} height={35} alt={'linkedin-image'}/>
                        <Image style={{marginTop: 25, marginLeft: 25}} src={GoogleImage} width={35} height={35} alt={'google-image'}/>
                    </section>
                    </section>
            </section>
        </Layout>
    )
}

export default Login;