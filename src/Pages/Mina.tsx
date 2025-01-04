import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import DropDown from '../Components/Dropdown/DropDown'
import Breadcrumb from '../Components/Breadcrumb'
import Submits from '../Components/Submit'
import { InputMina } from '../types/type'

const dummysource = ["གདམ་ཀ་དང་པོ།", "གདམ་ཀ་གཉིས་པ།", "གདམ་ཀ་གསུམ་པ།"];
const Mina = () => {
  const [typeOpen, setTypeOpen] = useState<boolean>(false);
  const [typeSelected, setTypeSelected] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<InputMina>()

  const onSubmit: SubmitHandler<InputMina> = (data) => {
    console.log(data);
    reset();
  }

  return (
      <div className=' text-lg font-monlam ml-16 mt-16'>
      <img src={logo} className='w-16 rounded-md'/>
      <p className=' text-xl font-semibold mt-2'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
       <Breadcrumb name="མི་སྣ།"/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-1/4 cursor-pointer' onClick={() => setTypeOpen((pre) => !pre)}>
            <label className=' text-lg font-monlam cursor-pointer' onClick={() => setTypeOpen((pre) => !pre)}>རིགས།</label>
            <p className=' font-monlam text-3xl ml-8'>{typeSelected}</p>
          </div>
          <div>
            {typeOpen ? <DropDown options={dummysource} setSelect={setTypeSelected} setOpen={setTypeOpen} /> : ''}
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-fit'>
            <label>མིང་།</label>
            <input className=' ml-2 outline-none mt-2 ' {...register('name', { required: true })}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-fit'>
            <label>སྐྱེས་ལོ།</label>
            <input type='date' className=' ml-11 outline-none mt-2 ' {...register('birthDate', {required: true})}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2  w-fit'>
            <label>འདས་ལོ།</label>
            <input type='date'  className=' ml-8 outline-none mt-2 ' {...register('deathDate', {required: true})}></input>
          </div>
          <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-fit'>
            <label>མི་རིགས།</label>
            <input className=' ml-8 outline-none mt-2 ' {...register('race', { required: true })}></input>
          </div>
          <Submits/>
        </form>
      </div>
  )
}

export default Mina
