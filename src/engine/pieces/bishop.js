import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        
    }
}
