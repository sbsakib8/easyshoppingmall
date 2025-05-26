import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
function Menuber() {
  return (
    <div className=" w-[90%] h-[80px] mx-auto hidden lg:block mt-5 z-30 shadow-lg bg-white rounded-lg">
      <div className='flex justify-center gap-4 items-center h-full'>
        <div>
          <Button className='text-black! font-bold! text-[20px]! font-body!'><Link href="/">Home</Link></Button>
        </div>

        <div className="group relative z-50">
          <Button className="!text-black  !text-[18px] font-body!"><Link href="/fashion" className=''>Fashion</Link></Button>
          <div className="absolute left-0 mt-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 bg-white px-4 py-2 shadow-lg">
            <Button className="!text-black font-body!  !text-[16px]  w-full!"><Link href='/men'>Men</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]  w-full! "><Link href='/women'>Women</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]   w-full!"><Link href='/kids'>Kids</Link></Button>
          </div>
        </div>

        <div className="group relative  z-50">
          <Button className="!text-black !text-[18px] font-body!"><Link href="/fashion">Electronics</Link></Button>
          <div className="absolute left-0 mt-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 bg-white px-4 py-2 shadow-lg">
            <Button className="!text-black font-body!  !text-[16px]  w-full!"><Link href='/men'>Men</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]  w-full! "><Link href='/women'>Women</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]   w-full!"><Link href='/kids'>Kids</Link></Button>
          </div>
        </div>
        <div className="group relative  z-50">
          <Button className="!text-black !text-[18px] font-body!"><Link href="/bags">Bags</Link></Button>
          <div className="absolute left-0 mt-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 bg-white px-4 py-2 shadow-lg">
            <Button className="!text-black font-body!  !text-[16px]  w-full!"><Link href='/men'>Men</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]  w-full! "><Link href='/women'>Women</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]   w-full!"><Link href='/kids'>Kids</Link></Button>
          </div>
        </div>

        <div className="group relative  z-50">
          <Button className="!text-black !text-[18px] font-body!"><Link href="/footwear">Footwear</Link></Button>
          <div className="absolute left-0 mt-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 bg-white px-4 py-2 shadow-lg">
            <Button className="!text-black font-body!  !text-[16px]  w-full!"><Link href='/men'>Men</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]  w-full! "><Link href='/women'>Women</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]   w-full!"><Link href='/kids'>Kids</Link></Button>
          </div>
        </div>

        <div className="group relative  z-50">
          <Button className="!text-black !text-[18px] font-body!"><Link href="/beauty">Beauty</Link></Button>
          <div className="absolute left-0 mt-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 bg-white px-4 py-2 shadow-lg">
            <Button className="!text-black font-body!  !text-[16px]  w-full!"><Link href='/men'>Men</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]  w-full! "><Link href='/women'>Women</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]   w-full!"><Link href='/kids'>Kids</Link></Button>
          </div>
        </div>

        <div className="group relative  z-50">
          <Button className="!text-black !text-[18px] font-body!"><Link href="/shop">Shop</Link></Button>
          <div className="absolute left-0 mt-4 space-y-2 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 bg-white px-4 py-2 shadow-lg">
            <Button className="!text-black font-body!  !text-[16px]  w-full!"><Link href='/men'>Men</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]  w-full! "><Link href='/women'>Women</Link></Button>
            <Button className="!text-black font-body!  !text-[16px]   w-full!"><Link href='/kids'>Kids</Link></Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Menuber