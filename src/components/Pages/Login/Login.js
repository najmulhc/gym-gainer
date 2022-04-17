import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='bg-komola h-full w-full'>
           <div className="container mx-auto flex items-center justify-center py-8 md:py-20">
                <form action="" className='w-[420px] p-6 bg-white shadow-md'>
                    <h1 className='text-grey text-3xl font-bold text-center'>Login</h1>
                    <input type="email" placeholder='Your Email ' className='mt-4  border-0 border-b-2 border-komola p-3 w-full' />
                    <input type="password" placeholder='Your Password ' className='mt-4  border-0 border-b-2 border-komola p-3 w-full' />
                    <small className='text-grey'>Forget password? <Link to='/' className='text-komola'>Reset your password</Link></small>
                    <button className='text-white p-2 bg-komola w-full mt-4 text-2xl '>Login</button>
                    <small className='text-grey'>New to Gymgainer?<Link to='/register' className='text-komola'> Register here</Link></small>
                </form>
           </div>
        </div>
    );
};

export default Login;