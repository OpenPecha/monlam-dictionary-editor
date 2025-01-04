import React, { useState } from 'react'
import DropDown from '../Dropdown/DropDown';
import Chen from './Chen';
import PechaPopup from './PechaPopup';
import AuthorPopup from './AuthorPopup';

interface Props {
    popup: boolean[]
    setPopup: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const Delshey: React.FC<Props> = ( {popup, setPopup} ) => {

    const [newChen, setNewChen] = useState<boolean>(false);
    const [pechaPopup, setPechaPopup] = useState<boolean>(false);
    const [authorPopup, setAuthorPopup] = useState<boolean>(false);

    // NOTE : The Drop down number is repective from left to right and from top to bottom

    const [dropDown1, setDropDown1] = useState<boolean>(false);
    const [dropDownOption1, setDropDownOption1] = useState<string[]>(['NOUN', 'VERB', 'PRONOUN']);
    const [dropDownSelected1, setDropDownSelected1] = useState<string>('');
    
    const [dropDown2, setDropDown2] = useState<boolean>(false);
    const [dropDownOption2, setDropDownOption2] = useState<string[]>(['DUMMY', 'DUMMY', 'DUMMY']);
    const [dropDownSelected2, setDropDownSelected2] = useState<string>('');
    
    const [dropDown3, setDropDown3] = useState<boolean>(false);
    const [dropDownOption3, setDropDownOption3] = useState<string[]>(['DUMMY', 'DUMMY', 'DUMMY']);
    const [dropDownSelected3, setDropDownSelected3] = useState<string>('');
    
    const [dropDown4, setDropDown4] = useState<boolean>(false);
    const [dropDownOption4, setDropDownOption4] = useState<string[]>(['RELIGIOUS', 'TEXTBOOK', 'SCIENCE']);
    const [dropDownSelected4, setDropDownSelected4] = useState<string>('');

  return (
    <>
        <div className=' fixed inset-0 flex items-center justify-center bg-grey-800 bg-opacity-50 z-50'>
            <div className=' bg-white border-black border-2 p-6 rounded-xl w-10/12 h-5/6'>
                <div className=' flex justify-between'>
                    <p className=' font-monlam text-2xl font-bold'>འགྲེལ་བཤད།</p>
                    <button onClick={() => setPopup([false,false,false])}>X</button>
                </div>
                <div className=' flex'>
                    <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-[660px]'>
                        <label className=' text-1xl font-monlam w-16'>འགྲེལ་བ།</label>
                        <input className=' ml-3 outline-none mt-0 text-2xl w-[510px]'></input>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[260px]'>
                        <label className=' text-1xl font-monlam w-64 cursor-pointer' onClick={() => setDropDown1(pre => !pre)}>བརྡ་སྤྲོད་དབྱེ་བའི་སྡེ་ཚན།</label>
                        {dropDown1 ? <div className=' absolute z-50 mt-10'><DropDown options={dropDownOption1} setSelect={setDropDownSelected1} setOpen={setDropDown1} /> </div> : ''}
                        <p className=' ml-[2px]'>{dropDownSelected1}</p>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[210px]'>
                        <label className=' text-1xl font-monlam w-64 cursor-pointer' onClick={() => setDropDown2(pre => !pre)}>སྤྱོད་སྒོ།</label>
                        {dropDown2 ? <div className=' absolute z-50 mt-10'><DropDown options={dropDownOption2} setSelect={setDropDownSelected2} setOpen={setDropDown2} /> </div> : ''}
                        <p className=' ml-[2px]'>{dropDownSelected2}</p>
                    </div>
                </div>
                <div className=' flex'>
                    <div className=' flex items-center border-b-2 border-black mt-3 pb-2 w-[700px]'>
                        <label className=' text-1xl font-monlam w-36'>དཔེར་བརྗོད་ཚིག་གྲུབ།</label>
                        <input className=' ml-2 outline-none mt-2 text-2xl w-[430px]'></input>
                    </div>
                    <div className=' flex items-center mt-3 ml-4 pb-2 w-[230px]'>
                        <label className=' text-1xl font-monlam w-30'>པར་རིས་དགོས།</label>
                        <div className=" ml-10 mt-0 flex items-center justify-center">
                            <label className="relative inline-block w-12 h-6 cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <span className="block w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500"></span>
                            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
                            </label>
                        </div>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[210px]'>
                        <label className=' text-1xl font-monlam w-64 cursor-pointer' onClick={() => setDropDown3(pre => !pre)}>མིང་གི་རྣམ་གྲངས།</label>
                        {dropDown3 ? <div className=' absolute z-50 mt-10'><DropDown options={dropDownOption3} setSelect={setDropDownSelected3} setOpen={setDropDown3} /> </div> : ''}
                        <p className=' ml-[2px]'>{dropDownSelected3}</p>
                    </div>
                </div>
                <div className=' flex'>
                    <div className=' flex items-center border-b-2 border-black mt-4 pb-2 w-[700px]'>
                        <label className=' text-1xl font-monlam w-12'>མཆན།</label>
                        <p className=' ml-5 cursor-pointer' onClick={() => setNewChen(true)}>Extra selection</p>
                    </div>
                    <div className=' flex items-center border-b-2 border-black mt-3 ml-4 pb-2 w-[460px]'>
                        <label className=' text-1xl font-monlam w-64 cursor-pointer' onClick={() => setDropDown4(pre => !pre)}>བརྡ་ཆད་དབྱེ་བའི་སྡེ་ཚན།</label>
                        {dropDown4 ? <div className=' absolute z-50 mt-10'><DropDown options={dropDownOption4} setSelect={setDropDownSelected4} setOpen={setDropDown4} /> </div> : ''}
                        <p className=' ml-[2px]'>{dropDownSelected4}</p>
                    </div>
                </div>
                {newChen ? <Chen /> : ''}
            </div>
            {pechaPopup ? <PechaPopup /> : ''}
            {authorPopup ? <AuthorPopup /> : ''}
            <button className=' fixed bottom-[100px] right-[180px] bg-slate-400 pl-7 pr-7 pt-2 pb-2 rounded-md hover:opacity-80 active:opacity-50 font-monlam'>ཉར་ཚགས།</button>
        </div>
    </>
  )
}

export default Delshey
