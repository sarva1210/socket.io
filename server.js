import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

// io => server ;  socket => single user  : works on even bases 
// on => listen to event ;  emit => to fire the event
io.on("connection", (socket) => {
    console.log("new connection created")
    
    socket.on("message", (msg) => {
        console.log('user fired message event')
        console.log(msg)
        io.emit("abc", msg)
    })
})

httpServer.listen(3000, () => {
    console.log("server is running on port 3000")
})