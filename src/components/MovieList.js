import React from 'react';

import MovieListItem from './MovieListItem';

class MovieList extends React.Component {
    render() {
        let searchResult = this.props.searchResult;
        let searchResultItems = null;

        if (searchResult.data !== undefined && searchResult.data.Response === 'True') {
            searchResultItems = searchResult.data.Search.map((movieData) =>
                <div className="col-12 col-sm-6 col-md-3 col-xl-2 p-2" key={movieData.imdbID}>
                    <MovieListItem movie={movieData} onShowDetailsHandler={this.props.onShowDetailsHandler} />
                </div>
            );
        }

        return (
            <div className="row px-4">
                {searchResultItems}
            </div>
        );
    };
}

export default MovieList;