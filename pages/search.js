import { async } from '@firebase/util'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import SearchedHeader from '../components/SearchedHeader'
import SearchResults from '../components/SearchResults';
import Response from '../Response';

function search({ searchedData }) {
    // console.log(searchedData);
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term}-Search-Page</title>
            </Head>
            <SearchedHeader />
            <SearchResults results={searchedData} />
        </div>
    )
}
export async function getServerSideProps(context) {
    const modkData = false;
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