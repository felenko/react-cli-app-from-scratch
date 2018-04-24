import React from 'react';
var Component = React.Component;

export default class Editbox extends Component {
    constructor(props) {
        super(props);
        this.state = {initialValue: "edit box"};
      }
  

  render() {
    return (
      //...
      <input value={this.state.inputValue} onChange={this.updateInputValue} />
      //...
    );
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }
};

