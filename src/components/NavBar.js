import { SendHorizontal } from "lucide-react"

const NavBar = ()=>{
    return(
        <header className="pt-6 text-white  bg-sky-950  text-sm">
            <nav className="flex py-3 items-center justify-between border-b-2 border-t-2 border-white lg:w-[90%] w-[95%] max-w-[1640px] mx-auto">
                <div><span className="text-2xl">HALO LAB</span></div>
                <div className=" gap-9 items-center hidden lg:flex">
                    <a href="" className=" group h-6 overflow-hidden">
                        <div className="flex flex-col hover:-translate-y-6 transition-all duration-200">
                            <span className=' text-nowrap text-white pointer-events-none font-semibold'>SERVICES</span>
                            <span className=' text-nowrap text-yellow-500 pointer-events-none font-semibold'>SERVICES</span>
                        </div>
                    </a>

                    <a href="" className=" group h-6 overflow-hidden">
                        <div className="flex flex-col hover:-translate-y-6 transition-all duration-200">
                            <span className=' text-nowrap text-white pointer-events-none font-semibold'>PROJECT</span>
                            <span className=' text-nowrap text-yellow-500 pointer-events-none font-semibold'>PROJECT</span>
                        </div>
                    </a>

                    <a href="" className=" group h-6 overflow-hidden">
                        <div className="flex flex-col hover:-translate-y-6 transition-all duration-200">
                            <span className=' text-nowrap text-white pointer-events-none font-semibold'>OUR PURPOSE</span>
                            <span className=' text-nowrap text-yellow-500 pointer-events-none font-semibold'>OUR PURPOSE</span>
                        </div>
                    </a>

                    <a href="" className=" group h-6 overflow-hidden">
                        <div className="flex flex-col hover:-translate-y-6 transition-all duration-200">
                            <span className=' text-nowrap text-white pointer-events-none font-semibold'>OPEN SOURCE</span>
                            <span className=' text-nowrap text-yellow-500 pointer-events-none font-semibold'>OPEN SOURCE</span>
                        </div>
                    </a>
                    <a href="" className=" group h-6 overflow-hidden">
                        <div className="flex flex-col hover:-translate-y-6 transition-all duration-200">
                            <span className=' text-nowrap text-white pointer-events-none font-semibold'>OUR BLOG</span>
                            <span className=' text-nowrap text-yellow-500 pointer-events-none font-semibold'>OUR BLOG</span>
                        </div>
                    </a>

                </div>
                <div>
                    {/* <button className="rounded-3xl bg-white text-black px-4 py-2 ">Contact Us</button> */}

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
            </nav>
        </header>
    )

}
export default NavBar