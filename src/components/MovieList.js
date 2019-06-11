
import React from 'react';

import MovieListItem from './MovieListItem';

class MovieList extends React.Component {
    render() {
        let searchResult = this.props.searchResult;
        let searchResultItems = null;

        if (searchResult.data !== undefined && searchResult.data.Response === 'True') {
            searchResultItems = searchResult.data.Search.map((movieData) =>
                <div class="col-12 col-sm-6 col-md-3 col-xl-2 p-2" key={movieData.imdbID}>
                    <MovieListItem movie={movieData} onShowDetailsHandler={this.props.onShowDetailsHandler} />
                </div>
            );
        }

        return (
            <div class="row">
                <div class="row">
                    <div class="col">
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
                <div class="row px-4">
                    {searchResultItems}
                </div>
            </div>
        );
    };
}

export default MovieList;