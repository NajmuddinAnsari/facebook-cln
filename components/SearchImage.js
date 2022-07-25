import React from 'react'

function SearchImage({ results }) {
    console.log("file: SearchImage.js ~ line 4 ~ SearchImage ~ results", results);
    // console.log(results.pagemap.cse_image)
    
    console.log("file: SearchImage.js ~ line 7 ~ SearchImage ~ results.pagemap", results.pagemap);
    return (
        <div>
            <h1>searched images</h1>
            
        </div>
    )
}

export default SearchImage