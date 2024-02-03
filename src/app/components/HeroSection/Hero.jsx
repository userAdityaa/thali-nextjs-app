'use client'


import React from 'react'
import { useState } from 'react'
import { Bungee } from 'next/font/google'
import { Inter } from 'next/font/google'

const bungee = Bungee({
    subsets: ['latin'], 
    weight: '400'
})

const inter = Inter({
    subsets: ['latin'], 
    weight: '200',
})


const Hero = () => {
     
    const [currentContent, setCurrentContent] = useState(1);

   

    const handlePrevClick = () => {
        setCurrentContent((prevContent) => Math.max(prevContent - 1, 1));
      };
    
      const handleNextClick = () => {
        setCurrentContent((prevContent) => Math.min(prevContent + 1, 3));
      };


  return (
    <div className='h-[110vh] bg-[#f0eada]'>
        <div className='mt-[16vh] flex justify-between w-[95%] mx-auto'>
            <div className='flex flex-col mt-[15vh] w-[50%]'>
                <p className = {`${bungee.className} text-red-500 text-[80px] mb-[1.2rem] w-[65%] leading-[5.2rem]`}>
                food,
                flavor &
                variety.
                </p>

                <p className='mb-[3rem]'>At Thali, we specialize in authentic Nepali and Indian cuisine, offering a rich tapestry of flavors that celebrate the vibrant culinary traditions of these regions. Our menu is a carefully curated collection of dishes, each crafted with a blend of traditional spices and contemporary culinary techniques. Experience the warmth of our hospitality and the diversity of our flavors, as we bring you the very essence of Nepali and Indian dining.</p>

                <button className={`bg-red-500 px-[2rem] py-[1.7rem] text-white ${inter.className} rounded-[6rem] w-[30%] flex space-x-1`}>
                    <p>View Our Menu</p>
                    <img src="/white_arrow.svg" alt="" className='h-[1.5rem] w-[1.5rem]'/>
                </button>
            </div>

            {/* Image Section:  */}


            <div className='bg-[#f4b53f] h-[110vh] w-[50%] rounded-[5rem]'>
                <div className='w-[80%] mx-auto mt-[6rem] h-[80%]'>
                    <div className='w-[48%] leading-[3rem] h-[100%]'>
                            {currentContent === 1 &&
                            <div>
                                <div className='flex flex-col'>
                                    <p className={`${bungee.className} text-[#48292d] text-[40px] mb-[1rem]`}>Veggie Thali</p>
                                    <p className={`leading-[1.5rem] ${inter.className} text-[#333333] text-[18px]`}>Aaloo bhindi, cauliflower & potatoes, mustard greens, yellow lentil soup, cucumber salad, gulaab jamun</p>
                                </div>

                                <img src="/veg.png" alt="" className='h-[65%] w-[47.5%] absolute right-[2.3rem] rounded-[5rem] top-[30rem]'/>
                            </div>
                                                        
                            }
                            {currentContent === 2 && 
                            <div>
                            <div className='flex flex-col'>
                                <p className={`${bungee.className} text-[#48292d] text-[40px] mb-[1rem]`}>Chicken Tikka Masala</p>
                                <p className={`leading-[1.5rem] ${inter.className} text-[#333333] text-[18px]`}>Tandoor grilled chicken marinated with yogurt and spices and simmered in a robust creamy sauce of tomatoes and cream.</p>
                            </div>

                            <img src="/chicken.png" alt="" className='h-[65%] w-[47.5%] absolute right-[2.3rem] rounded-[5rem] top-[30rem]'/>
                            </div>
                            }
                            {currentContent === 3 && 
                            <div>
                            <div className='flex flex-col'>
                                <p className={`${bungee.className} text-[#48292d] text-[40px] mb-[1rem]`}>Shrimp Thali</p>
                                <p className={`leading-[1.5rem] ${inter.className} text-[#333333] text-[18px]`}>Shrimp, mixed veggie curry, mustard greens, black lentil soup, pickled radish salad, lentil crackers, rice, gulaab jamun.</p>
                            </div>

                            <img src="/Shrimp.png" alt="" className='h-[65%] w-[47.5%] absolute right-[2.3rem] rounded-[5rem] top-[30rem]'/>
                            </div>
                            }
                    </div>  
                    <div className='flex space-x-5 absolute top-[13.8rem] right-[7rem]'>
                        <button onClick={handlePrevClick} className='border-amber-900 rounded-full border-[0.2rem] h-[3.5rem] w-[3.5rem] flex items-center justify-center'>
                            <img src="/brown_left.svg" alt="" className='h-[2rem] hover:translate-x-[-0.7rem] transition-all duration-500'/>
                        </button>
                        <button onClick={handleNextClick} className='border-amber-900 rounded-full border-[0.2rem] h-[3.5rem] w-[3.5rem] flex items-center justify-center'>
                            <img src="/brown_right.svg" alt="" className='h-[2rem] hover:translate-x-[0.7rem] transition-all duration-500'/>
                        </button>
                    </div>


                    <div>
                        <div className={` ${currentContent == 1 ? 'bg-[#000000]' : 'bg-[#222222] opacity-40' } absolute top-[18.5rem] right-[12.8rem] h-[1rem] w-[1rem] rounded-full`}></div>
                        <div className={` ${currentContent == 2 ? 'bg-[#000000]' : 'bg-[#222222] opacity-40' } absolute top-[18.5rem] right-[10.8rem] h-[1rem] w-[1rem] rounded-full`}></div>
                        <div className={` ${currentContent == 3 ? 'bg-[#000000]' : 'bg-[#222222] opacity-40' } absolute top-[18.5rem] right-[8.8rem] h-[1rem] w-[1rem] rounded-full`}></div>
                    </div>
                </div>
            </div>

        </div>
    </div>  
  )
}

export default Hero