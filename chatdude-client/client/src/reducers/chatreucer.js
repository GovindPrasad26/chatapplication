const ChatReducer=(state={name:'prasad',selected:""},action)=>{
    console.log(state,'prasad')
  if(action.type=='chat'){
    state=action.payload
  }else if(action.type ==='selected-chat'){
   
        state={
          ...state,
          selected:action.payload
        }
     
  }
    return state;
}
export default ChatReducer
