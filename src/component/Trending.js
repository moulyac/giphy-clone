import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Trending = ()=>{
    const [trendingGifs, setTrendingGifs] = useState([])

    useEffect(()=>{
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=R28DIWug0aBfGQUzDBiRZN1xHQpAyedl')
            .then((response)=>{
                //console.log(response.data.data)
                const data = response.data.data
                setTrendingGifs(data)
            })
        // loadData()
    },[])
    // const loadData = async ()=>{
    //     const response =await fetch('https://api.giphy.com/v1/gifs/trending?api_key=R28DIWug0aBfGQUzDBiRZN1xHQpAyedl')
    //     const data = response
    //     console.log(data)
    // }
    return <>
    <h1>Trending</h1>
        { trendingGifs &&
            trendingGifs.map((gif)=>{
                const image = gif.images.original
                return <img src={image.url} width='50px' height='50px'/>
            })
        }
    </>
}

export default Trending