import { ChevronLeft, ChevronRight} from 'lucide-react'
import React, { useState } from 'react'
import ReviewCard from './ReviewCard'

const list_5 = [1,2,3,4,5];
export default function ClientReview() {
  const [translate,setTranslate] = useState(0); 
  
  function leftMove(){    
    const windowWidth = window.innerWidth;
    
    if(windowWidth < 640){
      translate < 700  ? setTranslate(translate+265) : setTranslate(0)
    }
    else{
      translate < 700  ? setTranslate(translate+350) : setTranslate(0)
    }
    
  }

  function rightMove(){
    const windowWidth = window.innerWidth;
    if(windowWidth < 640){
      translate > -700 ? setTranslate(translate-265) : setTranslate(0)
    }
    else{
      translate > -700 ? setTranslate(translate-350) : setTranslate(0)
    }
  }

  return (
    <div className=' w-full bg-gradient-to-t from-yellow-600 py-32 rounded-b-[50px] flex justify-center  text-black'>
        
        <div className='relative flex flex-col gap-12 p-10 mx-auto lg:w-[90%] w-[95%] max-w-[1640px]'>
          
          {/* box 1 */}
          <div className="flex lg:flex-row flex-col justify-between item-center z-50">
            <div className='flex flex-col'>
              <h1 className='text-[3rem] lg:text-[5rem] font-bold -mb-6 lg:-mt-4 lg:-mb-4'>CLIENTS</h1>
              <h1 className='text-[3rem] lg:text-[5rem] font-bold lg:-mt-10'>REVIEWS</h1>
              </div>
            <div className='flex items-end gap-5'>
              <span className="relative flex justify-center items-center p-7 border border-black rounded-full group"  onClick={()=>leftMove()}>
                <span className='absolute scale-0 group-hover:scale-100 bg-black inset-0 transition-all duration-500 rounded-full '></span>
                <ChevronLeft  className='absolute flex  group-hover:-translate-x-7  group-hover:opacity-0 transition-all duration-300 ' />
                <ChevronLeft  stroke='white' className='absolute flex  translate-x-7 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 transition-all duration-300 '/>
              </span>
              <span className="relative flex justify-center items-center p-7 border border-black rounded-full group" onClick={()=>rightMove()}>
                <span className='absolute scale-0 group-hover:scale-100 bg-black inset-0 transition-all duration-500 rounded-full '></span>
                <ChevronRight  className='absolute flex  group-hover:translate-x-7  group-hover:opacity-0 transition-all duration-300 ' />
                <ChevronRight  stroke='white' className='absolute flex  -translate-x-7 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 transition-all duration-300 '/>
              </span>
            </div>
          </div>
          {/* box 2 */}
          
          {/* slider  */}
          <div className=' z-50 overflow-hidden'>
         
            <div className={` flex gap-4 items-center justify-center transition-all duration-500`} 
             style={{ transform: `translateX(${translate}px)` }}>
              {list_5.map( index => (
                <div className='' key={index}><ReviewCard /></div>

              ))}
            </div>                
          </div>

          <img src="/bg-card-contact.webp" alt="" className='w-full h-full object-fill absolute top-0 left-0 z-0' />

        </div>
      
    </div>
  )
}



