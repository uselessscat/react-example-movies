
import React from 'react';

class MovieSearcher extends React.Component {
    render() {
        return (
            <input type="text" onChange={this.props.changeEvent}></input>
        );
    };
}

export default MovieSearcher;