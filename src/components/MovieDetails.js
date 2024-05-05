import React from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class MovieDetails extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className} size='xl'>
                <ModalHeader toggle={this.props.toggleModal}>
                    {this.props.movieDetails.Title} <small>({this.props.movieDetails.Year})</small>
                </ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-6"><img src={this.props.movieDetails.Poster} className="card-img-top" alt={'Imagen ' + this.props.movieDetails.Title}></img></div>
                        <div className="col-6">
                            <div className="row mb-1"><div className="col-3">Título:</div><div className="col-9">{this.props.movieDetails.Title}</div></div>
                            <div className="row mb-1"><div className="col-3">Año:</div><div className="col-9">{this.props.movieDetails.Year}</div></div>
                            <div className="row mb-1"><div className="col-3">Clasificación:</div><div className="col-9">{this.props.movieDetails.Rated}</div></div>
                            <div className="row mb-1"><div className="col-3">Released:</div><div className="col-9">{this.props.movieDetails.Released}</div></div>
                            <div className="row mb-1"><div className="col-3">Duración:</div><div className="col-9">{this.props.movieDetails.Runtime}</div></div>
                            <div className="row mb-1"><div className="col-3">Género:</div><div className="col-9">{this.props.movieDetails.Genre}</div></div>
                            <div className="row mb-1"><div className="col-3">Director:</div><div className="col-9">{this.props.movieDetails.Director}</div></div>
                            <div className="row mb-1"><div className="col-3">Escritor:</div><div className="col-9">{this.props.movieDetails.Writer}</div></div>
                            <div className="row mb-1"><div className="col-3">Actores:</div><div className="col-9">{this.props.movieDetails.Actors}</div></div>
                            <div className="row mb-1"><div className="col-3">Trama:</div><div className="col-9">{this.props.movieDetails.Plot}</div></div>
                            <div className="row mb-1"><div className="col-3">Idioma:</div><div className="col-9">{this.props.movieDetails.Language}</div></div>
                            <div className="row mb-1"><div className="col-3">País:</div><div className="col-9">{this.props.movieDetails.Country}</div></div>
                            <div className="row mb-1"><div className="col-3">Premios:</div><div className="col-9">{this.props.movieDetails.Awards}</div></div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        )
    };
}

export default MovieDetails;
