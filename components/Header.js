import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ViewGridIcon } from '@heroicons/react/solid'
function Header() {
    return (
        <header className='flex justify-between p-4 text-gray-600 items-center' >
            {/* {left} */}
            <div className='flex gap-5'>
                <p><Link href={'#'} >About</Link></p>
                <p><Link href={'#'} >Store</Link></p>
            </div>
            {/* {right} */}
            <div className='flex gap-5 items-center'>
                <p><Link href={'#'} >Gmail</Link></p>
                <p><Link href={'#'} >Images</Link></p>
                
                <ViewGridIcon className="h-10 w-10 text-gray-500 hover:bg-gray-100 rounded-full cursor-pointer p-1" />
                <img src="prop.png" alt="profile-pic " className='h-9 rounded-full cursor-pointer transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-300 ' />
            </div>

        </header>
    )
}

export default Header