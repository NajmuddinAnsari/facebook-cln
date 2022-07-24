import React from 'react'
import SearchOption from './SearchOption'
import { SearchIcon, ServerIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { PhotographIcon } from "@heroicons/react/outline";
function SearchOptions() {
    const router = useRouter();
    return (
        <div className='flex pl-6 gap-20 text-sm   items-center border-b-2 md:pl-36'  >
            <SearchOption title="App" Icon={SearchIcon} selected={router.query.searchType === '' || !router.query.searchType} />
            <SearchOption title="Images" Icon={PhotographIcon} selected={router.query.searchType === 'image'} />

        </div>
    )
}

export default SearchOptions