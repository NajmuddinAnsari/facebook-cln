import { data } from 'autoprefixer'
import React from 'react'

function Footer() {
    return (
        <footer className='absolute bottom-0 left-1/2 whitespace-nowrap p-4 translate-x-[-50%] text-gray-500'>
            <h1>Copyright &copy; {new Date().getFullYear()} najmuddin ansari</h1>
        </footer>
    )
}

export default Footer