
import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            movieDetails: props.movieDetails
        };
    }

    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='xl'>
                <ModalHeader toggle={this.props.showModal}>
                    {this.state.movieDetails.Title} <small>({this.state.movieDetails.Year})</small>
                </ModalHeader>
                <ModalBody>
                    <div class="row">
                        <div class="col-6"><img src={this.state.movieDetails.Poster} class="card-img-top"></img></div>
                        <div class="col-6">
                            <div class="row"><div class="col-3">Title:</div><div class="col-9">{this.state.movieDetails.Title}</div></div>
                            <div class="row"><div class="col-3">Year:</div><div class="col-9">{this.state.movieDetails.Year}</div></div>
                            <div class="row"><div class="col-3">Rated:</div><div class="col-9">{this.state.movieDetails.Rated}</div></div>
                            <div class="row"><div class="col-3">Released:</div><div class="col-9">{this.state.movieDetails.Released}</div></div>
                            <div class="row"><div class="col-3">Runtime:</div><div class="col-9">{this.state.movieDetails.Runtime}</div></div>
                            <div class="row"><div class="col-3">Genre:</div><div class="col-9">{this.state.movieDetails.Genre}</div></div>
                            <div class="row"><div class="col-3">Director:</div><div class="col-9">{this.state.movieDetails.Director}</div></div>
                            <div class="row"><div class="col-3">Writer:</div><div class="col-9">{this.state.movieDetails.Writer}</div></div>
                            <div class="row"><div class="col-3">Actors:</div><div class="col-9">{this.state.movieDetails.Actors}</div></div>
                            <div class="row"><div class="col-3">Plot:</div><div class="col-9">{this.state.movieDetails.Plot}</div></div>
                            <div class="row"><div class="col-3">Language:</div><div class="col-9">{this.state.movieDetails.Language}</div></div>
                            <div class="row"><div class="col-3">Country:</div><div class="col-9">{this.state.movieDetails.Country}</div></div>
                            <div class="row"><div class="col-3">Awards:</div><div class="col-9">{this.state.movieDetails.Awards}</div></div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        )
    };
}

export default MovieDetails;
