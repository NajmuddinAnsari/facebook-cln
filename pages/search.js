import { async } from '@firebase/util'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import SearchedHeader from '../components/SearchedHeader'
import SearchImage from '../components/SearchImage';
import SearchResults from '../components/SearchResults';
import mockData from '../mockData';
function search({ searchedData }) {
    // console.log(searchedData);
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term}-Search-Page</title>
            </Head>
            {/* {header} */}
            <SearchedHeader />
            {router.query.searchType === 'image' ? (
                <SearchImage results={searchedData} />
            ) : (
                <SearchResults results={searchedData} />

            )}
            {/* {web search} */}

        </div>
    )
}
export async function getServerSideProps(context) {
    const boolean = false;
    const startIndex = context.query.start || "1";
    const data = boolean ? mockData : await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC40mTczTaX0aqUN7-p1ceA5BFa73JDjjk&cx=a83a602a38c9f354b&q=${context.query.term}${context.query.searchType && "&searchType=image "}&start=${startIndex}`).then((response) => response.json());
    // console.log(data);
    return {
        props: {
            searchedData: data
        }
    }
}
export default search


// await fetch("AIzaSyC40mTczTaX0aqUN7-p1ceA5BFa73JDjjk")


//    cx=a83a602a38c9f354b