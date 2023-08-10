import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
 //Renders the Tracklist with all the tracks in it & adds props to each track passed from SearchResults component as props to it

  render() {
    return (
      <div className="TrackList">
        {
            this.props.tracks.map(track => {
                return <Track track={track} key={track.id}
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.isRemoval}/>;
            })
        }
      </div>
    );
  }
}

export default TrackList;
