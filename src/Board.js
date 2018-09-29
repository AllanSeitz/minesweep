import React, { Component } from "react";
import axios from "axios";
import Cell from "./Cell";
class Board extends Component {
  game_URL = `https://minesweeper-api.herokuapp.com`
  constructor(props) {
    super(props);

    this.state = {
      board: new Array(8).fill(new Array(8).fill(' '))

    };
  }
  // let newBoard = board.map(row, row.map(square, ))
  loadSample = event => {
    axios
      .get("https://minesweeper-api.herokuapp.com/games/3", { difficulty: 3 })
      .then(response => {
        this.setState(response.data);
      });
  };
  render() {
    let board = this.state.board.map(square => {
      return <Cell square={square} />
    })
    return (
      <table>
        <tbody>
          <tr>
            <th colSpan={this.state.board[0].length}>
              <button onClick={this.loadSample}>Sample</button>
              <p>your are playing game # {this.state.id}</p>
            </th>
          </tr>
          {<tr>

            {board}

          </tr>}
        </tbody>
      </table >
    );
  }
}

export default Board;
