import React from 'react'
import {CircleCheck, SendHorizontal} from 'lucide-react'

export default function HeroSection() {
  return (
    
    <section className='py-20 bg-gradient-to-t from-blue-300  to-blue-950 via-blue-900 font-sans rounded-b-[50px]'>
      <div className='mx-auto lg:w-[90%] w-[95%] max-w-[1640px]'>
        <div className="flex lg:flex-row flex-col justify-between  gap-10">
          {/* box-1 */}
          <div className="flex flex-col gap-4 ">
            <h1 className="text-[6rem] font-bold leading-none">LET'S TALK</h1>
            <div className="text-lg text-nowrap flex flex-col gap-2">
              <p className='flex gap-2 items-center'><CircleCheck fill='orange' stroke='black'/>We will respond to you within 24 hours.</p>
              <p className='flex gap-2 items-center'><CircleCheck fill='orange' stroke='black'/> We’ll sign an NDA if requested.</p>
              <p className='flex gap-2 items-center'><CircleCheck fill='orange' stroke='black'/>Access to dedicated product specialists.</p>
            </div>
          </div>
        
          {/* box-2 */}
          
              

          <div className='relative lg:w-[1014px] h-[514px]'>
              <img src="bg-card-contact.webp" alt="Responsive image" className='h-full w-full object-fill' />

              <div className='absolute inset-0 flex pt-16 justify-center '>
                  <div className=' p-5  grid grid-cols-2 gap-x-10 text-black '>
                      <div className='relative'>
                          <input type="text" className='p-3 border-b border-black focus:border-purple-600 outline-none peer w-full'/>
                          <label className=' absolute text-sm top-2 left-1 transition-all duration-500 transform peer-focus:-top-8 peer-focus:text-lg peer-focus:text-purple-600'>Full Name <span className='text-red-500'>*</span></label>
                      </div>

                      <div className='relative'>
                          <input type="text" className='p-3 border-b border-black focus:border-purple-600 outline-none peer w-full'/>
                          <label className='absolute text-sm top-2 left-1 transition-all duration-500 transform peer-focus:-top-8 peer-focus:text-lg peer-focus:text-purple-600'>Email<span className='text-red-500'>*</span></label>
                      </div>

                      <div className='relative'>
                          <input type="text" className='p-3 border-b border-black focus:border-purple-600 outline-none peer w-full'/>
                          <label className='absolute text-sm top-2 left-1 transition-all duration-500 transform peer-focus:-top-8 peer-focus:text-lg peer-focus:text-purple-600'>Mobile Number</label>
                      </div>

                      <div className='relative'>
                          <input type="text" className='p-3 border-b border-black focus:border-purple-600 outline-none peer w-full'/>
                          <label className='absolute text-sm top-2 left-1 transition-all duration-500 transform peer-focus:-top-8 peer-focus:text-lg peer-focus:text-purple-600'>Your LinkedIn Profile Link</label>
                      </div>

                      <div className='relative col-span-2'>
                          {/* <input type="" /> */}
                          <textarea name="" id="" className='p-3 border-b border-black focus:border-purple-600 outline-none peer w-full'></textarea>
                          <label className='absolute text-sm top-2 left-1 transition-all duration-500 transform peer-focus:-top-8 peer-focus:text-lg peer-focus:text-purple-600'>Message</label>
                      </div>

                      <p className='col-span-2 lg:col-span-1'>By sending this form I confirm that I have read and accept the Privacy Policy</p>
                      <div className='flex items-start justify-center  lg:justify-end col-span-2 lg:col-span-1'>
      {/* send messge button  */}
                        <div className='flex items-center rounded-3xl text-white gap-3 px-3 py-2 bg-blue-700 group cursor-pointer'>                       
                            <div className='relative overflow-hidden'>                       
                                <span className='text-sm lg:text-base px-1 opacity-0 invisible'>SEND A MESSAGE</span>
                                <span className='flex inset-0 text-nowrap absolute group-hover:-translate-y-5 translate-y-0 text-white pointer-events-none transition-all duration-200 font-semibold'>SEND A MESSAGE</span>
                                <span className='flex inset-0 text-nowrap absolute  group-hover:translate-y-0 translate-y-5 text-yellow-500 pointer-events-none transition-all duration-200 font-semibold'>SEND A MESSAGE</span>
                            </div>                            
                            <span className='overflow-hidden p-4 bg-white border group-hover:border-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out relative'>
                                <span className="absolute inset-0 bg-blue-700 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></span>
                                <SendHorizontal size={18} className='absolute left-2 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-5 text-blue-700 transition-transform duration-300 ease-in-out z-10'/>
                                <SendHorizontal size={18} className='absolute opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 text-white transition-transform duration-300 ease-in-out z-10'/>
                            </span>

                        </div>
                      </div>
                  </div>
              </div>
          </div>

        </div>

        <div className='flex flex-col gap-10  items-center my-20'>
          <h1 className='text-2xl'>COMPANIES WE WORKED WITH</h1>
          <div className="scroll-container overflow-hidden whitespace-nowrap w-full">
            <div className="scroll-content flex items-center animate-scroll">
              <img src="/creative.svg" alt="Creative" className="mx-5 h-24" />
              <img src="/oppo.svg" alt="Oppo" className="mx-5 h-24" />
              <img src="/auth.svg" alt="Auth" className="mx-5 h-24" />
              <img src="/jbl.svg" alt="JBL" className="mx-5 h-24" />
              <img src="/seneca.svg" alt="Seneca" className="mx-5 h-24" />
              <img src="/udemy.svg" alt="Udemy" className="mx-5 h-24" />
              {/* Repeat the images for a continuous scroll */}
              <img src="/creative.svg" alt="Creative" className="mx-5 h-24" />
              <img src="/oppo.svg" alt="Oppo" className="mx-5 h-24" />
              <img src="/auth.svg" alt="Auth" className="mx-5 h-24" />
              <img src="/jbl.svg" alt="JBL" className="mx-5 h-24" />
              <img src="/seneca.svg" alt="Seneca" className="mx-5 h-24" />
              <img src="/udemy.svg" alt="Udemy" className="mx-5 h-24" />
            </div>
          </div>
        </div>
      </div>  
    </section>
  
  )
}
