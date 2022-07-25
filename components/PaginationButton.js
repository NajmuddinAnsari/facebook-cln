import Link from 'next/link'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';
import { FaRegObjectUngroup } from 'react-icons/fa';

function PaginationButton() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 1;
    function btnHandler() {
        router.push(`/search?term?=${router.query.term}&searchType=${router.query.searchType
            }&start=${startIndex + 10}`)
    }
    return (
        <div className='flex px-6 justify-around'>

            {startIndex > 10 && <div className='group cursor-pointer' onClick={btnHandler}>
                <ChevronLeftIcon className='h-6 text-blue-500' />
                <h1 className='group-hover:underline decoration-blue-500 text-blue-500 '>Privous</h1>

            </div>}
            {startIndex < 91 && <div className='group cursor-pointer' onClick={btnHandler}>
                <ChevronRightIcon className='h-6 text-blue-500' />
                <h1 className='group-hover:underline decoration-blue-500 text-blue-500 '>Next</h1>

            </div>}
        </div>
    )
}

export default PaginationButton