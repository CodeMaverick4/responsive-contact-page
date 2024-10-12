import React, { useState } from 'react';
import {Minus, Plus } from 'lucide-react';

export default function FaqCard({ques,ans}) {
    const [isCollapsed,setCollapse] = useState(true);
    
  return (
    <div className={` relative flex flex-col gap-4 rounded-xl p-5 w-full ${isCollapsed ? 'text-white' :'text-black' }  cursor-pointer`} onClick={()=>setCollapse(!isCollapsed)}>
        <div className={`absolute  rounded-xl -translate-x-6 -translate-y-3 ${isCollapsed ? 'h-[1px]' : 'h-full'}  bg-white w-full transition-all duration-300 `}></div>
        <div className='flex items-center justify-between z-50 group'>
            <span className='text-2xl'>{ques}</span>
            <span className={`p-2 relative ${isCollapsed ? 'group-hover:before:scale-100 before:content-[""] before:absolute before:inset-0 before:bg-purple-600 before:rounded-full before:scale-0 before:transition-transform before:duration-300' :'bg-purple-600 rounded-full'} z-0`} >
                <Plus size={28} className={`relative z-50 ${isCollapsed ? 'opacity-100':'opacity-0 hidden '} transition-all duration-300`}/>
                <Minus size={28} className={`relative z-50 ${isCollapsed ? 'opacity-0 hidden':'opacity-100'} transition-all duration-300`}/>
            </span>            
        </div> 
        <p className={` ${isCollapsed && 'hidden'} z-50`}>{ans}</p>                        
        </div>

  )
}
