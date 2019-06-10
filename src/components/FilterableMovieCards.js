
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
            'searchResult': {}
        };

        this.searchChange = this.searchChange.bind(this);
        //this.handleShowDetails = this.handleShowDetails.bind(this);

        //let movieData = {};
        //this.movieDetails = (<MovieDetails movieDetails={movieData} handleShowDetails={this.handleShowDetails} />);
        //{this.movieDetails}
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
                        <MovieList searchResult={this.state.searchResult} />
                    </div>
                </div>
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

    handleShowDetails() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    getDefaultData() {

    }
}

export default FilterableMovieCards;