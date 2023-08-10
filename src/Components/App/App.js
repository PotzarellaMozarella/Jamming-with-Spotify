import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
//initializing state with default values
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
//accepts the term from component SearchBar and passes it to Spotify then, changes the state of searchResults to results from the 
  search(term) {
    //console.log(term);
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  //compares each track added to the already existing saved tracks in tracks array based on id and returns nothing or adds track to the playlist
  addTrack(track) {
    let tracks= this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id===track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

   //compares each track added to the already existing saved tracks in tracks array based on id and filters the track from the playlist
  removeTrack(track) {
    let tracks= this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  //triggered by the event handler method handleNameChange in PLaylist component to send the target event value so that it sets the state of playlist name to the new name
  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  //triggered by the event handler onSave that passes a reference of the method to Playlist component, calls the Spotify.savePlaylist method & resets the default values after playlist is set
  savePlaylist() {
    //alert("this method is linked to the button");
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState(
        {
          playlistName: 'New Playlist',
          playlistTracks: []
        })
    })
  }

  //adding event listerner to fetch Access Token after all components are rendered
  componentDidMount() {
    window.addEventListener('load', () => {Spotify.getAccessToken()});
  } 

  render() {
    return (
      <div>
        <h1>
        Ja<span className="highlight">mmm</span>ing
        </h1>
        
        <div className="App">
          <SearchBar onSearch={this.search}/> 
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
            onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} 
             playlistTracks={this.state.playlistTracks}
             onRemove={this.removeTrack}
             onNameChange={this.updatePlaylistName}
             onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
