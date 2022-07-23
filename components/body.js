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
                {/* <MicrophoneIcon className='h-7 w-7 text-gray-700 ml-auto' /> */}
                <svg className="goxjub h-7" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
            </div>
            <div className='flex gap-5 mt-5'>
                <button className='btn'>I'm Feeling Lucky</button>
                <button className='btn'>Google Search</button>
            </div>
        </form>
    )
}

export default Body