import React, { FC } from 'react'
import { FaExclamationCircle } from 'react-icons/fa';

type Props = {
  message?: string;
}

export const FormMessage:FC<Props> = ({ message }) => {
  return (
    <p className='p-error'><FaExclamationCircle/> {message}</p>
  )
}
