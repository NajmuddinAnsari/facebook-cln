import React, { useRef } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { FaMicrophone } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchOptions from './SearchOptions'
function SearchedHeader() {
    const url = useSelector((state) => state.login.profilePic);
    console.log("file: SearchedHeader.js ~ line 11 ~ SearchedHeader ~ url", url);

    const router = useRouter();
    const searchedKey = useSelector((state) => state.login.searched)
    console.log("file: SearchedHeader.js ~ line 10 ~ SearchedHeader ~ searchedKey", searchedKey);
    const searchedRef = useRef();

    function formHandler(event) {
        event.preventDefault();
        const term = searchedRef.current.value;
        if (term.trim().length === 0) {
            return;
        }
        console.log(term);
        router.push(`/search?term=${term.trim()}&searchType=`)
    }

    return (
        <div className='  sticky top-0 '>
            <header className='  bg-white flex items-center justify-between   '>
                <div className='flex items-center   md:w-[50%] lg:w-[80%]' >
                    <Link href="/"><img src="/google.jpg" alt="goole-img" className='h-20 w-auto cursor-pointer' /></Link>
                    <form onSubmit={formHandler} className='ring-1 ring-gray-100 rounded-full shadow-lg hover-shadow-2xl flex items-center p-1 w-full  '>
                        <SearchIcon className='h-5 w-5 text-gray-400 ml-1' />
                        <input type="text " className=' p-1 focus-within:outline-none flex flex-grow  ' ref={searchedRef} />
                        <svg onClick={() => searchedRef.current.value = 'najmuddin'} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <FaMicrophone className='text-blue-500' />
                        <FaSearch className='text-blue-500 m-2 ' onClick={formHandler} />
                    </form>
                </div>
                <img src={`${url}`} alt="img" className='h-10 rounded-full mr-6' />

            </header>
            <SearchOptions />
        </div>
    )
}

export default SearchedHeader