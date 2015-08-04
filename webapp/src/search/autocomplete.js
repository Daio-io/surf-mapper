'use strict';

export class AutoComplete extends React.Component {

  constructor(){
    super();
  }
  render(){
    let addResult = function(item) {
      return <li>{item}</li>
    };
    return <ul>{this.props.list.map(addResult)}</ul>
  }

}