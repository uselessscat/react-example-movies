
import React from 'react';
import { Button } from 'reactstrap';

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
                    <Button color="primary">Detalles</Button>
                </div>
            </div>
        );
    };

}

export default MovieListItem;