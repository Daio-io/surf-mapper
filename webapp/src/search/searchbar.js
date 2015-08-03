'use strict'

class SearchBar extends React.Component {
  constructor () {
    super()
  }
  render () {
    return <input type="text" id="search-box"></input>
}

}
React.render(<SearchBar />, document.querySelector('#search-container'))