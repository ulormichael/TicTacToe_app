var board=[];
var userChoice
var currentTurn

function minmax(){
    this.minPlayer=1;
    this.maxPlayer=2;
}

/*Setting the min and max values once we get the choice from the user*/
minmax.prototype.setMineMax=function(min,max){
    this.minPlayer=min;
    this.maxPlayer=max;
}
/*Copying the current configuration of the board and returning it. We do this since we need more have to operate on individual board instances on deeper depths*/
minmax.prototype.copyBoard=function(board){
    return board.slice(0);
}
/*This function checks if a position is free on the board and makes the move. If the position is free, it makes a move and returns the new board, else returns the old board.*/
minmax.prototype.makeMove=function(position,board,player){
    if(board[position]==0){
        var newBoard=this.copyBoard(board);
        newBoard[position]=player;
        return newBoard;
    }
    else{
        return null;
    }
}