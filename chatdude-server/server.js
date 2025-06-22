// const express = require('express')
// const cors =require('cors')
// const app  = express()
// app.use(express.json())
// app.use(cors())
// port =5665
// const routes =require('./routes/UserRoutes')
// app.use('/users',routes)
// const secondroute=require("./routes/chatRoutes")
// app.use('/chat',secondroute)
//   app.listen(port,()=>{
//     console.log("server is created",port)
//   })

// server.js
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const userRoutes = require("./routes/UserRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Update with your frontend URL in prod
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/chat", chatRoutes(io)); // Pass io into route

// Socket.IO events
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("join_chat", (chatRoomId) => {
    socket.join(chatRoomId);
    console.log(`User joined chat room: ${chatRoomId}`);
  });

  socket.on("send_message", (data) => {
    // Optional: you can emit here too if needed
    io.to(data.chatRoomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

const PORT = 5665;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});




//  const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(express.json());
// app.use(cors());

// const routes = require('./routes/UserRoutes');
// app.use('/users', routes);

// const secondroute = require('./routes/chatRoutes');
// app.use('/chat', secondroute);

// // ✅ Use dynamic port for deployment, default to 5665 locally
// const PORT = process.env.PORT || 5665;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

