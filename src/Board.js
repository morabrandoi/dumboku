import React, { useState } from 'react'
import Cell from './Cell';

// Generates 2D array of random numbers to mimic sudoku board.
function initBoard() {
    const gameBoard = [];

    for (let i = 0; i < 9; i++) {
        const gameBoardRow = [];
        for (let j = 0; j < 9; j++) {
            gameBoardRow.push(Math.floor(Math.random() * 10))
        }
        gameBoard.push(gameBoardRow);
    }

    return gameBoard;
}

export default function Board() {
    const [gameBoard] = useState(initBoard());

    return (
        <table>
            <tbody>
                {
                    gameBoard.map((row, i) => {
                        return (
                            <tr>
                                {
                                    row.map((el, j) => {
                                        return (
                                            <td>
                                                <Cell key={i + j} num={gameBoard[i][j]} />
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
