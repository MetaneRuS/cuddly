import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar/index';
import Album from './components/Album/index';
import SimilarArtist from './components/SimilarArtist/index';

class App extends React.Component {
  state = {artistID: 0, albums: [], similarArtist: [], searchQ: ''};

  getData = async artist => {
    this.setState({searchQ: artist});

    await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${artist}`)
      .then(response => response.json())
      .then(data => this.setState({artistID: data.data[0].id}))
      .catch((error) => {
        this.setState({artistID: 0});
      })

    await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.state.artistID}/albums?limit=50`)
      .then(response => response.json())
      .then(data => this.setState({albums: data.data}))
      .catch((error) => {
        this.setState({albums: []});
      })

      await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.state.artistID}/related?limit=10`)
        .then(response => response.json())
        .then(data => this.setState({similarArtist: data.data}))
        .catch((error) => {
          this.setState({similarArtist: []})
        })
  }

  render() {
    return (
      <div className="App">
        <SearchBar submit={this.getData} text={this.state.searchQ} />
        <SimilarArtist artists={this.state.similarArtist} searchArtist={this.state.searchQ} />
        <Album albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
