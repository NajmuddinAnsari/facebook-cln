import React from 'react'
import HTMLReactParser from 'html-react-parser';
import Parser from 'html-react-parser';
import Link from 'next/link';
function SearchResults({ results }) {
    console.log(results);
    return (
        <div>
            <p className='m-6'>About {results.searchInformation.formattedTotalResults} results  ({results.searchInformation.formattedSearchTime} seconds)</p>
            {results.items.map((result) => (
                <div id={result.link} className='m-7'>
                    <Link href={result.link}>{ result.displayLink}</Link>
                    <Link href={result.link}><h1 className='text-lg'>{Parser(result.htmlSnippet)}</h1></Link>
                </div>
            ))}
        </div>
    )
}

export default SearchResults