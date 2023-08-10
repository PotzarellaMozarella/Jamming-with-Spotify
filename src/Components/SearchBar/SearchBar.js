import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
//setting the default state for search term 
    this.state = {
      term: ''
    };
//binding methods
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    
  }
//event handler method search passing the search term to search method in parent componenent (app.js) through props onSearch
  search() {
    this.props.onSearch(this.state.term);
  }
//event handler for change in search term being typed and setState to the new term 
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }
//Rendering SearchBar with input text space, entering of search term and sending the term to search method in app.js 
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
