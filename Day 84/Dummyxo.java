import java.util.Scanner;
public class Dummyxo {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        char player='X';
        System.out.println("\n---Welcome to play----\n");
        char[][] board=createBoard();
        System.out.println(isWinner(board, player, 0, 1));
        System.out.println("\n---diaplaying board----\n");
        displayBoard(board);
        while(true){
            System.out.println("the player "+player+" chance");
            System.out.println("\n---present board---\n");
            displayBoard(board);
            System.out.println("enter the row :");
            int row=scanner.nextInt();
            System.out.println("enter the column : ");
            int column=scanner.nextInt();
            if(row>=3 || column>=3){
                System.out.println("invalid move");
                continue;
            }
            if(board[row][column]!='-'){
                System.out.println("inavalid move");
                continue;

            }
            board[row][column]=player;
            System.out.println(isWinner(board,player,row,column));
            if(isWinner(board,player,row,column)){
                System.out.println("the player "+player+" wins");
                break;
            }
            if(istie(board)){
                System.out.println("game over");
                break;
            }
            player=(player=='X')?'O':'X';
        }

    }
    public static boolean isWinner(char[][] board,char player,int row,int column){
        boolean win= true;
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
        System.out.println("diagonal"+board[0][0]+" "+ board[1][1]+" "+board[2][2]);
        if(board[0][0]==player && board[1][1]==player && board[2][2]==player){
            System.out.println("inside diagonal");
            return true;
        }
        if(board[0][2]==player && board[1][1]==player && board[2][0]==player){
            return true;
        }
        return true;
    }
    public static boolean istie(char[][] board){
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                if(board[i][j]!='-'){
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
        for(char[] sub:board){
            for(char subsmall:sub){
                System.out.print(subsmall);
            }
            System.out.println(" ");
        }
    }
}
