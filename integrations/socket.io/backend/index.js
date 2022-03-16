const app = require("express")();
const chat = require("./chat");
const http = require("http");
const cors = require("cors");
const socketio = require("socket.io");
const port = process.env.PORT || 3000;

app.set("port", port);
app.use(cors());

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
chat(io);

app.get("/", (req, res) => {
  res.send("Socket.io server running");
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
