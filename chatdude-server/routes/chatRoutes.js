// 

const express = require("express");
const { ObjectId } = require("mongodb");
const verifytoken = require("../middleware/verifytoken");
const ConnectionData = require("../config/Connection");

function chatRoutes(io) {
  const route = express.Router();

  // GET: Fetch user chats
  route.get("/getcreatechats", verifytoken, async (req, res) => {
    try {
      const chats = await ConnectionData("chat");
      const chatdata = await chats
        .find({ common_id: new ObjectId(req.userdata._id) })
        .toArray();

      console.log(req.userdata._id);
      res.send({ ok: true, data: chatdata });
    } catch (error) {
      console.log(error);
      res.send({ ok: false, error });
    }
  });

  // POST: Create chat
  route.post("/create-chat", verifytoken, async (req, res) => {
    try {
      const chats = await ConnectionData("chat");
      const data = await chats.insertOne({
        common_id: new ObjectId(req.userdata._id),
        related_id: new ObjectId(req.body.id),
        messageCount: 0,
      });

      res.send({ ok: true, result: data });
    } catch (error) {
      res.send({ ok: false, error });
    }
  });

  // POST: Send message (save in DB + emit via socket)
  route.post("/sendmessage", verifytoken, async (req, res) => {
    const { receiverId, message } = req.body;
    console.log(receiverId)
console.log("Received body:", req.body);
console.log("Extracted from token:", req.userdata);
 const senderId = req.userdata._id;
console.log(senderId,'ssssssssssssssssssssssssssssssssssssssssssssssssssssss')
    if (!receiverId || !message) {
      return res
        .status(400)
        .json({ ok: false, message: "receiverId and message required" });
    }

    try {
      const messages = await ConnectionData("message");
      const chatRoomId = [senderId, receiverId].sort().join("_");

      const newMessage = {
        chatRoomId,
        senderId: new ObjectId(senderId),
        receiverId: new ObjectId(receiverId),
        message,
        createdAt: new Date(),
      };

      const result = await messages.insertOne(newMessage);

      // Emit message to the chat room
      io.to(chatRoomId).emit("receive_message", {
        ...newMessage,
        _id: result.insertedId,
      });

      res.status(201).json({ ok: true, result: result.insertedId });
    } catch (err) {
      res.status(500).json({ ok: false, error: err.message });
    }
  });

  // GET: Fetch messages for chat between sender and receiver
  route.get("/getmessages", verifytoken, async (req, res) => {
    const { receiverId } = req.query;
    const senderId = req.userdata._id;

    if (!receiverId) {
      return res.status(400).json({ ok: false, message: "receiverId required" });
    }

    try {
      const messages = await ConnectionData("message");
      const chatRoomId = [senderId, receiverId].sort().join("_");

      const oldMessages = await messages
        .find({ chatRoomId })
        .sort({ createdAt: 1 }) // sort ascending by time
        .toArray();

      res.status(200).json({ ok: true, messages: oldMessages });
    } catch (err) {
      res.status(500).json({ ok: false, error: err.message });
    }
  });
  
// route.get("/lastmessages", verifytoken, async (req, res) => {
//   try {
//     const db = await ConnectionData("messages");

//     const userId = new ObjectId(req.userdata._id);

//     const result = await db.aggregate([
//       {
//         $match: {
//           $or: [
//             { senderId: userId },
//             { receiverId: userId }
//           ]
//         }
//       },
//       {
//         $sort: { createdAt: -1 }
//       },
//       {
//         $group: {
//           _id: "$chatRoomId",
//           message: { $first: "$message" },
//           senderId: { $first: "$senderId" },
//           receiverId: { $first: "$receiverId" },
//           createdAt: { $first: "$createdAt" }
//         }
//       }
//     ]).toArray();

//     res.send({ ok: true, result });
//     console.log(result,'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
//   } catch (error) {
//     console.error("Error in /get-lastmessages:", error);
//     res.send({ ok: false, error });
//   }
// });
  return route;
}


module.exports = chatRoutes;
