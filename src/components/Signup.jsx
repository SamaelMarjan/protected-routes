import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='bg-blue-100 max-w-[700px] mx-auto my-16 p-4 rounded-lg'>

      <div>
        <h1 className='text-2xl font-bold py-2'>
          Sign up for a free account
        </h1>
        <p className='py-2'>
          Already have an account?
          <Link to='/' className='underline'>Sign in</Link>
        </p>
      </div>

      <from>
        
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>E-mail Address</label>
          <input className='border outline-none p-2' type='email' />
        </div>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input className='border outline-none p-2' type='password' />
        </div>

        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-4 text-white'>Sign Up</button>

      </from>

    </div>
  );
}

export default Signup;