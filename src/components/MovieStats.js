import React from 'react'
import {useSelector} from 'react-redux'

const MovieStats = (props) => {
    const movies = useSelector((state) => {
        return state.movies
    })

    const topRatedMovie = () => {
        let maxRank = movies[0].rank
        let topRankMovie = movies[0].name

        for(let i = 1; i < movies.length; i++){
            if(maxRank > movies[i].rank){
                maxRank = movies[i].rank
                topRankMovie = movies[i].name
            }
        }
        
        return topRankMovie
    }

    return (
        <div className="border rounded shadow p-3 mb-5 bg-white rounded">
            <h3> Movie Stats </h3>
            <p>Total Movies - {movies.length} </p>
            {movies.length > 0 ? <b># {topRatedMovie()}</b> : <p># --- </p>}
        </div>
    )
}

export default MovieStats