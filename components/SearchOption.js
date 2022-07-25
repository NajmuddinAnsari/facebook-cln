import { useRouter } from 'next/router'
import React from 'react'
import { FaRegObjectUngroup } from 'react-icons/fa';

function SearchOption({ title, Icon, selected }) {
    const router = useRouter();
    function tabHandler() {
        // router.push(`/search?term=${term.trim()}&searchType=`)
        // router.push(`/search?term=${}`)
        router.push(`/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`)
    }
    return (
        <div onClick={tabHandler} className={`flex space-x-1 border-b-4 pb-3 hover:text-blue-500 border-transparent hover:border-blue-500 cursor-pointer ${selected && "text-blue-500 border-blue-500 "}`}>

            <Icon className="h-4" />
            <p>{title}</p>
        </div>
    )
}

export default SearchOption