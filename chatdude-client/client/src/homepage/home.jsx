import Header from "../header/header";
import './home.css'
import Sidebar from "../sidebar/sidebar";
import Chatarea from "../chatarea/chatarea";
function Home(){
    return(<div className="home" >
            <Header/>
            <div className="bottomrow">
                <Sidebar/>
                <Chatarea/>
            </div>
    </div>)
}
export default Home;