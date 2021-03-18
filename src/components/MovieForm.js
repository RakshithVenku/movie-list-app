import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from '../actions/moviesAction'

const MovieForm = (props) => {
    const dispatch = useDispatch()
    const [movieName, setMovieName] = useState('')
    const [rank, setRank] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const runValidations = () => {
        //movieName
        if(movieName.trim().length === 0){
            errors.movieName = 'movie name cannot be blank'
        }
        //rank
        if(rank.trim().length === 0){
            errors.rank = 'rank cannot be blank'
        }
    }

    const handleMovieNameChange = (e) => {
        setMovieName(e.target.value)
    }

    const handleRankChange = (e) => {
        setRank(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const movie = {
                id : Number(new Date()),
                name : movieName,
                rank : Number(rank)
            }
    
            dispatch(addMovie(movie))
    
            console.log('movie', movie)
    
            setMovieName('')
            setRank('')
        }else {
            console.log('form errors', errors)
            setFormErrors(errors)
        }
        
    }

     return (
         <div className="shadow p-3 mb-5 bg-white rounded" style={{marginBottom : '60px'}}>
             <h3>Add Movie</h3>

             <form onSubmit={handleSubmit}>
                 <div className="form-group">
                     <input type="text" className="form-control" placeholder="Enter movie name" value={movieName} onChange={handleMovieNameChange} /> 
                     { formErrors.movieName && <span  className="text-danger"> {formErrors.movieName} </span> }
                 </div>
                 
                 <div className="form-group" style={{marginBottom : '20px'}}>
                     <input type="text" className="form-control" placeholder="IMDB Ranking" value={rank} onChange={handleRankChange} />
                     { formErrors.rank && <span  className="text-danger"> {formErrors.rank} </span> }
                 </div>
                 
                 <button className="btn btn-primary btn-sm" type="submit">Add</button>
             </form>
    
         </div>
     )
}

export default MovieForm