import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { SearchbarProps } from '../types/type';


const Searchbar: React.FC<SearchbarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='flex border-secondary-500 bg-neutral-50 rounded-sm items-center'>
      <input 
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        placeholder='འཚོལ།' 
        className='border-none bg-inherit w-full h-8 rounded-sm p-2 text-neutral-900 outline-none'
      />
      <IoIosSearch className='h-5 w-5 mr-2 text-secondary-500 cursor-pointer'/>
    </div>
  );
};

export default Searchbar;