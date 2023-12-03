//board 3*3 
//x o term---invalid move
//win rules 
//row full same term,diagonal,column 
//draw
import java.util.Arrays;
import java.util.Scanner;
public class xo {

    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in); 
        char player='X';
        char[][] board=createBoard();
        System.out.println("\n-------welcome to tic tac toe-------\n");
        displayBoard(board);
        while(true){
            System.out.println("player "+player+"turn ");
            System.out.println("\n----current board-----\n");
            displayBoard(board);
            System.out.println("enter the row:(0,1,2) ");
            int row=scanner.nextInt();
            System.out.println("enter the column:(0,1,2) ");
            int column=scanner.nextInt();
            if(row>=3 || column>=3 ){
                System.out.println("invalid move");
                continue;
            }
            if(board[row][column]!='-'){
                System.out.println("invalid move");
                continue;
            }
            board[row][column]=player;
            if(checkWinner(board,player,row,column)){
                System.out.println("congrats "+player+" wins");
                break;
            }
            if(checkTie(board)){
                System.out.println("match over");
                break;
            }
            player=(player=='X')?'O':'X';
        }
    }
    public static boolean checkWinner(char[][] board,char player,int row,int column){
        /* 
         * check row 
        */
        boolean win=true;
        for(int i=0;i<3;i++){
            if(board[row][i]!=player){
                win=false;
            }
        }
        if(win==true){
            return true;
        }
        win=true;
        for(int i=0;i<3;i++){
            if(board[i][column]!=player){
                win=false;
            }
        }
        if(win==true){
            return true;
        }
        //check diagonal
        if(board[0][0]==player && board[1][1]==player && board[2][2]==player){
            return true;
        }
        if(board[0][2]==player && board[1][2]==player && board[2][1]==player){
            return true;
        }
        return false;
    }
    public static boolean checkTie(char[][] board){
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                if(board[i][j]=='-'){
                    return false;
                }
            }
        }
        return true;
    }
    
    public static char[][] createBoard(){
        char[][] board=new char[3][3];
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                board[i][j]='-';
            }
        }
        return board;
    }
    public static void displayBoard(char[][] board){
        for(char[] small:board){
            for(char smallsmall:small){
                System.out.print(smallsmall+" ");
            }
            System.out.println(" ");
        }
    }

}