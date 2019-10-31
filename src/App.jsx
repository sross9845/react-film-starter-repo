import React, { Component } from 'react';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import TMDB from './TMDB'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      films: TMDB.films,
      current: null
     }
  }
  handleDetailsClick = (film) => {
    console.log('Handling details click', film.title)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios.get(url).then(response => {
      this.setState({
        current: response.data
      })
    })
  }
  render() { 
    return ( 
      <div className="film-library">
        <FilmListing handleDetailsClick={this.handleDetailsClick} films={this.state.films}/>
        <FilmDetails film={this.state.current}/>
      </div>
    );
  }
}

export default App;




