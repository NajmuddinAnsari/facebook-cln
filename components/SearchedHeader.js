import React, { useRef } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { FaMicrophone } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
function SearchedHeader() {
    const url = useSelector((state) => state.login.profilePic);
    console.log("file: SearchedHeader.js ~ line 9 ~ SearchedHeader ~ url", url);
    const searchedRef = useRef();
    function formHandler(event) {
        event.preventDefault();
        const searched = searchedRef.current.value;

        console.log(searched);
    }

    return (
        <header className='sticky  bg-white flex items-center justify-between   '>
            <div className='flex items-center   md:w-[50%] lg:w-[80%]' >
                <img src="/google.jpg" alt="goole-img" className='h-20 w-auto' />
                <form onSubmit={formHandler} className='ring-1 ring-gray-100 rounded-full shadow-lg hover-shadow-2xl flex items-center p-1 w-full  '>
                    <SearchIcon className='h-5 w-5 text-gray-400 ml-1' />
                    <input type="text " className=' p-1 focus-within:outline-none flex flex-grow  ' ref={searchedRef} />
                    <svg onClick={() => searchedRef.current.value = ''} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <FaMicrophone className='text-blue-500' />
                    <FaSearch className='text-blue-500 m-2 ' onClick={formHandler} />
                </form>
            </div>
            <img src={`${url}`} alt="img" className='h-10 rounded-full mr-6' />

        </header>
    )
}

export default SearchedHeader