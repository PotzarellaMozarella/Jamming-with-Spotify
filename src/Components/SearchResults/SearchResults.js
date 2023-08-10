import React from "react";
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

/* this compoenent renders the Results section with Tracklist component &
Adds props to Tracklist from App.js for 
 -Tracks from current state of searchResults 
 -reference to onAdd props via through searchResults
 -Sets the value to false as the searchResults must only have the addTrack 
*/

class SearchResults extends React.Component {
  state = {};
  render() {
    return (
        <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} 
                    onAdd={this.props.onAdd}
                    isRemoval={false}/>
      </div>
    );
  }
}

export default SearchResults;
