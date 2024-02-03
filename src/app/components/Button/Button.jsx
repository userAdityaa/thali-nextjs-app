import React from 'react'
import { Inter } from 'next/font/google'

const inter = ({
    subsets: ['latin'],
    weight: '400',
})

const Button = () => {
  return (
    <button className={`button px-[2rem] py-[1.5rem] ${inter.className} w-[60%] rounded-[3rem] border-[0.1rem] border-black`}>Get direction</button>
  )
}

export default Button