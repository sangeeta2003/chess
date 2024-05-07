import { WebSocket } from "ws";

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
            if(message.type === "init_game"){
                this.joinGame(socket);
            }
        })
       
    }
}