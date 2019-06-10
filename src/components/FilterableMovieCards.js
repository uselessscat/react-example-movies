
import React from 'react';

import OmdbApi from '../clases/OmdbApi';
import MovieSearcher from './MovieSearcher';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

class FilterableMovieCards extends React.Component {
    constructor(props) {
        super(props);

        this.searchEvent = this.searchEvent.bind(this);
        this.toggle = this.toggle.bind(this);

        let data = { "Search": [{ "Title": "Bat*21", "Year": "1988", "imdbID": "tt0094712", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYzgyMDVlMGUtZDAzNy00MmM3LWE5MDgtNzkxOGMyYTkxNDlhL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg" }, { "Title": "The Bat", "Year": "1959", "imdbID": "tt0052602", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYWY3N2M0MzktZjkxNi00MjNlLTg2ZjctZGVjZTZhNzZiMDc4XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg" }, { "Title": "The Devil Bat", "Year": "1940", "imdbID": "tt0032390", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZWE4MjhjMDItZmQ5Yy00OTQxLWE0M2EtZTJiMTFhMzc1NjJjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "The Bat People", "Year": "1974", "imdbID": "tt0071198", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZWM3ZGUyZWEtMjQ0OS00ZjJlLTkzNjktMjBjM2E1MzI0N2JlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }, { "Title": "The Vampire Bat", "Year": "1933", "imdbID": "tt0024727", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BY2Q1NWZlOWQtOGQwMS00YjUyLTlkZDctNTQ5ZjRlNGE1ZDI1XkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SX300.jpg" }, { "Title": "Bat Thumb", "Year": "2001", "imdbID": "tt0331189", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3ODc3MjMzM15BMl5BanBnXkFtZTcwMjIwNzIyMQ@@._V1_SX300.jpg" }, { "Title": "Bat Masterson", "Year": "1958–1961", "imdbID": "tt0052445", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMTIyMDI0MzM3OV5BMl5BanBnXkFtZTcwMTczODQzMQ@@._V1_SX300.jpg" }, { "Title": "The Bat Whispers", "Year": "1930", "imdbID": "tt0020668", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMjg3NDc2OF5BMl5BanBnXkFtZTgwMzk4ODQwMjE@._V1_SX300.jpg" }, { "Title": "The Bat", "Year": "1926", "imdbID": "tt0016629", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxMzcyOTA1OF5BMl5BanBnXkFtZTcwMzU5NjQyMg@@._V1._CR34,29,276,440_SX89_AL_.jpg_V1_SX300.jpg" }, { "Title": "Rise of the Black Bat", "Year": "2012", "imdbID": "tt2205589", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwMTQ2OTU2MF5BMl5BanBnXkFtZTcwMDI0OTU4OA@@._V1_SX300.jpg" }], "totalResults": "160", "Response": "True" };
        this.movieList = (<MovieList searchResult={data} />);
    }

    render() {
        let movieSearcher = (<MovieSearcher changeEvent={this.searchEvent} />);
        let movieData = { "Title": "Bat*21", "Year": "1988", "Rated": "R", "Released": "21 Oct 1988", "Runtime": "105 min", "Genre": "Drama, War", "Director": "Peter Markle", "Writer": "William C. Anderson (book), William C. Anderson (screenplay), George Gordon (screenplay)", "Actors": "Gene Hackman, Danny Glover, Jerry Reed, David Marshall Grant", "Plot": "Lt. Col. Iceal \"Ham\" Hambleton is a weapons countermeasures expert and when his aircraft is shot over enemy territory the Air Force very much wants to get him back. Hambleton knows the area he's in is going to be carpet-bombed but a temporary shortage of helicopters causes a delay. Working with an Air Force reconnaissance pilot, Capt. Bartholomew Clark, he maps out an escape route based on golf courses he has played. Along the way however, he has to face enemy forces and the death of some of his fellow soldiers.", "Language": "English", "Country": "USA", "Awards": "1 nomination.", "Poster": "https://m.media-amazon.com/images/M/MV5BYzgyMDVlMGUtZDAzNy00MmM3LWE5MDgtNzkxOGMyYTkxNDlhL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "6.4/10" }, { "Source": "Rotten Tomatoes", "Value": "81%" }, { "Source": "Metacritic", "Value": "58/100" }], "Metascore": "58", "imdbRating": "6.4", "imdbVotes": "7,300", "imdbID": "tt0094712", "Type": "movie", "DVD": "19 Dec 2000", "BoxOffice": "N/A", "Production": "Media Home Entertainment", "Website": "N/A", "Response": "True" };

        return (
            <div class="container py-5">
                <div class="row">
                    <div class="col"><h1>Listado de peliculas</h1></div>
                    <div class="col">Buscador {movieSearcher}</div>
                </div>
                <div class="row">
                    <div class="col">
                        {this.movieList}
                    </div>
                </div>
                <MovieDetails movieDetails={movieData} showModal={this.movieList}/>
            </div>
        );
    };

    searchEvent(event) {
        console.log(event)
        console.log(OmdbApi);

        OmdbApi.searchByTitle('bat', function () {

        });
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    getDefaultData() {

    }
}

export default FilterableMovieCards;