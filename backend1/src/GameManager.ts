import { WebSocket } from "ws";
import { INIT_GAME } from "./Message";

export class GameManager {
    private games: Game[];
private pendingUser:WebSocket;
private users:WebSocket;

    // user,game
    constructor() {
        this.games = [];
    } 
    addUser(socket: WebSocket) {
        this.users.push(socket);
        this.addHandler(socket);
        
    }
    removeUser(socket: WebSocket) {
        this.users = this.users.filter(user => user != socket);
        // stop the game here bcsz the user left
    } 
    private addHandler(socket:WebSocket) {
        socket.on("message",(data)=>{
            const message =  JSON.parse(data.toString());
            if(message.type === INIT_GAME){
                if(this.pendingUser){
                    // start game
                    const game = new Game (this.pendingUser,socket);
                    this.games.push(game);
                    this.pendingUser= null;
                }
                else{
                    this.pendingUser = socket;
                }
            }
        })
       
    }
}