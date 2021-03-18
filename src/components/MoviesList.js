import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {sortBy} from 'lodash'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    const [input, setInput] = useState('')
    const [option, setOption] = useState('')

    let movies = useSelector((state) => {
        return state.movies
    })

    //sortBy functionality
    const handleOptionChange = (e) => {
        setOption(e.target.value)
    }

    if(option === 'name'){
        movies =  sortBy(movies, [function(movie) { return movie.name }])
    }else if(option === 'rank'){
        movies =  sortBy(movies, [function(movie) { return movie.rank }])
    }

    //search functionality
    const handleSearchChange = (e) => {
        setInput(e.target.value)
    }

    if(input.length>0){
        movies = movies.filter((movie)=>{
        return movie.name.toLowerCase().match(input.toLowerCase())
        })
    }

    return (
        <div className="col">

            <div className='row'>
                <input className="form-control shadow-sm" 
                       style={{width: '53%', marginRight : '25px'}}
                       type = "text" 
                       placeholder = "Search by name..." 
                       onChange = {handleSearchChange} 
                       value = {input}
                />
                <select style={{width : '20%'}}  className="form-control  shadow-sm"  value={option} onChange={handleOptionChange} >
                    <option value="">order by</option>
                    <option value="name">name</option>
                    <option value="rank">rank</option>
                </select>
            </div>
            

            <div className="row">
               {movies.map((ele) => {
                   return <MovieCard key={ele.id} {...ele} />
               })}
            </div>
        </div>
    )
}

export default MoviesList