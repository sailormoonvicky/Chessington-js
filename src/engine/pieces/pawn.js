import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player, 'pawn');
    }

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
                    moves.push(whiteOptions[0], whiteOptions[1]);
                } else {
                    moves.push(whiteOptions[0])
                }
            }

            // Add logic to allow the pawn to move diagonally if there is an opposing piece to take
            const leftDiagonal = Square.at(location.row + 1, location.col - 1);
            const rightDiagonal = Square.at(location.row + 1, location.col + 1);
            if (board.getPiece(leftDiagonal) !== undefined && board.getPiece(leftDiagonal).player === Player.BLACK && board.getPiece(leftDiagonal).type !== 'king') {
                moves.push(leftDiagonal);
            }
            if (board.getPiece(rightDiagonal) !== undefined && board.getPiece(rightDiagonal).player === Player.BLACK && board.getPiece(rightDiagonal).type !== 'king') {
                moves.push(rightDiagonal);
            }
            return moves;
        }  else { // Player.BLACK
            if (location.row === 0) {
                return [];
            }
            if (board.getPiece(blackOptions[0]) === undefined) {
                if (location.row === 6 && board.getPiece(blackOptions[1]) === undefined) {
                    moves.push(blackOptions[0], blackOptions[1]);
                } else {
                    moves.push(blackOptions[0]);
                }
            }
            // Add logic to allow the pawn to move diagonally if there is an opposing piece to take
            const leftDiagonal = Square.at(location.row - 1, location.col - 1);
            const rightDiagonal = Square.at(location.row - 1, location.col + 1);
            if (board.getPiece(leftDiagonal) !== undefined && board.getPiece(leftDiagonal).player === Player.WHITE && board.getPiece(leftDiagonal).type !== 'king') {
                moves.push(leftDiagonal);
            }
            if (board.getPiece(rightDiagonal) !== undefined && board.getPiece(rightDiagonal).player === Player.WHITE && board.getPiece(rightDiagonal).type !== 'king') {
                moves.push(rightDiagonal);
            }
            return moves;
        }
    }

}


