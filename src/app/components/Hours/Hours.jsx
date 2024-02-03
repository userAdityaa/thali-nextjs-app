'use client'


import React from 'react'
import { Bungee } from 'next/font/google'
import { useState } from 'react'
import {Inter} from 'next/font/google'
import Button from '../Button/Button'

const inter = Inter({
    subsets: ['latin'], 
    weight: '500',
})

const bungee = Bungee({
    subsets: ['latin'], 
    weight: '400'
})


const Hours = () => {

    const [currentContent, setCurrentContent] = useState(1);


    
  return (
    <div className='h-[100vh] bg-[#f0eada] w-screen mt-[15vh]'>
        <div className='w-[95%] mx-auto'>
            <p className={`${bungee.className} text-[80px] text-red-500`}>Hours & locations</p>

            <div className='flex w-[100%] mt-[2rem]'>
                <div className='w-[40%] flex flex-col space-y-2'>
                    <div className={`${currentContent == 1 ? 'bg-[#f4b53f] translate-x-5 duration-500 border-[0.2rem] border-[#48292d] border-r-[1.47rem]' : 'bg-[#00000000] border-[0.2rem] border-[#f4b53f]'} rounded-l-[3rem] w-[100%] h-[4rem] flex items-center border-r-0`} onClick={() => {
                        setCurrentContent(1)
                    }}>
                        <p className={`${inter.className} ml-[4rem] text-[26px] text-[#48292d]`}>Thali</p>
                    </div>
                    <div className={`${currentContent == 2 ? 'bg-[#f4b53f]  translate-x-5 duration-500 border-[0.2rem] border-[#48292d] border-r-[1.47rem]' : 'bg-[#00000000]'} rounded-l-[3rem] w-[100%] h-[4rem] flex items-center border-[0.2rem] border-[#f4b53f]  border-r-0`} onClick={() => {
                        setCurrentContent(2)
                    }}>
                        <p className={`${inter.className} ml-[4rem] text-[26px] text-[#48292d]`}>Gorkha</p>
                    </div>
                    <div className={`${currentContent == 3 ? 'bg-[#f4b53f]  translate-x-5 duration-500 border-[0.2rem] border-[#48292d] border-r-[1.47rem]' : 'bg-[#00000000]'} rounded-l-[3rem] w-[100%] h-[4rem] flex items-center border-[0.2rem] border-[#f4b53f]  border-r-0`}onClick={() => {
                        setCurrentContent(3)
                    }} >
                        <p className={`${inter.className} ml-[4rem] text-[26px] text-[#48292d]`}>Momo</p>
                    </div>
                </div>

                {currentContent == 1 && 
                <div className='w-[60%] bg-[#f4b53f] h-[130vh] rounded-b-[3rem] z-50'>
                        
                            <div className='w-[95%] mx-auto h-[100%] flex flex-col mt-[2rem]'>
                                <div className='bg-white h-[30%] flex'>
                                    <img src="/thali_first.jpg" alt="" className='w-[50%]' />

                                    <div className='flex flex-col w-[45%] mx-auto mt-[1rem] mb-[2rem]'>
                                        <p className={`${bungee.className} text-[#48292d] text-[33px]`}>Thali</p>
                                        <p className={`text-[#8d8a8a] ${inter.className} mb-[1rem] `}>7850 Market Blvd, Chanhassen, MN 55317phone: ‭(952) 381-9048</p>
                                        <p className='text-red-500 mb-[2rem]'>www.thaliwalakitchen.com</p>
                                        <Button/>
                                        
                                    </div>  
                                </div>

                                <div className='w-[45%] mx-auto h-auto mt-[2rem]'>
                                    <p className={`${bungee.className} text-[25px] text-center flex flex-wrap text-[#48292d]`}>
                                    Sunday 
                                    <br />
                                    11:00 am - 9:00 Pm
                                    <br />
                                    <br />

                                    Monday
                                    <br />
                                    11:00 Am - 2:00 pm
                                    4:30 pm - 9:00 pm

                                    <br />
                                    <br />

                                    Tuesday
                                    <br />
                                    Closed
                                    <br />
                                    <br />
                                    ‍
                                    Wednesday & Thursday
                                    11:00 am - 2:00 pm
                                    4:30 Pm - 9:00 Pm

                                    <br /><br />

                                    Friday & Sat
                                    <br />
                                    11:00 am - 9:00 Pm
                                    <br />
                                    </p>
                                </div>
                            </div>
                        
                </div>  
                }   


{currentContent == 2 && 
                <div className='w-[60%] bg-[#f4b53f] h-[100vh] rounded-b-[3rem] z-50'>
                        
                            <div className='w-[95%] mx-auto h-[100%] flex flex-col mt-[2rem]'>
                                <div className='bg-white h-[40%] flex'>
                                    <img src="/thali_second.jpg" alt="" className='w-[50%]' />

                                    <div className='flex flex-col w-[45%] mx-auto mt-[1rem] mb-[2rem]'>
                                        <p className={`${bungee.className} text-[#48292d] text-[33px]`}>Gorkha Palace</p>
                                        <p className={`text-[#8d8a8a] ${inter.className} mb-[1rem] `}>23 4th St NE, Minneapolis, MN 55414
phone: (612) 886-3451‬
</p>
                                        <p className='text-red-500 mb-[2rem]'>www.gorkhapalace.com</p>
                                        <Button/>
                                        
                                    </div>  
                                </div>

                                <div className='w-[45%] mx-auto h-auto mt-[2rem]'>
                                    <p className={`${bungee.className} text-[25px] text-center flex flex-wrap text-[#48292d]`}>
                                    Sunday
                                    <br />
                                    4:30 pm - 9:00 pm
                                    <br /><br />

                                    Monday - Thursday
                                    <br />
                                    11:00 am - 2:00 pm
                                    4:30 Pm - 9:00 Pm
                                    <br /><br />

                                    Friday & Sat
                                    <br />
                                    11:00 am - 2:00 pm
                                    4:30 Pm - 9:00 Pm
                                    <br />
                                    </p>

                                </div>
                            </div>
                        
                </div>  
                }  


{currentContent == 3 && 
                <div className='w-[60%] bg-[#f4b53f] h-[90vh] rounded-b-[3rem] z-50'>
                        
                            <div className='w-[95%] mx-auto h-[100%] flex flex-col mt-[2rem]'>
                                <div className='bg-white h-[45%] flex'>
                                    <img src="/thali_three.jpg" alt="" className='w-[50%]' />

                                    <div className='flex flex-col w-[45%] mx-auto mt-[1rem] mb-[2rem]'>
                                        <p className={`${bungee.className} text-[#48292d] text-[33px] leading-[2.5rem] mb-[0.8rem]`}>Midtown Momo:dosa</p>
                                        <p className={`text-[#8d8a8a] ${inter.className} mb-[1rem] `}>920 E Lake St, Minneapolis, MN 55407
phone: 612) 886-1681‬
</p>
                                        <p className='text-red-500 mb-[2rem]'>www.momodosa.com</p>
                                        <Button/>
                                        
                                    </div>  
                                </div>

                                <div className='w-[36%] mx-auto h-auto mt-[2rem]'>
                                    <p className={`${bungee.className} text-[25px] text-center flex flex-wrap text-[#48292d]`}>
                                    Sunday
                                    <br />
                                    11:00 am - 6:00 pm
                                    <br /><br />

                                    Monday - Thursday
                                    <br />
                                    10:00 am - 8:00 pm
                                    <br /><br />

                                    Friday & Sat
                                    <br />
                                    10:00 am - 8:00 pm
                                    <br />
                                    </p>

                                </div>
                            </div>
                        
                </div>  
                }  
            </div>
        </div>
    </div>
  )
}

export default Hours