import Piece from './piece';
import Player from '../player';
import Square from '../square';
import Board from '../board';

export default class Rook extends Piece {
    constructor(player) {
        super(player, 'rook');
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        if (this.player === Player.WHITE) {
            for (let i = 0; i < 8; i++) {
                let moveRow = Square.at(location.row, i);
                if (i !== location.col) {
                    if (board.getPiece(moveRow) !== undefined && board.getPiece(moveRow).player === Player.BLACK && board.getPiece(moveRow).type !== 'king'){
                        moves.push(moveRow);
                        break;
                    } else if (board.getPiece(moveRow) !== undefined) {
                        break;
                    }
                    moves.push(moveRow);
                }
            }
        
            // Check all squares in the rook's column
            for (let i = 0; i < 8; i++) {
                let moveCol = Square.at(i, location.col);
                if (i !== location.row) {
                    if (board.getPiece(moveCol) !== undefined && board.getPiece(moveCol).player === Player.BLACK && board.getPiece(moveCol).type !== 'king') {
                        moves.push(moveCol);
                        break;
                    } else if (board.getPiece(moveCol) !== undefined) {
                        break;
                    }
                    moves.push(moveCol);
                }
            }
    
            return moves;
        }

        if (this.player === Player.BLACK) {
            for (let i = 0; i < 8; i++) {
                let rowMove = Square.at(location.row, i);
                if (i !== location.col) {
                    if (board.getPiece(rowMove) !== undefined && board.getPiece(rowMove).player === Player.WHITE && board.getPiece(rowMove).type !== 'king'){
                        moves.push(rowMove);
                        break;
                    } else if (board.getPiece(rowMove) !== undefined) {
                        break;
                    }
                    moves.push(rowMove);
                }
            }
        
            // Check all squares in the rook's column
            for (let i = 0; i < 8; i++) {
                let colMove = Square.at(i, location.col);
                if (i !== location.row) {
                    if (board.getPiece(colMove) !== undefined && board.getPiece(colMove).player === Player.WHITE && board.getPiece(colMove).type !== 'king') {
                        moves.push(colMove);
                        break;
                    } else if (board.getPiece(colMove) !== undefined) {
                        break;
                    }
                    moves.push(colMove);
                }
            }
    
            return moves;
        }

    }
}
