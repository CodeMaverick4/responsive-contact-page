import React from 'react'
import { Star } from 'lucide-react'
export default function ReviewCard() {
  return (
    <div className=" w-[250px] sm:w-[350px] h-[500px]  relative flex flex-col gap-0  justify-between item-center py-8 px-8 text-black ">              
        <div className="z-50 ">
            <span className='flex gap-3 text-xl font-bold items-center '> 5.0 <Star fill='orange' size={20} stroke='orange'/> <Star size={20} stroke='orange'/> <Star size={20} stroke='orange'/> <Star size={20} stroke='orange'/></span>
        </div>
        <div className='h-[1px] bg-gray-600 w-full z-50'></div>
        <div className="text-sm lg:text-base z-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorem cupiditate possimus fugit distinctio debitis velit ipsa enim deleniti. Delectus, amet labore fugit velit excepturi nemo quasi at aperiam est ipsum repellat exercitationem aspernatur vero!</div>
        <div className="z-50 flex items-center justify-between gap-2">
            <div>
                <img src="/faqImage.avif" alt="" className='h-20 w-40 -translate-x-4' />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatibus.</p>
        </div>
        <img src="/bg-card-gray.webp" alt="" className='absolute top-0 left-0 w-full h-full object-fill z-0 '/>            
    </div>
  )
}