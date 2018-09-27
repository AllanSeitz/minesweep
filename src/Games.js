import React, { Component } from 'react';
import Board from './Board'
class Games extends Component {
    constructor(props) {
        super(props)
        this.state = { games: [] }
    }
    //let url = (https://minesweeper-api.herokuapp.com/games/8304)
    fetchGames = () => {
        fetch('https://minesweeper-api.herokuapp.com/games/8304')
            .then(response => {

            })





    }
    render() {
        return (
            <div>
                <tr>
                    <td>
                    </td>
                </tr>
            </div>
        )
    }
}

export default Games