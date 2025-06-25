// const express = require("express");
// const http = require("http");
// const cors = require("cors");

// const { Server } = require("socket.io");
// const userRoutes = require("./routes/UserRoutes");
// const chatRoutes = require("./routes/chatRoutes");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*", // Update with your frontend URL in prod
//     methods: ["GET", "POST"]
//   }
// });

// app.use(cors());
// app.use(express.json());
// app.use("/users", userRoutes);
// app.use("/chat", chatRoutes(io)); // Pass io into route

// // Socket.IO events
// io.on("connection", (socket) => {
//   console.log("Socket connected:", socket.id);

//   socket.on("join_chat", (chatRoomId) => {
//     socket.join(chatRoomId);
//     console.log(`User joined chat room: ${chatRoomId}`);
//   });

//   socket.on("send_message", (data) => {
//     // Optional: you can emit here too if needed
//     io.to(data.chatRoomId).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("Socket disconnected:", socket.id);
//   });
// });

// const PORT = 5665;
// server.listen(PORT, () => {
//   console.log("Server running on port", PORT);
// });


// // const express = require("express");
// // const http = require("http");
// // const cors = require("cors");
// // const { Server } = require("socket.io");
// // const userRoutes = require("./routes/UserRoutes");
// // const chatRoutes = require("./routes/chatRoutes");

// // // Create Express app FIRST
// // const app = express();

// // // Use correct CORS config
// // app.use(cors({
// //   origin: "https://chatapplication-wvng.vercel.app",  // Your deployed frontend
// //   credentials: true
// // }));

// // app.use(express.json());
// // app.use("/users", userRoutes);
// // app.use("/chat", chatRoutes(io)); // You'll define io below

// // // Create HTTP server
// // const server = http.createServer(app);

// // // Create Socket.IO instance
// // const io = new Server(server, {
// //   cors: {
// //     origin: "https://chatapplication-wvng.vercel.app",
// //     methods: ["GET", "POST"]
// //   }
// // });

// // // WebSocket events
// // io.on("connection", (socket) => {
// //   console.log("Socket connected:", socket.id);

// //   socket.on("join_chat", (chatRoomId) => {
// //     socket.join(chatRoomId);
// //     console.log(`User joined chat room: ${chatRoomId}`);
// //   });

// //   socket.on("send_message", (data) => {
// //     io.to(data.chatRoomId).emit("receive_message", data);
// //   });

// //   socket.on("disconnect", () => {
// //     console.log("Socket disconnected:", socket.id);
// //   });
// // });

// // // Start server
// // const PORT = 5665;
// // server.listen(PORT, () => {
// //   console.log("Server running on port", PORT);
// // });

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
    origin: "*", // Update this with your frontend URL in production
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/chat", chatRoutes(io));

// ✅ Root route to verify server is live
app.get("/", (req, res) => {
  res.send("✅ ChatDude Server is Live");
});

// Socket.IO events
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("join_chat", (chatRoomId) => {
    socket.join(chatRoomId);
    console.log(`User joined chat room: ${chatRoomId}`);
  });

  socket.on("send_message", (data) => {
    io.to(data.chatRoomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// Use dynamic port for Render
const PORT = process.env.PORT || 5665;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
