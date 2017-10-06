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
    
        if (this.player === Player.WHITE) {
            if (board.getPiece(whiteOptions[0]) === undefined) {
                if (location.row === 1 && board.getPiece(whiteOptions[1]) === undefined) {
                    return [whiteOptions[0], whiteOptions[1]];
                } else {
                    return [whiteOptions[0]];
                }
            } else {
                return [];
            }
        } else { // Player.BLACK
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
