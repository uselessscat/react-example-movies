
import React from 'react';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class MovieDetails extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className} size='xl'>
                <ModalHeader toggle={this.props.toggleModal}>
                    {this.props.movieDetails.Title} <small>({this.props.movieDetails.Year})</small>
                </ModalHeader>
                <ModalBody>
                    <div class="row">
                        <div class="col-6"><img src={this.props.movieDetails.Poster} class="card-img-top" alt={'Imagen ' + this.props.movieDetails.Title}></img></div>
                        <div class="col-6">
                            <div class="row mb-1"><div class="col-3">Título:</div><div class="col-9">{this.props.movieDetails.Title}</div></div>
                            <div class="row mb-1"><div class="col-3">Año:</div><div class="col-9">{this.props.movieDetails.Year}</div></div>
                            <div class="row mb-1"><div class="col-3">Clasificación:</div><div class="col-9">{this.props.movieDetails.Rated}</div></div>
                            <div class="row mb-1"><div class="col-3">Released:</div><div class="col-9">{this.props.movieDetails.Released}</div></div>
                            <div class="row mb-1"><div class="col-3">Duración:</div><div class="col-9">{this.props.movieDetails.Runtime}</div></div>
                            <div class="row mb-1"><div class="col-3">Género:</div><div class="col-9">{this.props.movieDetails.Genre}</div></div>
                            <div class="row mb-1"><div class="col-3">Director:</div><div class="col-9">{this.props.movieDetails.Director}</div></div>
                            <div class="row mb-1"><div class="col-3">Escritor:</div><div class="col-9">{this.props.movieDetails.Writer}</div></div>
                            <div class="row mb-1"><div class="col-3">Actores:</div><div class="col-9">{this.props.movieDetails.Actors}</div></div>
                            <div class="row mb-1"><div class="col-3">Trama:</div><div class="col-9">{this.props.movieDetails.Plot}</div></div>
                            <div class="row mb-1"><div class="col-3">Idioma:</div><div class="col-9">{this.props.movieDetails.Language}</div></div>
                            <div class="row mb-1"><div class="col-3">País:</div><div class="col-9">{this.props.movieDetails.Country}</div></div>
                            <div class="row mb-1"><div class="col-3">Premios:</div><div class="col-9">{this.props.movieDetails.Awards}</div></div>
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
