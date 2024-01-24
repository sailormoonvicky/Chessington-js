import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    // getAvailableMoves(board) {
    //     let location = board.findPiece(this);
    //     const whiteOptions = [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)];
    //     const blackOptions = [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)];
    //     if (this.player === Player.WHITE) {
    //         if (board.getPiece(whiteOptions[0]) === undefined) {
    //             if (location.row === 1 && board.getPiece(whiteOptions[1] === undefined)) {
    //                 return [whiteOptions[0], whiteOptions[1]];
    //             } else {
    //                 return [whiteOptions[0]];
    //             } 
    //         } else {
    //             return []; 
    //         }

    //     } else { //play.BLACK
    //         if (board.getPiece(blackOptions[0]) === undefined) {
    //             if (location.row === 6 && board.getPiece(blackOptions[1] === undefined)) {
    //                 return [blackOptions[0], blackOptions[1]]; 
    //             } else {
    //                 return [blackOptions[0]]
    //             } 
    //         } else {
    //             return [];
    //         }
    //     }
    // }
    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const whiteOptions = [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)];
        const blackOptions = [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)];
        const moves = [];
    
    
        if (this.player === Player.WHITE) {
            if (location.row === 7) {
                return [];
            }
            
            if (board.getPiece(whiteOptions[0]) === undefined) {
                if (location.row === 1 && board.getPiece(whiteOptions[1]) === undefined) {
                    return [whiteOptions[0], whiteOptions[1]];
                } else {
                    return [whiteOptions[0]];
                }
            } else {
                return [];
            }

            // Add logic to allow the pawn to move diagonally if there is an opposing piece to take
            const leftDiagonal = Square.at(location.row + 1, location.col - 1);
            const rightDiagonal = Square.at(location.row + 1, location.col + 1);
            if (board.getPiece(leftDiagonal) !== undefined && board.getPiece(leftDiagonal).player === Player.BLACK) {
                moves.push(leftDiagonal);
            }
            if (board.getPiece(rightDiagonal) !== undefined && board.getPiece(rightDiagonal).player === Player.BLACK) {
                moves.push(rightDiagonal);
            }

            return moves;


        } else { // Player.BLACK
            if (location.row === 0) {
                return [];
            }
            if (board.getPiece(blackOptions[0]) === undefined) {
                if (location.row === 6 && board.getPiece(blackOptions[1]) === undefined) {
                    return [blackOptions[0], blackOptions[1]];
                } else {
                    return [blackOptions[0]];
                }
            } else {
                return [];
            }
        }
    }
    
}
