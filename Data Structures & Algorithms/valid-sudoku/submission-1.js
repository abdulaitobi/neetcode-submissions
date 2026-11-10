class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < board.length; i++){
            const columnSet = new Set()
            const rowSet = new Set()
            const boxSet = new Set()
            let startRow = Math.floor(i / 3) * 3;
            let startCol = (i % 3) * 3;
            for(let j = 0; j < board.length; j++){
                if(rowSet.has(board[i][j]) || columnSet.has(board[j][i])){
                    return false
                }
                if(board[i][j] != "."){
                    rowSet.add(board[i][j])
                    
                }
                if(board[j][i] != "."){
                    columnSet.add(board[j][i])
                }
                let boxRow = startRow + Math.floor(j /3)
                let boxCol = startCol + j % 3
                if(board[boxRow] [boxCol]!=".")                  
                {
                    if(boxSet.has(board[boxRow] [boxCol])){
                        return false
                    }
                    else{ 
                        boxSet.add(board[boxRow][boxCol])
                    }
                }
            }
                
        }
        return true
    }
}
