import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import MsgActionCreator from "../actioncreators/messagecreation";
import './chatarea.css';

let socket;

function ChatArea() {
  const dispatch = useDispatch();

  // Get sender and receiver user info from Redux
  const sender = useSelector(state => state.Reducer?.data || {});
  const receiver = useSelector(state => state.ChatReducer.selected || {});
 console.log(receiver._id,'rrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
  const senderId = sender?._id;
  const receiverId = receiver?._id;
// console.log(receiverId)
  // Compose chatRoomId as sorted string
  const chatRoomId = [senderId, receiverId].sort().join("_");

  // Get messages for this chat room from Redux state
  const allMessages = useSelector(state => state.MsgReducer || {});
  const messages = allMessages[chatRoomId] || [];

  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    // Only run if both IDs exist
    if (!senderId || !receiverId) {
      console.log("ChatArea waiting for sender or receiver IDs...");
      return;
    }

    // Connect to socket server
    socket = io("http://localhost:5665");

    // Join chat room
    socket.emit("join_chat", chatRoomId);
    console.log("Joined chat room:", chatRoomId);

    // Listen for incoming messages from socket
    socket.on("receive_message", (data) => {
      console.log("Received socket message:", data);
      dispatch(MsgActionCreator(chatRoomId, data));
    });

    // Fetch existing messages from backend
    const fetchMessages = async () => {
      try {
        console.log("Fetching messages for chatRoomId:", chatRoomId);
        const res = await axios.get(
          `http://localhost:5665/chat/getmessages?receiverId=${receiverId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token-key")}`,
            },
          }
        );
        console.log("Fetched messages:", res.data.messages);
        dispatch(MsgActionCreator(chatRoomId, res.data.messages || []));
        console.log(res.data.messages)
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();

    // Clean up socket on unmount or chat room change
    return () => {
      if (socket) {
        socket.disconnect();
        console.log("Socket disconnected for chatRoomId:", chatRoomId);
      }
    };
  }, [senderId, receiverId, chatRoomId, dispatch]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const messageData = {
      message: input.trim(),
      receiverId,

    };
console.log(messageData,'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
    try {
      await axios.post("http://localhost:5665/chat/sendmessage", messageData, {
        headers: {
          Authorization:`Bearer ${localStorage.getItem("token-key")}`,
        },
      });
      setInput("");
    } catch (err) {
      console.error("Send Error:", err);
    }
  };

  // Show loading if sender or receiver not ready
  if (!senderId || !receiverId) {
    return <div className="loading">Loading chat...</div>;
  }

  return (
    <div className="chat">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-user">
          <img src={receiver?.image || ""} alt="user" />
          <h2>{receiver?.fname || "User"}</h2>
        </div>
        <div className="chat-header-icons">
          <i className="bi bi-camera-video"></i>
          <i className="bi bi-search"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      {/* Chat Body */}
      <div className="chat-body">
        {messages.length > 0 ? (
          messages.map((msg, idx) => {
            if (!msg || !msg.senderId) return null;
            const isSender = msg.senderId === senderId;
            return (
              <div
                key={msg._id || idx}
                className={`chat-message ${isSender ? "sent" : "received"}`}
              >
                <span>{msg.message}</span>
              </div>
            );
          })
        ) : (
          <div className="no-messages">No messages yet</div>
        )}
        <div ref={bottomRef}></div>
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <div className="chat-footer-icons">
          <i className="bi bi-plus-lg"></i>
          <i className="bi bi-file-earmark-text-fill"></i>
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message"
          autoComplete="off"
          spellCheck="false"
        />

        <div
          onClick={handleSend}
          className="send-icon"
          role="button"
          tabIndex={0}
          aria-label="Send message"
        >
          <i className="bi bi-send"></i>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
