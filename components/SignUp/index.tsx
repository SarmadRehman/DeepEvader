import Link from 'next/link';
import React from 'react';
import Input from '../Common/Inputs/Input';
import Password from '../Common/Inputs/Password';
import { Zoom } from 'react-awesome-reveal';

const Index: React.FC = () => {
  const [Inputs, setInputs] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    ph: '',
    password: '',
    Cpassword: '',
  });
  const InputChange = (evt: any) => {
    const value = evt.target.value;
    setInputs({
      ...Inputs,
      [evt.target.name]: value,
    });
  };
  const submit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className='w-full bg-black-main p-8 min-h-screen'>
      <div className='w-full h-full bg-black-cool flex justify-center items-center flex-col px-4 py-8'>
        <Zoom>
          <h1 className='font-Outfit font-semibold md:text-[40px] text-2xl md:leading-[50.4px] text-blue-main'>
            Sign Up
          </h1>
          <h2 className='font-Outfit font-semibold md:text-[25px] text-sm md:leading-[31.5px] text-center text-white mt-3'>
            Please Sign Up To Continue
          </h2>
        </Zoom>
        {/* Inputs */}
        <form
          id='LoginForm'
          onSubmit={submit}
          className='w-full max-w-[870px] mx-auto flex justify-center items-center flex-col mt-10 gap-6'
        >
          <div className='w-full flex justify-center items-center md:flex-row flex-col md:gap-8 gap-6'>
            <div className='md:w-[50%] w-full'>
              <Zoom>
                <Input
                  Label='First Name*'
                  placeholder='Enter Your Email Address'
                  icon='/user.svg'
                  type={'text'}
                  name='firstname'
                  value={Inputs.firstname}
                  Event={InputChange}
                />
              </Zoom>
            </div>
            <div className='md:w-[50%] w-full'>
              <Zoom>
                <Input
                  Label='Last Name*'
                  placeholder='Enter Your Email Address'
                  icon='/user.svg'
                  type={'text'}
                  name='lastname'
                  value={Inputs.lastname}
                  Event={InputChange}
                />
              </Zoom>
            </div>
          </div>
          <div className='w-full flex justify-center items-center md:flex-row flex-col md:gap-8 gap-6'>
            <div className='md:w-[50%] w-full'>
              <Zoom>
                <Input
                  Label='Email Address*'
                  placeholder='Enter Your Email Address'
                  icon='/mail.svg'
                  type={'email'}
                  name='email'
                  value={Inputs.email}
                  Event={InputChange}
                />
              </Zoom>
            </div>
            <div className='md:w-[50%] w-full'>
              <Zoom>
                <Input
                  Label='Phone Number*'
                  placeholder='Enter Phone Number'
                  icon='/ph.svg'
                  type={'text'}
                  name='ph'
                  value={Inputs.lastname}
                  Event={InputChange}
                />
              </Zoom>
            </div>
          </div>
          <div className='w-full flex justify-center items-center md:flex-row flex-col md:gap-8 gap-6'>
            <div className='md:w-[50%] w-full'>
              <Zoom>
                <Password
                  Label='Password*'
                  placeholder='Enter Password'
                  iconShow='/eye.svg'
                  iconHide='/eye.svg'
                  name='password'
                  value={Inputs.password}
                  Event={InputChange}
                />
              </Zoom>
            </div>
            <div className='md:w-[50%] w-full'>
              <Zoom>
                <Password
                  Label='Confirm Password*'
                  placeholder='Confirm Password'
                  iconShow='/eye.svg'
                  iconHide='/eye.svg'
                  name='Cpassword'
                  value={Inputs.Cpassword}
                  Event={InputChange}
                />
              </Zoom>
            </div>
          </div>
        </form>
        {/* Button */}
        <Zoom>
          <button
            type='submit'
            form='LoginForm'
            className={`w-[158px] md:h-[55px] h-[46px] bg-blue-main rounded-[10px] font-Outfit font-bold text-[16px] leading-[20.16px] text-white hover:drop-shadow-xl transition-all duration-300 hover:scale-105 mt-12`}
          >
            Sign Up
          </button>
        </Zoom>
        <Zoom>
          <div className='flex justify-end items-center font-Outfit font-semibold md:text-[20px] text-sm md:leading-[25.2px] mt-14'>
            <h3 className=' text-white'>{`Already have an account?`}</h3>
            <Link href={'/login'} className='text-blue-main ml-2'>
              Login Now
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Index;
