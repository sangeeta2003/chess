
import {WebSocket} from "ws";
export class Game {
  public player1:WebSocket;
    public player2:WebSocket;
private board : string;
private moves : string[];
private startTime : Date;

    constructor(player1:WebSocket ,player2:WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = "";
        this.moves = [];
        this.startTime = new Date();
    }
    makeMove(socket:WebSocket,move:string){
// validation here
// is this user move
// is the move valid
// update the  board
// push the move
// check if the game is over    
// sent the updated board to both the players
    }
}