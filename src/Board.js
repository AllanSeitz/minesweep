import React, { Component } from "react";
import axios from "axios";
import Cell from "./Cell";
class Board extends Component {
  game_URL = `https://minesweeper-api.herokuapp.com`
  constructor(props) {
    super(props);
    this.state = {
      "id": 0,
      "board": new Array(8).fill(new Array(8).fill(' ')),
      "state": '',
      "mines": 10
    }
  }


  setDifficulty = event => this.setState({ difficulty: event.target.value })

  newGame = event => {
    axios
      .post(`${this.game_URL}/games`,
        { difficulty: this.state.difficulty }
      )
      .then(response => {
        this.setState(response.data);
      })
  }
  click = (row, column) => {
    axios
      .post(`${this.game_URL}/games/${this.state.id}/check`,
        { row: row, col: column }
      )
      .then(response => {
        this.setState(response.data);
      })
  }
  flag = (row, column) => {
    axios
      .post(`${this.game_URL}/games/${this.state.id}/flag`,
        { row: row, col: column }
      )
      .then(response => {
        this.setState(response.data);
      })
  }

  render() {
    let gameEmoji = (this.state.state === 'lost') ? '🤣' : '😀'

    return (
      <table>
        <tbody>
          <tr>
            <th colSpan={this.state.board[0].length}>
              <p>MineSweep!</p>
              <p> {this.state.state}</p>
              <select value={this.state.difficulty} onChange={this.setDifficulty}>
                <option value="0">Easy</option>
                <option value="1">Medium</option>
                <option value="2">Hard</option>
              </select>
              <span onClick={this.newGame}>{gameEmoji}</span>
              <p>your are playing game # {this.state.id}</p>
              <p>The Difficulty is #{this.state.difficulty}</p>
            </th>
          </tr>
          {
            this.state.board.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((value, columnIndex) => {
                    return <Cell key={columnIndex} value={value} column={columnIndex} row={rowIndex} click={this.click} flag={this.flag} />
                  })}
                </tr>
              )
            })
          }
        </tbody>
      </table >
    );
  }
}

export default Board;
