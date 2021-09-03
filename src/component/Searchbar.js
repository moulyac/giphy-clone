import React, { useState } from 'react'
import {Link, Route} from 'react-router-dom'
import SearchResult from './SearchResult'

const SearchBar = ()=>{
    const [searchText, setSearchText] = useState('')

    const handleSearchInput = (e)=>{
        setSearchText(e.target.value)
    }

    const searchWord = ()=>{
        console.log(searchText)
    }

    return <>
        <input type='text'  placeholder='Search giphy' value={searchText} onChange={handleSearchInput} />
        <button><Link to={`/search/${searchText}`}>Search</Link></button>
    </>
}

export default SearchBar