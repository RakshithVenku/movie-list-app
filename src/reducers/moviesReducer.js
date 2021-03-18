const moviesInitialState = []

const moviesReducer = (state = moviesInitialState, action) => {
    switch(action.type){
        case 'ADD_MOVIE' : {
            return [...state, {...action.payload}]
        }
        case 'REMOVE_MOVIE' : {
            return state.filter(ele => ele.id !== action.payload)
        }
        // case 'SEARCH' : {
        //     return state.filter(movie => movie.name.toLowerCase().match(action.payload))
        // }
        default : {
            return [...state]
        }
    }
}

export default moviesReducer