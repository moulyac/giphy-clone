import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = ()=>{
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        axios.get(('https://api.giphy.com/v1/gifs/categories?api_key=R28DIWug0aBfGQUzDBiRZN1xHQpAyedl'))
            .then((response)=>{
                //console.log('categories',response.data.data)
                setCategories(response.data.data)
            })
    },[])
    return<>
    <h1>Categories</h1>
    {
        categories &&
        categories.map((category)=>{
            return<><img src={category.gif.images.original.url} width='50px' height='50px'/>
            <p style={{display:'inline'}}>{category.name}</p>
            </>
        })
    }
    </>
}

export default Categories