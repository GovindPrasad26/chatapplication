import "./sidebar.css"
import Search from "../search/search";
import Chatlist from "../chatlist/chatlist";
function Sidebar(){
    return(<div className="sidebar">
        {/* <Search/> */}
        <Chatlist/>
  </div>)
}
export default Sidebar;