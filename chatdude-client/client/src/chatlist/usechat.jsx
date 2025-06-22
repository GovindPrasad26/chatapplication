import './chatlist.css';
import { createChat } from '../services/apiCalls/chat';
import { useEffect, useState } from 'react';
import fetchChatList from '../services/apiCalls/fetchchatlistdata';
import { useSelector, useDispatch } from 'react-redux';
import { SelectedChatCreation } from '../actioncreators/chatcreation';
import { updateChatInteraction } from '../actioncreators/last';

function Userchat({ image, userName, lastMessage, id, user }) {
  const dispatch = useDispatch();
  const [chatStarted, setChatStarted] = useState(false);
  const chat = useSelector((state) => state.ChatReducer.data);

  useEffect(() => {
    fetchChatList(dispatch);
  }, [dispatch]);

  const chatExists = chat?.some((chatItem) => chatItem.related_id === id) || chatStarted;

  const handleChatOpen = () => {
    if (chatExists) {
      dispatch(SelectedChatCreation(user));
      dispatch(updateChatInteraction(id)); // move to top
    }
  };

  const StartChat = async (e) => {
    e.stopPropagation();
    try {
      const res = await createChat({ id });
      if (res.data?.ok) {
        setChatStarted(true);
        dispatch(SelectedChatCreation(user));
        dispatch(updateChatInteraction(id)); // move to top
        await fetchChatList(dispatch);
      } else {
        alert('Failed to start chat');
      }
    } catch (error) {
      alert('An error occurred while starting the chat.');
    }
  };

  return (
    <div className="chat-item" onClick={handleChatOpen}>
      <div className="chat-left">
        <img src={image || 'https://via.placeholder.com/40'} alt="profile" className="chat-img" />
        <div className="chat-details">
          <h2 className="chat-name">{userName}</h2>
          {/* <h4 className="chat-msg">{lastMessage}</h4> */}
            {/* <p className={lastMessage === 'Start a conversation' ? 'empty-msg' : 'last-msg'}>
          {lastMessage}
        </p> */}
        </div>
      </div>
      {/* <div className="chat-time">12:45 PM</div> */}
      <div>
        {!chatExists && (
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '5px',
              width: '50px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={StartChat}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}

export default Userchat;
