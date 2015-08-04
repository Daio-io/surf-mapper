'use strict'

import {AutoComplete} from './autocomplete';

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {response:[]};
  }

  render() {
    return (<div><input type="text" id="search-box"></input>
      <AutoComplete list={this.state.response}/>
  </div>);
  }

  componentDidMount() {
    let searchBox = document.getElementById('search-box');
    searchBox.onkeydown = this.makeRequest.bind(this);
  }
  
  makeRequest(e) {
    let data = 'hello ' + Math.random();
    this.setState({response: [data]});
  }

}
React.render(<SearchBar/>, document.querySelector('#search-container'));