import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '../SearchInput'
import Heart from '@/assets/icons/Heart'
import User from '@/assets/icons/User'
import Cart from '@/assets/icons/Cart'

function Navbar() {
  return (
    <nav className=''>

      <div className='flex items-center justify-between pt-[16px] px-[24px]'>
        <Image
          src='/brand-logo.svg'
          alt='Logo'
          width={109}
          height={50}
          className='h-[50px] w-[109px]'
        />
        <div className='flex items-center gap-[12px]'>
          <SearchInput />
          <Link href='/' className='w-[34px] h-[100%] flex items-center justify-center ml-[8px]'>
            <Heart />
          </Link>
          <Link href='/' className='w-[34px] h-[100%] flex items-center justify-center'>
            <User />
          </Link>
          <Link href='/' className='w-[34px] h-[100%] flex items-center justify-center'>
            <Cart />
          </Link>

        </div>
      </div>
      <div className='w-[100%] flex justify-between items-center px-[8px]'>
        <ul className='flex items-center justify-start text-[16px] font-[500]'>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>New</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Men</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Women</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Kids</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Fandoms</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Golf</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>RSVLTS ORIGINALS</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Accessories</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Restocks</Link>
          </li>

        </ul>
        <ul className='flex items-center justify-start text-[16px] font-[500]'>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Gift Cards</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Field Notes</Link>
          </li>
          <li className='uppercase text-[#000000] flex items-center justify-center p-[8px] text-[14px] text-[#161515] font-[700]'>
            <Link href='/' className='p-[8px] hover:border-b border-[#161515]'>Rewards</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 