
import React from 'react';
import { Button } from 'reactstrap';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);

        this.showDetailsHandler = this.showDetailsHandler.bind(this)
    }

    render() {
        return (
            <div class="card">
                <img src={this.props.movie.Poster} class="card-img-top" alt={'Imagen ' + this.props.movie.Title}></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.movie.Title} ({this.props.movie.Year})</h5>
                    <p class="card-text"></p>
                    <Button color="primary" onClick={this.showDetailsHandler.bind(this, this.props.movie.imdbID)}>Detalles</Button>
                </div>
            </div>
        );
    };

    showDetailsHandler(id, e) {
        this.props.onShowDetailsHandler(id, e.target.value);
    }
}

export default MovieListItem;