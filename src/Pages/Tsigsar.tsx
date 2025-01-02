import logo from '../assets/logo.png'
import home from '../assets/home.png'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import StatusPending from '../Components/StatusPending'
import StatusReviewed from '../Components/StatusReviewed'
import plus from '../assets/plus.png'
import Toggle from '../Components/Toggle'
import { SubmitHandler, useForm } from 'react-hook-form'
import DropDown from '../Components/Dropdown/DropDown'
import { useState } from 'react'

interface Input {
  matsig: string,
  newMatsig: boolean,
  gyunchoe: boolean,
}

const Tsigsar = () => {
  const navigate = useNavigate();

  const [sourceOpen, setSourceOpen] = useState<boolean>(false);
  const [sourceSeleced, setSourceSelected] = useState<string>('');
  const [sourceOption, setSourceOption] = useState<string[]>(['གདམ་ཀ ༡', 'གདམ་ཀ ༢', 'གདམ་ཀ ༣']);
  
  function goTo(location: string) {
    if (location === 'home') {
      navigate('/');
    } else {
      console.log('error while going back home page');
    }
  }

  function toggleSource() {
    setSourceOpen((pre) => !pre);
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
        <p className=' text-xl font-semibold mt-2 font-monlam'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
        <div className=' flex space-x-2 mt-6 bg-slate-300 p-2 rounded-md w-28 h-8'>
          <img src={home} className=' w-4 h-4 cursor-pointer' onClick={() => goTo('home')}></img>
          <img src={arrow} className=' w-2 h-5'></img>
          <p className=' text-sm font-monlam'>ཚིག་གསར།</p>
        </div>

        <div className=' font-monlam mt-6'>
          <StatusPending />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className=' flex items-center border-b-2 border-black mt-4 pb-2 w-2/4'>
            <label className=' text-lg font-monlam'>མ་ཚིག</label>
            <input className=' ml-4 outline-none mt-2 text-lg w-3/4' {...register('matsig')}></input>
          </div>

          <div className=' flex mt-4'>
            <div className=' flex items-center'>
            <p className=' text-lg font-monlam'>མ་ཚིག་གསར་པ།</p>
            <div className=' mb-2'>
            <Toggle register={register} value='newMatsig' />
            </div>
            
            </div>
              
            <div className=' flex items-center'>
              <p className=' text-lg ml-12 font-monlam'>རྒྱུན་སྤྱོད།</p>
              <div className=' mb-2'>
              <Toggle register={register} value='gyunchoe'/>
              </div>
            </div>
              <div>
                <div className=' relative text-lg ml-12 font-monlam cursor-pointer border-b-2 border-black pb-2 w-52 flex justify-between' onClick={toggleSource}><p>འབྱུང་ཁུངས།</p>{sourceSeleced}</div>
                {sourceOpen ? <DropDown options={sourceOption} setSelect={setSourceSelected} setOpen={setSourceOpen} /> : ''}
              </div>
          </div>

          <button className=' flex justify-center mt-8 w-28 rounded-md h-8 bg-gray-200 pb-5 gap-4 font-semibold transition-all duration-150 hover:opacity-80'>འགྲེལ་བཤད། <img src={plus} className=' w-4 mt-2'/></button>

          <button type='submit' className=' fixed bottom-14 right-20 bg-slate-400 pl-10 pr-10 pt-1 pb-1 rounded-md hover:opacity-80 active:opacity-50'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Tsigsar
