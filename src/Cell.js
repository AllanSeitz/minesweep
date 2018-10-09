import React, { Component } from "react";
class Cell extends Component {
  click = (event) => {
    this.props.click(this.props.row, this.props.column)
  }

  flag = (event) => {
    event.preventDefault()
    this.props.flag(this.props.row, this.props.column)
  }

  render() {
    let outPut = this.props.value
    if (this.props.value === '*') {
      outPut = '💣'
    }
    if (this.props.value === 'F') {
      outPut = '⚑'
    }
    if (this.props.value === '@') {
      outPut = '⛳️'
    }
    if (this.props.value === '_') {
      outPut = '⥗'
    }


    return (

      //use this.props.value to look up what you want it to be, I.E. background image, empty flag lost, or value thats fed in.
      <td onClick={this.click} onContextMenu={this.flag} >{outPut} </td>

    )
  }
}

export default Cell;
