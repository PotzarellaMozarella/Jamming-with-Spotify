import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

/* Renders the playlist section with 
-the default name for the New playlist or new name via event handler
-passing props playlistTracks, on Remove and adding isRemoval for Tracks component 
-event and event handler props for saving the playlist to spotify
*/

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    //handles the name change of new playlists created 
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}/>
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
