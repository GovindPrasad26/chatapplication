import UserAction from "../action/useraction";
const userActionCreator=(userdata)=>{
    UserAction.payload=userdata
    return UserAction
}
export default userActionCreator;