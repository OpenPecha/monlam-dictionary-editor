import React from 'react'
import logo from '../assets/logo.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import Breadcrumb from '../Components/Breadcrumb'
import Submits from '../Components/Submit'
import { InputParchang } from '../types/type'



const Parkhang = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<InputParchang>()

  const onSubmit: SubmitHandler<InputParchang> = (data) => {
    console.log(data);
    reset();
  }
  return (
    <>
      <div className=' text-lg font-monlam ml-16 mt-16'>
      <img src={logo} className=' w-16 rounded-md'></img>
      <p className=' text-xl font-semibold mt-2'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
        <Breadcrumb name="དཔར་ཁང་།"/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-fit'>
            <label>མིང་།</label>
            <input className=' ml-14 outline-none mt-2 text-lg' {...register('name', { required: true })}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-4 pb-2 w-fit'>
            <label>ཆགས་ཡུལ།</label>
            <input className=' ml-6 outline-none mt-2 text-lg' {...register('chakyul', {required: true})}></input>
          </div>
          <Submits/>
        </form>
      </div>
    </>
  )
}

export default Parkhang
