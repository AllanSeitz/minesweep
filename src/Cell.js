import React, { Component } from "react";
class Cell extends Component {
  render() {
    return <tr>
      <td>{this.props.square}</td>
    </tr>
  }
}

export default Cell;
