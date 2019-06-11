
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
            <div class="container py-5">
                <div class="row">
                    <div class="col"><h1>Listado de peliculas</h1></div>
                    <div class="col">Buscador <MovieSearcher search={this.state.filter} onChangeHandler={this.searchChange} /></div>
                </div>
                <div class="row">
                    <div class="col">
                        <MovieList searchResult={this.state.searchResult} onShowDetailsHandler={this.showDetails} />
                    </div>
                </div>
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

    showDetails(id, e) {
        OmdbApi.searchById(id, function (data) {
            console.log(data);
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