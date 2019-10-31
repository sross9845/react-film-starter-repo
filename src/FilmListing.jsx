import React, {Component} from 'react'
import FilmRow from './FilmRow'

class FilmListing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: 'all',
            faves: []
         }
    }
    handleFilterClick = (filter) => {
        console.log('handling filter click', filter)
        this.setState({
            filter
        })
    }
    handleFaveToggle = (film) => {
        console.log('Fave click')
        var favesCopy = [...this.state.faves]
        var filmIndex = favesCopy.indexOf(film)
        if (filmIndex === -1){
            favesCopy.push(film)
        } else {
            favesCopy.splice(filmIndex, 1)
        }
        this.setState({
            faves: favesCopy
        })
    }
    render() { 
        var filmsToRender = this.state.filter === 'all' ? this.props.films : this.state.faves
        var allFilms = filmsToRender.map((film) => (
            <FilmRow  
            onFaveToggle={this.handleFaveToggle} 
            key={film.id} 
            film={film}
            isFave={this.state.faves.includes(film)}
            handleDetailsClick={() => this.props.handleDetailsClick(film)}
            />
        ))  
        return ( 
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className='film-list-filters'>
                <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter${this.state.filter === 'all' ? ' is-active' : ''}`}>
                    ALL
                    <span className='section-count'>{this.props.films.length}</span>
                </div>
                <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter${this.state.filter === 'faves' ? ' is-active' : ''}`}>
                    FAVES
                    <span className='section-count'>{this.state.faves.length}</span>
                </div>
                </div>
                {allFilms}
            </div>
        );
    }
}

 
export default FilmListing;