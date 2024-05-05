import axios from 'axios';

const OMDB_API_URL = '//www.omdbapi.com/';
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

class OmdbApi {
    static searchById(id, callback) {
        let params = this.implodeParameters(
            {
                apiKey: OMDB_API_KEY,
                i: id
            }
        );

        axios.get(OMDB_API_URL + '?' + params)
            .then(function (response) {
                callback(response);
            });
    }

    static searchByTitle(title, callback) {
        let params = this.implodeParameters(
            {
                apiKey: OMDB_API_KEY,
                s: `*${title}*`
            }
        );

        axios.get(OMDB_API_URL + '?' + params)
            .then(function (response) {
                callback(response);
            });
    }

    static implodeParameters(params) {
        let parameters = Object.keys(params).map(key => {
            return `${key}=${params[key]}`;
        })

        return parameters.join('&');
    }
}

export default OmdbApi;