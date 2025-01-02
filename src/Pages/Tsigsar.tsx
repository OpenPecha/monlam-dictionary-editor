import logo from '../assets/logo.png'
import home from '../assets/home.png'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import StatusPending from '../Components/StatusPending'
import StatusReviewed from '../Components/StatusReviewed'
import plus from '../assets/plus.png'
import Toggle from '../Components/Toggle'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Input {
  matsig: string,
  newMatsig: boolean,
  gyunchoe: boolean,
}

const Tsigsar = () => {
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
          <p className=' font-semibold'>ཚིག་གསར།</p>
        </div>

        <div className=' mt-6'>
          <StatusPending />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-1/3'>
            <label className=' text-2xl'>མ་ཚིག</label>
            <input className=' ml-4 outline-none mt-2 text-2xl w-96' {...register('matsig')}></input>
          </div>

          <div className=' flex mt-6'>
              <p className=' text-2xl'>མ་ཚིག་གསར་པ།</p>
              <Toggle register={register} value='newMatsig' />

              <p className=' text-2xl ml-12'>རྒྱུན་སྤྱོད།</p>
              <Toggle register={register} value='gyunchoe'/>

              <div className=' text-2xl ml-12'>འབྱུང་ཁུངས།</div>
          </div>

          <button className=' flex justify-center mt-8 w-28 rounded-md h-8 bg-gray-200 pb-5 gap-4 font-semibold transition-all duration-150 hover:opacity-80'>འགྲེལ་བཤད། <img src={plus} className=' w-4 mt-2'/></button>

          <button type='submit' className=' fixed bottom-14 right-20 bg-slate-400 pl-10 pr-10 pt-1 pb-1 rounded-md hover:opacity-80 active:opacity-50'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Tsigsar
