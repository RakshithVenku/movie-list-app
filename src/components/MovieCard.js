import React from 'react'
import {useDispatch} from 'react-redux'
import {removeMovie} from '../actions/moviesAction'

const MovieCard = (props) => {
    const dispatch = useDispatch()
    const {id, name, rank} = props

    const handleRemove = (id) => {
        dispatch(removeMovie(id))
    }

    return (
        <div className="card shadow-sm" style={{width: "15rem", margin : '10px 10px 10px 0px'}}>
            
            <div className="row card-body">
               <img src="https://via.placeholder.com/130" alt=""></img>
               <div style={{marginLeft : '30px'}}>
                   <p>{name}</p>
                   <p>#{rank}</p>
                   <button className="btn btn-danger btn-sm" onClick={() => {handleRemove(id)}}>remove</button>
               </div>
            </div>
            
        </div>
    )
}

export default MovieCard