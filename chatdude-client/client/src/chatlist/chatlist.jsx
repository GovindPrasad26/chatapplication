import './chatlist.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchAllUsers from '../services/apiCalls/fetchuserdata';
import Userchat from './usechat';
import Search from '../search/search';

function Chatlist() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserReducer.result);
  const interactionTimes = useSelector((state) => state.chatInteraction);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllUsers(dispatch); // Dispatch user list from API
  }, [dispatch]);

  // Filter + sort based on interaction time
  const filteredAndSortedUsers = [...(users || [])]
    .filter(user => {
      const fullName = `${user.fname} ${user.lname}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      return (interactionTimes[b._id] || 0) - (interactionTimes[a._id] || 0);
    });

  return (
    <div className="chat-list">
      <Search onSearch={setSearchTerm} />

      {filteredAndSortedUsers.length > 0 ? (
        filteredAndSortedUsers.map((userItem) => (
          <Userchat
            key={userItem._id}
            image={userItem.image}
            userName={userItem.fname + " " + userItem.lname}
            lastMessage={"Hey, how are you?"}
            id={userItem._id}
            user={userItem}
          />
        ))
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
}

export default Chatlist;
