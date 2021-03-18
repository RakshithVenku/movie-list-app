import React from 'react' 
import MoviesContainer from './components/MoviesContainer'

const App = (props) => {

  return (
    <div className="container">
        <h1>My Big Movie List</h1>
        <MoviesContainer />
    </div>
  )
}

export default App