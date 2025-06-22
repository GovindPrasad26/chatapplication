const UserReducer=(state={
    name:'govind',
    
},action)=>{
  if(action.type=='user'){
    state=action.payload
  }
    return state;
}
export default UserReducer