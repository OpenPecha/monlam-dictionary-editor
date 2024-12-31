import React from 'react'
import cat from '../assets/cat.jpg'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function goTo(location: string): void {
        if (location === 'tsigsar') {
            navigate('/tsigsar');
        } else if (location === 'parkhang') {
            navigate('/parkhang');
        } else if (location === 'mina') {
            navigate('/mina');
        } else if (location === 'pecha') {
            navigate('/pecha');
        } else {
            console.log('Error in navigation');
        }
    }

  return (
    <>
        <div>
            <div className='flex align-middle justify-end p-5'>
                <div className=' mt-2 mr-4'>
                    <p className=' font-bold'>Tenzin Tsering</p>
                    <p>Anotator</p>
                </div>
                <img className=' w-16 h-16 rounded-full object-cover' src={cat}></img>
            </div>
            <div className='flex align-middle justify-center mt-8'>
                <img className=' w-20 h-20 rounded-2xl' src={logo}></img>
            </div>
            <div className='flex align-middle justify-center'>
                <p className=' cursor-default text-6xl font-semibold'>སྨོན་ལམ་ཚིག་མཛོད་ཆེན་མོ།</p>
            </div>
            <div className='grid align-middle justify-center mt-8'>
                <div onClick={() => goTo('tsigsar')} className=' rounded cursor-pointer transition-all duration-300 w-80 flex justify-between hover:bg-slate-200 pb-5 pl-2 pr-2'>
                    <p className=' text-5xl'>ཚིག་གསར།</p>
                    <p className=' text-5xl'>+</p>
                </div>
                <div onClick={() => goTo('parkhang')} className=' rounded cursor-pointer transition-all duration-300 w-80 flex justify-between hover:bg-slate-200 pb-5 pl-2 pr-2'>
                    <p className=' text-5xl'>དཔར་ཁང་།</p>
                    <p className=' text-5xl'>+</p>
                </div>
                <div onClick={() => goTo('mina')} className=' rounded cursor-pointer transition-all duration-300 w-80 flex justify-between hover:bg-slate-200 pb-5 pl-2 pr-2'>
                    <p className=' text-5xl'>མི་སྣ།</p>
                    <p className=' text-5xl'>+</p>
                </div>
                <div onClick={() => goTo('pecha')} className=' rounded cursor-pointer transition-all duration-300 w-80 flex justify-between hover:bg-slate-200 pb-5 pl-2 pr-2'>
                    <p className=' text-5xl'>དཔེ་ཆ།</p>
                    <p className=' text-5xl'>+</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
