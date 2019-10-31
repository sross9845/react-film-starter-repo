import React, { Component } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props);
        this.setState = ({ 
        })
    }
    handleClick= (e) => {
        e.stopPropagation()
        this.props.onFaveToggle()
    }
    render() { 
        var text = this.props.isFave ? "remove_from_queue" : "add_to_queue"
        var classes = `film-row-fave ${text}`
        return (  
            <div onClick={this.handleClick} className={classes}>
                <p className="material-icons">{text}</p>
            </div>
        );
    }
}
 
export default Fave;