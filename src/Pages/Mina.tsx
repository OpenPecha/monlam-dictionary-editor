import React, { useState } from 'react'
import logo from '../assets/logo.png'
import home from '../assets/home.png'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import DropDown from '../Components/Dropdown/DropDown'

interface Input {
  type: string,
  name: string,
  birthDate: string,
  deathDate: string,
  race: string,
}

const Mina = () => {
  const navigate = useNavigate();

  const [typeOpen, setTypeOpen] = useState<boolean>(false);
  const [typeOption, setTypeOption] = useState<string[]>(['གདམ་ཀ ༡', 'གདམ་ཀ ༢', 'གདམ་ཀ ༣']);
  const [typeSelected, setTypeSelected] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    reset();
  }

  function goTo(location: string) {
    if (location === 'home') {
      navigate('/');
    } else {
      console.log('Error while going to home page');
    }
  }

  return (
    <>
      <div className=' ml-16 mt-16'>
        <img src={logo} className=' w-16 rounded-md'></img>
        <p className=' text-xl font-monlam'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
        <div className=' flex space-x-2 mt-6 bg-slate-300 p-2 rounded-md w-28 h-8'>
          <img src={home} className=' w-4 h-4 cursor-pointer' onClick={() => goTo('home')}></img>
          <img src={arrow} className=' w-2 h-5'></img>
          <p className=' font-monlam'>མི་སྣ།</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-1/4 cursor-pointer' onClick={() => setTypeOpen((pre) => !pre)}>
            <label className=' text-lg font-monlam cursor-pointer' onClick={() => setTypeOpen((pre) => !pre)}>རིགས།</label>
            <p className=' font-monlam text-1xl ml-8'>{typeSelected}</p>
          </div>
          <div>
            {typeOpen ? <DropDown options={typeOption} setSelect={setTypeSelected} setOpen={setTypeOpen} /> : ''}
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-2/4'>
            <label className=' text-lg font-monlam'>མིང་།</label>
            <input className=' ml-14 outline-none mt-2 text-2xl w-96' {...register('name', { required: true })}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-1/4'>
            <label className=' text-lg font-monlam'>སྐྱེས་ལོ།</label>
            <input placeholder='DD/MM/YYYY' className=' ml-11 outline-none mt-2 text-1xl' {...register('birthDate', {required: true})}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-1/4'>
            <label className=' text-lg font-monlam w-2/4'>འདས་ལོ།</label>
            <input placeholder='DD/MM/YYYY' className=' ml-8 outline-none mt-2 text-1xl w-96' {...register('deathDate', {required: true})}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-2/4'>
            <label className=' text-lg font-monlam'>མི་རིགས།</label>
            <input className=' ml-8 outline-none mt-2 text-2xl w-96' {...register('race', { required: true })}></input>
          </div>
          <button type='submit' className=' fixed bottom-14 right-20 bg-slate-400 pl-10 pr-10 pt-1 pb-1 rounded-md hover:opacity-80 active:opacity-50'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Mina
