import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import DropDown from '../Components/Dropdown/DropDown'
import Breadcrumb from '../Components/Breadcrumb'
import Submits from '../Components/Submit'
import { InputPecha } from '../types/type'


const dummysource = ["གདམ་ཀ་དང་པོ།", "གདམ་ཀ་གཉིས་པ།", "གདམ་ཀ་གསུམ་པ།"];
const Pecha = () => {
  const [optionOpen, setOptionOpen] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>('');
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<InputPecha>();

  const onSubmit: SubmitHandler<InputPecha> = (data) => {
    console.log(data);
    reset();
  }

  return (
      <div className=' font-monlam text-lg ml-16 mt-16'>
      <img src={logo} className=' w-16 rounded-md'></img>
      <p className=' text-xl font-semibold mt-2 '>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
        <Breadcrumb name="དཔེ་ཆ།"/>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-fit'>
            <label>མཚན་བྱང་།</label>
            <input className=' ml-2 outline-none mt-2  ' {...register('tsigjang')}></input>
          </div>
          <div className='flex'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2  w-fit'>
              <label>མཚན་བྱང་བསྡུས་པ།</label>
              <input className=' ml-4 outline-none mt-2  ' {...register('tsenja')}/>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2'>
              <label>པར་སྐྲུན་ལོ།</label>
              <input type='date' className='ml-4 outline-none' {...register('year')}/>
            </div>
          </div>
          <div className='flex'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2  w-fit'>
              <label>རྩོམ་སྒྲིག་གི་རྣམ་པ།</label>
              <input className=' ml-4 outline-none mt-2 ' {...register('author')}/>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2'>
              <label>དཔར་སྐྲུན་བྱེད་སྟངས།</label>
              <input className=' ml-4 outline-none mt-2  ' {...register('partunMethod')}/>
            </div>
          </div>
          <div className='flex'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-fit '>
              <label>རྩོམ་སྒྲིག་པ་མིང་།</label>
              <input className=' ml-4 outline-none mt-2 ' {...register('author')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2 w-fit'>
              <label>དཔར་ཁང་།</label>
              <input className='ml-4 outline-none mt-2 ' {...register('partunMethod')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2 w-fit cursor-pointer' onClick={() => setOptionOpen((pre) => !pre)}>
              <div>
                <label className='cursor-pointer'>གཏེར་སྟོན་མིང་།</label>
                {optionOpen ? <DropDown options={dummysource} setSelect={setOptionSelected} setOpen={setOptionOpen} /> : ''}
              </div>
              <p className=' ml-4'>{optionSelected}</p>
            </div>
          </div>
          <div className='flex'>
            <div className=' flex items-center border-b-2 border-black mt-3 pb-2'>
              <label>རྩོམ་པ་པོ་མིང་།</label>
              <input className=' ml-5 outline-none mt-2  ' {...register('author')}></input>
            </div>
            <div className=' flex items-center border-b-2 border-black mt-3 ml-2 pb-2'>
              <label>ལོ་ཙཱ་བ་མིང་།</label>
              <input className='ml-2 outline-none mt-2  ' {...register('partunMethod')}></input>
            </div>
          </div>
          <Submits/>
</form>
      </div>
  )
}

export default Pecha
