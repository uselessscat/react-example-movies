import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);

        this.showDetailsHandler = this.showDetailsHandler.bind(this)
    }

    render() {
        return (
            <Card>
                <img src={this.props.movie.Poster} className="card-img-top" alt={'Imagen ' + this.props.movie.Title}></img>
                <CardBody>
                    <CardTitle tag="h5">
                        {this.props.movie.Title} ({this.props.movie.Year})
                    </CardTitle>
                    <CardText>

                    </CardText>
                    <Button color="primary" onClick={this.showDetailsHandler.bind(this, this.props.movie.imdbID)}>Detalles</Button>
                </CardBody>
            </Card>
        );
    };

    showDetailsHandler(id, e) {
        this.props.onShowDetailsHandler(id, e.target.value);
    }
}

export default MovieListItem;