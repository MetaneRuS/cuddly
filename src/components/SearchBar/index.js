import React from 'react';

class SearchBar extends React.Component {
    state = {artist: ''};

    handleChange = (event) => {
        this.setState({artist: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.artist);
        this.setState({artist: ''});
    }

    render() {
        return (
            <div className="container">
                <h1 className="header">Search for an artist to find out about his discography</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input className="form-input" type="Text" value={this.state.artist} placeholder={this.props.text} onChange={this.handleChange
                    } />
                </form>
            </div>
        )
    }
}

export default SearchBar;