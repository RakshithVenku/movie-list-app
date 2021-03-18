import React from 'react'
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'

const MoviesContainer = (props) => {

    return (
        <div className="row">

            <div className="col-md-7">
               <MoviesList/>
            </div>
            
            <div className="col-md-4">
               <MovieForm />
               <MovieStats />
            </div>
        </div>
    )
}

export default MoviesContainer