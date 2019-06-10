
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import FilterableMovieCards from './components/FilterableMovieCards';

function App() {
    return (
        <FilterableMovieCards />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));