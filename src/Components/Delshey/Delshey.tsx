import React from 'react'
import DropDown from '../Dropdown/DropDown';

interface Props {
    popup: boolean[]
    setPopup: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const Delshey: React.FC<Props> = ( {popup, setPopup} ) => {
  return (
    <>
        <div className=' fixed inset-0 flex items-center justify-center bg-grey-800 bg-opacity-50 z-50'>
            <div className=' bg-white border-black border-2 p-6 rounded-lg w-10/12 h-5/6'>
                <div className=' flex justify-between'>
                    <p className=' font-monlam'>འགྲེལ་བཤད།</p>
                    <button onClick={() => setPopup([false,false,false])}>X</button>
                </div>
                <div className=' flex'>
                    <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-[700px]'>
                        <label className=' text-1xl font-monlam w-16'>འགྲེལ་བ།</label>
                        <input className=' ml-3 outline-none mt-2 text-2xl w-[510px]'></input>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[230px]'>
                        <label className=' text-1xl font-monlam w-22'>འགྲེལ་བ།</label>
                        <p className=' ml-[75px]'>Dropdown</p>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[210px]'>
                        <label className=' text-1xl font-monlam w-22'>སྤྱོད་སྒོ།</label>
                        <p className=' ml-[75px]'>Dropdown</p>
                    </div>
                </div>
                <div className=' flex'>
                    <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-[700px]'>
                        <label className=' text-1xl font-monlam w-36'>དཔེར་བརྗོད་ཚིག་གྲུབ།</label>
                        <input className=' ml-2 outline-none mt-2 text-2xl w-[430px]'></input>
                    </div>
                    <div className=' flex items-center mt-3 ml-4 pb-2 w-[230px]'>
                        <label className=' text-1xl font-monlam w-30'>པར་རིས་དགོས།</label>
                        <p className=' ml-8'>Toggle</p>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[210px]'>
                        <label className=' text-1xl font-monlam w-22'>མིང་གི་རྣམ་གྲངས།</label>
                        <p className=' ml-2'>Dropdown</p>
                    </div>
                </div>
                <div className=' flex'>
                    <div className=' flex items-center border-b-2 border-black mt-4 pb-2 w-[700px]'>
                        <label className=' text-1xl font-monlam w-12'>མཆན།</label>
                        <p className=' ml-5'>Extra selection</p>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[460px]'>
                        <label className=' text-1xl font-monlam w-30'>པར་རིས་དགོས།</label>
                        <p className=' ml-8'>Dropdown</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Delshey
