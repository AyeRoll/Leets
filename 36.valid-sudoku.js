/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let correct = true;
    for (let x = 0; x < board.length; x++) {
        for (let i = 0; i < board[x].length; i++){

            // Check Vertical   
            for (let vert = x+1; vert<board.length;vert++){
                if (board[x][i] === board[vert][i] && board[x][i] != '.'){
                    correct = false;    
                }
            }

            // Check Horizontal      
            for (let horiz = i+1; horiz<board[x].length; horiz++){
                if (board[x][i] === board[x][horiz] && board[x][i] != '.'){
                    correct = false;
                }
            }

            // Check 3x3
            let mini_vert = 0;
            let mini_horiz = 0;
            
            //box row
            if (x > 2 && x <= 5){
                mini_vert = 3;
            } else if (x > 5){
                mini_vert = 6;
            }
            //box column
            if (i > 2 && i <= 5){
                mini_horiz = 3;
            } else if (i > 5){
                mini_horiz = 6;
            }
            // grid check
            const vert_cap = mini_vert + 2;
            const horiz_cap = mini_horiz + 2; 
            for (mini_vert; mini_vert <= vert_cap; mini_vert++){
                for(mini_horiz; mini_horiz <= horiz_cap; mini_horiz++){
                    if (x != mini_vert && i != mini_horiz){
                        //console.log(board[x][i], mini_vert, mini_horiz);
                        if (board[x][i] == board[mini_vert][mini_horiz] && board[x][i] != '.'){
                            correct = false;
                        }
                    }
                }
                mini_horiz = mini_horiz - 2;
            }
        }
    }
    return correct;
};
// @lc code=end
//  const board = [
//     ["3",".",".",".",".","4",".",".","."],
//     [".",".",".",".","1",".","8",".","."],
//     [".","7","2",".",".",".",".",".","."],
//     [".",".","5",".",".",".",".",".","."],
//     [".","4",".",".",".",".",".",".","."],
//     [".",".",".",".",".",".","3",".","."],
//     [".",".",".",".",".",".",".",".","1"],
//     ["1","3",".",".",".","5",".",".","."],
//     [".",".",".",".","5",".",".","2","."]];


//  console.log(isValidSudoku(board));