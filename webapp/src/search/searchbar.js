'use strict'

class SearchBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <input type="text" id="search-box"></input>;
  }

  componentDidMount() {
    let searchBox = document.getElementById('search-box');
    searchBox.onkeydown = this.makeRequest;
  }
  
  makeRequest(e) {
    console.log('place holder for ajax');
  }

}
React.render(<SearchBar/>, document.querySelector('#search-container'));