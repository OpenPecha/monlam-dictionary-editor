import React from 'react'
import logo from '../assets/logo.png'
import home from '../assets/home.png'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'

const Parkhang = () => {
  const navigate = useNavigate();
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
        <p className=' text-4xl font-semibold'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ་རྩོམ་སྒྲིག་མ་ལག</p>
        <div className=' flex space-x-2 mt-6 bg-slate-300 p-2 rounded-md w-28 h-8'>
          <img src={home} className=' w-4 h-4 cursor-pointer' onClick={() => goTo('home')}></img>
          <img src={arrow} className=' w-2 h-5'></img>
          <p className=' '>དཔར་ཁང་།</p>
        </div>

        <div className=' flex items-center border-b-2 border-black mt-9 pb-2 w-1/3'>
          <label className=' text-2xl'>མིང་།</label>
          <input className=' ml-14 outline-none mt-2 text-2xl w-96'></input>
        </div>
        <div className=' flex items-center border-b-2 border-black mt-2 pb-2 w-1/3'>
          <label className=' text-2xl'>ཆགས་ཡུལ།</label>
          <input className=' ml-6 outline-none mt-2 text-2xl w-96'></input>
        </div>
      </div>
    </>
  )
}

export default Parkhang
