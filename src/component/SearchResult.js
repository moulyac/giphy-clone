import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBar from './Searchbar'

const SearchResult = (props)=>{

    const searchWord = props.match.params.id
    console.log( searchWord)

    const [channels, setChannels] = useState([])
    const [gifs, setGifs] =useState([])

    useEffect(()=>{
        axios.get(`https://api.giphy.com/v1/channels/search?api_key=R28DIWug0aBfGQUzDBiRZN1xHQpAyedl&q=${searchWord}`)
        .then((response)=>{
            //console.log('cha',response.data.data)
            const data = response.data.data
            setChannels(data)
        })

        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=R28DIWug0aBfGQUzDBiRZN1xHQpAyedl&q=${searchWord}`)
        .then((response)=>{
            console.log(response.data.data)
            const data = response.data.data
            setGifs(data)
        })
    },[searchWord])
    return<>
        <SearchBar/>
        <h1>channels</h1>
        {
            channels && 
            channels.map((channel)=>{
                return <>
                    <img key={channel.id} src={channel.user.avatar_url} width='50px' height='50px' alt='Not found' />
                    <p style={{display:'inline'}}> {channel.user.display_name}  @{channel.user.username} </p>
                </>
            })
        }

        <h1>Gifs</h1>

        {
            gifs &&
            gifs.map((gif)=>{
                return<>
                    <img key={gif.id} src={gif.images.original.url} height='50px' width='50px' alt='Not found' />
                </>
            })
        }

    </>
} 

export default SearchResult
