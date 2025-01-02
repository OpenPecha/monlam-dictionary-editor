import React, { useState } from 'react'
import logo from '../assets/logo.png'
import home from '../assets/home.png'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import DropDown from '../Components/Dropdown/DropDown'

interface Input {
  tsigjang: string,
  tsenja: string,
  year: string,
  author: string,
  partunMethod: string,
}

const Pecha = () => {

  const navigate = useNavigate();

  const [optionOpen, setOptionOpen] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>('');
  const [option, setOption] = useState<string[]>(['གདམ་ཀ 1', 'གདམ་ཀ ༢', 'གདམ་ཀ ༣']);

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
        <p className=' text-4xl font-monlam'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
        <div className=' flex space-x-2 mt-6 bg-slate-300 p-2 rounded-md w-28 h-8'>
          <img src={home} className=' w-4 h-4 cursor-pointer' onClick={() => goTo('home')}></img>
          <img src={arrow} className=' w-2 h-5'></img>
          <p className=' font-monlam'>དཔེ་ཆ།</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-1/3'>
            <label className=' text-3xl font-monlam w-2/4'>མཚན་བྱང་།</label>
            <input className=' ml-4 outline-none mt-2 text-2xl w-96' {...register('tsigjang')}></input>
          </div>
          <div className='flex w-2/4'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-3/4'>
              <label className=' text-3xl w-36 font-monlam'>མཚན་བྱང་བསྡུས་པ།</label>
              <input className=' ml-4 outline-none mt-2 text-2xl w-64' {...register('tsenja')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2'>
              <label className=' text-3xl w-36 font-monlam'>པར་སྐྲུན་ལོ།</label>
              <input placeholder='DD/MM/YYYY' className=' placeholder:text-sm ml-4 outline-none mt-2 text-2xl w-48' {...register('year')}></input>
            </div>
          </div>
          <div className='flex w-2/4'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-3/4'>
              <label className=' text-3xl w-36 font-monlam'>རྩོམ་སྒྲིག་གི་རྣམ་པ།</label>
              <input className=' ml-4 outline-none mt-2 text-2xl w-64' {...register('author')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2'>
              <label className=' text-3xl w-40 font-monlam'>དཔར་སྐྲུན་བྱེད་སྟངས།</label>
              <input className=' ml-4 outline-none mt-2 text-2xl w-48' {...register('partunMethod')}></input>
            </div>
          </div>
          <div className='flex w-3/4'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-72'>
              <label className=' text-3xl w-32 font-monlam'>རྩོམ་སྒྲིག་པ་མིང་།</label>
              <input className=' ml-4 outline-none mt-2 text-2xl w-28' {...register('author')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2 w-72'>
              <label className=' text-3xl w-20 font-monlam'>དཔར་ཁང་།</label>
              <input className='ml-4 outline-none mt-2 text-2xl w-28' {...register('partunMethod')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2 w-60 cursor-pointer' onClick={() => setOptionOpen((pre) => !pre)}>
              <div>
                <label className=' text-3xl w-40 font-monlam cursor-pointer'>གཏེར་སྟོན་མིང་།</label>
                {optionOpen ? <DropDown options={option} setSelect={setOptionSelected} setOpen={setOptionOpen} /> : ''}
              </div>
              <p className=' ml-7 text-2xl'>{optionSelected}</p>
            </div>
          </div>
          <div className='flex w-2/4'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-72'>
              <label className=' text-3xl w-26 font-monlam'>རྩོམ་པ་པོ་མིང་།</label>
              <input className=' ml-5 outline-none mt-2 text-2xl w-32' {...register('author')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2'>
              <label className=' text-3xl w-24 font-monlam'>ལོ་ཙཱ་བ་མིང་།</label>
              <input className='ml-2 outline-none mt-2 text-2xl w-28' {...register('partunMethod')}></input>
            </div>
          </div>

        

          <button type='submit' className=' fixed bottom-14 right-20 bg-slate-400 pl-10 pr-10 pt-1 pb-1 rounded-md hover:opacity-80 active:opacity-50'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Pecha
