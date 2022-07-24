import React from 'react'
import HTMLReactParser from 'html-react-parser';
import Parser from 'html-react-parser';
import Link from 'next/link';
function SearchResults({ results }) {
    console.log(results);
    return (
        <div className='  ml-28 max-w-2xl'>
            <p className='m-6 text-gray-500 ' >About {results.searchInformation.formattedTotalResults} results  ({results.searchInformation.formattedSearchTime} seconds)</p>
            {results.items.map((result) => (
                <div id={result.link} className='m-7 max-w-xl'>
                    <div className='group'>
                        <Link href={result.link}>{result.link}</Link>

                        <Link href={result.link}><h1 className='text-blue-800 text-xl cursor-pointer group-hover:underline'>{result.title}</h1></Link>
                    </div>
                    <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults