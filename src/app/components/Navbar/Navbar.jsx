import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: '300',
})

const Navbar = () => {
  return (
    <div className={`${inter.className}`}>  
        <nav className='bg-[#f0eada] h-[12vh] flex items-center fixed top-0 w-[100%] z-[999999]'>
            <div className='flex items-center h-[55%] mx-auto w-[95%] justify-between'>
                <img src="/thali.svg" alt="" className='h-[3rem]'/>
                
                <div className='w-[90%] h-[100%] flex items-center justify-end'>
                    <ul className='flex space-x-5 w-[100%] items-center h-[100%] justify-end text-[17px]'>
                        <li className= 'text-red-500'>Home</li>
                        <li className='hover:text-red-500'>Menu</li>
                        <li className='hover:text-red-500'>Hours</li>
                        <li className='hover:text-red-500'>About us</li>
                        <button className='flex space-x-3 border-[0.2rem] border-red-500 px-[1.5rem] rounded-3xl py-[0.5rem] text-red-500'>
                            <p>Order online</p>
                            <img src="/online.svg" alt="" className='w-[1.3rem]'/>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar