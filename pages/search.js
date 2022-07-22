import { async } from '@firebase/util'
import React from 'react'
import SearchedHeader from '../components/SearchedHeader'
import Response from '../Response';

function search(props) {
    console.log(props.searchedData);
    return (
        <div>
            <SearchedHeader />

            <h1>its now working</h1>
        </div>
    )
}
export async function getServerSideProps(context) {
    const modkData = true;
    const data = modkData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC40mTczTaX0aqUN7-p1ceA5BFa73JDjjk&cx=a83a602a38c9f354b&q=${context.query.term}${context.query.searchType && "&searchType=image"}`).then((response) => response.json());
    return {
        props: {
            searchedData: data
        }
    }
}
export default search


// await fetch("AIzaSyC40mTczTaX0aqUN7-p1ceA5BFa73JDjjk")


//    cx=a83a602a38c9f354b