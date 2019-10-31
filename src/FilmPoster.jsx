import React, { Component } from 'react';

class FilmPoster extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <img src={this.props.posterUrl} alt="film poster"/>
          );
    }
}
 
export default FilmPoster;