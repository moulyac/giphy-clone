import React from 'react'
import Home from './component/Home'
import {Link, Route} from 'react-router-dom'
import SearchResult from './component/SearchResult'

const App =()=>{
    return <>
     <h1><Link to={'/'}>Giphy</Link></h1>
     
     <Route path={'/'} component={Home} exact={true}/>
     <Route path={`/search/:id`} component={SearchResult} exact={true}/>

    </>
}

export default App
