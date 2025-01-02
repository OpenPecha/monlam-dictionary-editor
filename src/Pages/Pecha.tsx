import React from 'react'
import logo from '../assets/logo.png'
import home from '../assets/home.png'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Input {

}

const Pecha = () => {

  const navigate = useNavigate();
  function goTo(location: string) {
    if (location === 'home') {
      navigate('/');
    } else {
      console.log('error while going back home page');
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    reset();
  }

  return (
    <>
      <div className=' ml-16 mt-16'>
        <img src={logo} className=' w-16 rounded-md'></img>
        <p className=' text-4xl font-semibold'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
        <div className=' flex space-x-2 mt-6 bg-slate-300 p-2 rounded-md w-28 h-8'>
          <img src={home} className=' w-4 h-4 cursor-pointer' onClick={() => goTo('home')}></img>
          <img src={arrow} className=' w-2 h-5'></img>
          <p className=' font-semibold'>དཔེ་ཆ།</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-1/3'>
            <label className=' text-2xl'>མཚན་བྱང་།</label>
            <input className=' ml-4 outline-none mt-2 text-2xl w-96' {...register('matsig')}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-1/3'>
            <label className=' text-2xl'>མཚན་བྱང་བསྡུས་པ།</label>
            <input className=' ml-4 outline-none mt-2 text-2xl w-96' {...register('matsig')}></input>
            <label className=' text-2xl'>པར་སྐྲུན་ལོ།</label>
            <input className=' ml-4 outline-none mt-2 text-2xl w-96' {...register('matsig')}></input>
          </div>

        

          <button type='submit' className=' fixed bottom-14 right-20 bg-slate-400 pl-10 pr-10 pt-1 pb-1 rounded-md hover:opacity-80 active:opacity-50'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Pecha
