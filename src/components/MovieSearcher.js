
import React from 'react';

class MovieSearcher extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <input type="text" onChange={this.onChange} value={this.props.search}></input>
        );
    };

    onChange(e) {
        this.props.onChangeHandler(e.target.value);
    }
}

export default MovieSearcher;