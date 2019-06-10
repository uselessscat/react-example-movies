
import React from 'react';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card">
                <img src={this.props.movie.Poster} class="card-img-top"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.movie.Title} ({this.props.movie.Year})</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        );
    };

}

export default MovieListItem;