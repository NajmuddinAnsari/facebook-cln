import React, { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, UserGroupIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router';
function Body() {
    const inputRef = useRef();
    const router = useRouter();
    function formHandler(event) {
        event.preventDefault();
        const enteredInput = inputRef.current.value;
        console.log(enteredInput);
        router.push('/search');
        if (!enteredInput) {
            return;
        }

    }
    return (
        <form onSubmit={formHandler} className='flex flex-col items-center flex-grow  mt-5'>
            <img src="/google.jpg" alt="goole-img" className='h-48 w-auto' />
            <div className='flex   w-full
             border max-w-sm  md:max-w-md lg:max-w-3xl   border-gray-100 ml-3 rounded-full p-5
            hover:shadow-lg focus-within:lg '>
                <SearchIcon className='h-10 w-10 text-gray-500' />
                <input type="text " ref={inputRef} className='border-gray-300  outline-none flex-grow ' />
                <MicrophoneIcon className='h-10 w-10 text-gray-500 ml-auto' />
            </div>
            {/* <button className='btn'>Google Search</button>
            <button className='btn'>I'm Feeling Lucky</button> */}
        </form>
    )
}

export default Body