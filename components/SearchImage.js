import Link from 'next/link';
import React from 'react'

function SearchImage({ results }) {
    console.log("file: SearchImage.js ~ line 4 ~ SearchImage ~ results", results);

    console.log("file: SearchImage.js ~ line 6 ~ SearchImage ~ results.items", results.items[0].pagemap);
    console.log(results.items[0].pagemap.cse_image[0].src)
    // console.log(results.pagemap.cse_image)

    // console.log("file: SearchImage.js ~ line 7 ~ SearchImage ~ results.pagemap", results.pagemap);
    return (
        <div clasName='grid grid-cols sm:grid-cols-2 bg-red-500'>
            {results.items.map((result) => (
                <div className='border border-b-red-500 p-3 flex flex-col items-start'>
                    {result.pagemap.cse_image && (
                        <img className='border border-emerald-600 w-full h-60 object-contain' src={`${result.pagemap.cse_image[0].src} `} alt="img" />
                    )}
                    <Link href={result.link}>{result.title}</Link>

                </div>
            ))}

        </div>
    )
}

export default SearchImage