export const addMovie = (movie) => {
    return {
        type : 'ADD_MOVIE',
        payload : movie
    }
}

export const removeMovie = (id) => {
    return {
        type : 'REMOVE_MOVIE',
        payload : id
    }
}

// export const search = (input) => {
//     return {
//         type : 'SEARCH',
//         payload : input
//     }
// }