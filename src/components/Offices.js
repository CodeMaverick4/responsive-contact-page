
import React from 'react'
import FaqCard from './FaqCard'
import ClientReview from './ClientReview'

export default function Offices() {
  return (
    <section className=' flex flex-col py-20 '>        
    <div className='mx-auto lg:w-[90%] w-[95%] max-w-[1640px]'>
        <h1 className='lg:text-[2rem] text-[3rem] lg:text-end '>A short story about how a small</h1>
        <h1 className='lg:text-[2rem] text-[3rem] lg:text-end lg:pr-32'>Ukrainian agency turned into a global</h1>
        <h1 className='lg:text-[2rem] text-[3rem] lg:text-end '>company with 3 offices in different parts of</h1>
        <h1 className='lg:text-[2rem] text-[3rem] lg:text-end lg:pr-20'>the world. To be closer to our clients.</h1>

{/* FAQ section  */}
        <div className='flex lg:flex-row flex-col gap-10 lg:justify-between  mt-20'>
            
                <div className='relative w-[300px]'>
                    <img src="/faqimage.webp" alt="" className=' object-fill z-0' />

                    <div className='p-5 absolute top-0 left-0 right-0 bottom-0 flex flex-col  gap-8 z-50  bg-opacity-100 '>
                        <div className='h-40'><img src="/faqImage.avif" alt="" className='h-full w-full object-contain object-left'/></div>
                        <p className=' text-white'>
                        This is Julia, Halo Lab’s manager. Feel free to text her and get all the answers you need.
                        </p>
                        <div className='flex justify-center'>
                            <div className='flex items-center rounded-3xl  gap-3 px-3 py-2 bg-white group cursor-pointer'>
                                <div className='relative overflow-hidden'>
                                    <span className='px-1 opacity-0 invisible'>SEND A MESSAGE</span>
                                    <span className='flex inset-0 text-nowrap absolute group-hover:-translate-y-5 translate-y-0 text-black pointer-events-none transition-all duration-200 font-semibold'>SEND A MESSAGE</span>
                                    <span className='flex inset-0 text-nowrap absolute group-hover:translate-y-0 translate-y-5 text-purple-800 pointer-events-none transition-all duration-200 font-semibold'>SEND A MESSAGE</span>
                                </div>
                                <img src="/whatsapp.svg" alt="WhatsApp" />
                            </div>
                        </div>
                    </div>
                </div>
            

            
            
            <div className='flex flex-col lg:w-[70%] '>
                <h1 className='font-bold text-[4vw]'>FAQs</h1>
                <div className='flex flex-col gap-2'>
                    <FaqCard ques={"What Service we provide ?"} ans={"At Halo Lab, we’re all about creativity and innovation. Our design services include web design, UI/UX design, mobile app design, branding, and eCommerce design. We also offer development services such as software development, CMS, back-end, front-end, and web development. In addition, our marketing services cover everything from SEO and content marketing to pitch deck design and conversion rate optimization."}/>
                    <FaqCard ques={"What Service we provide ?"} ans={"At Halo Lab, we’re all about creativity and innovation. Our design services include web design, UI/UX design, mobile app design, branding, and eCommerce design. We also offer development services such as software development, CMS, back-end, front-end, and web development. In addition, our marketing services cover everything from SEO and content marketing to pitch deck design and conversion rate optimization."}/>
                    <FaqCard ques={"What Service we provide ?"} ans={"At Halo Lab, we’re all about creativity and innovation. Our design services include web design, UI/UX design, mobile app design, branding, and eCommerce design. We also offer development services such as software development, CMS, back-end, front-end, and web development. In addition, our marketing services cover everything from SEO and content marketing to pitch deck design and conversion rate optimization."}/>
                    <FaqCard ques={"What Service we provide ?"} ans={"At Halo Lab, we’re all about creativity and innovation. Our design services include web design, UI/UX design, mobile app design, branding, and eCommerce design. We also offer development services such as software development, CMS, back-end, front-end, and web development. In addition, our marketing services cover everything from SEO and content marketing to pitch deck design and conversion rate optimization."}/>
                </div>


            </div>

        </div>


        </div>
    </section>
  )
}
