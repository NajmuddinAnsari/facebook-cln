import React, { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, UserGroupIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { loginActions } from '../store';
import { useDispatch } from 'react-redux';
function Body() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const router = useRouter();
    function formHandler(event) {
        event.preventDefault();
        const term = inputRef.current.value;
        
        if (term.trim().length === 0) {
            return;
        }
        // router.push(`/search?term=${term.trim()}`);  first step
        router.push(`/search?term=${term.trim()}&searchType=`)
        dispatch(loginActions.Login(term))

    }
    return (
        <form onSubmit={formHandler} className='flex flex-col items-center flex-grow  mt-5'>
            <img src="/google.jpg" alt="goole-img" className='h-48 w-auto' />
            <div className='flex   w-full
             border max-w-sm  md:max-w-md lg:max-w-3xl   border-gray-100 ml-3 rounded-full p-3
            hover:shadow-lg focus-within:lg ring-1
            ring-gray-300'>
                <SearchIcon className='h-7 w-7 text-gray-700' />
                <input type="text " ref={inputRef} className='border-gray-300  outline-none flex-grow ' />
                <MicrophoneIcon className='h-7 w-7 text-gray-700 ml-auto' />
            </div>
            <div className='flex gap-5 mt-5'>
                <button className='btn'>I'm Feeling Lucky</button>
                <button className='btn'>Google Search</button>
            </div>
        </form>
    )
}

export default Body