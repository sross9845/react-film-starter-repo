import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() { 
        var posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return (
            <div onClick={this.props.handleDetailsClick} className="film-row">
                <FilmPoster posterUrl={posterUrl}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.substring(0,4)}</p>
                </div> 
                <Fave isFave={this.props.isFave} onFaveToggle={() => this.props.onFaveToggle(this.props.film)}/>
            </div>
        );
    }
}

export default FilmRow;