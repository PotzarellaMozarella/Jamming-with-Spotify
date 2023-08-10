import React from "react";
import "./Track.css";

class Track extends React.Component {
    constructor(props) {
        super(props);
        
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
      }

  //triggers events based on user clicking on + or - button based on value of isRemoval property
  renderAction() {
    return this.props.isRemoval ? <button className="Track-action" onClick={this.removeTrack}>-</button > : <button className="Track-action" onClick={this.addTrack}>+</button> 
  }

  //passes the track to onAdd props that sends it to addTrack method in app.js
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  //passes the track to onRemove props that sends it to removeTrack method in app.js
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  //renders each track by extracting values of properties passed down as props from Tracklist.js
  render() {
    return (
        <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;