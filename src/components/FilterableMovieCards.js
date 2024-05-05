import React from 'react';

import OmdbApi from '../clases/OmdbApi';
import MovieSearcher from './MovieSearcher';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

class FilterableMovieCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            'searchResult': {},
            'movieData': {},
            'modal': false
        };

        this.searchChange = this.searchChange.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col"><h1>Listado de películas</h1></div>
                    <div className="col">Buscador <MovieSearcher search={this.state.filter} onChangeHandler={this.searchChange} /></div>
                </div>
                <MovieList title="asd" searchResult={this.state.searchResult} onShowDetailsHandler={this.showDetails} />
                <MovieDetails movieDetails={this.state.movieData} modal={this.state.modal} toggleModal={this.toggleModal} />
            </div>
        );
    };

    searchChange(filter) {
        OmdbApi.searchByTitle(filter, function (data) {
            this.setState({
                filter: filter,
                searchResult: data
            });
        }.bind(this));
    }

    showDetails(id) {
        OmdbApi.searchById(id, function (data) {
            this.setState({
                modal: true,
                movieData: data.data
            });
        }.bind(this));
    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
}

export default FilterableMovieCards;