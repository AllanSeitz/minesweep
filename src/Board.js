import React, { Component } from "react";
import axios from "axios";
class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      board: [[" ", " ", " ", " ", " ", " ", " ", " "]]
    };
  }

  makeNewGame = event => {
    axios
      .get("https://minesweeper-api.herokuapp.com/games", { difficulty: 2 })
      .then(response => {
        this.setState(response.data);
      });
  };
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan={this.state.board.length}>
              <button onClick={this.loadSample} />
              <p>your are playing game # {this.state.board}</p>
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;
