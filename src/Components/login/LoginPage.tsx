import React from 'react';
import logo from '../../images/logo.svg';
import LoginForm from './LoginForm';

const LoginPageLgo: React.FC = () => {

  return (
    <div className='max-w-[1100px] mx-auto py-5 px-4'>
     <div>
      <div className='flex items-center justify-center relative'>
          <img 
            src={logo} 
            alt="logo"
            className='w-40'
          />
        </div>
        <div className='border-b-2 border-sky-800'>
          <h1 className='text-center text-[24px]  font-bold text-sky-800 md:text-[2rem] md:text-left '>LOGIN</h1>
        </div>
     </div>
      <LoginForm/>
    </div>
  )
};

export default LoginPageLgo;
