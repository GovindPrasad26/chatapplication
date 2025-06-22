import "./header.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Header() {
    const navigate = useNavigate();

    // const userName = useSelector((state) => state.data.fname);
    const userName = useSelector((state) => state.Reducer.data?.fname || "");
    const userNames = useSelector((state) => state.Reducer.data?.image || "");  


    useEffect(() => {
        console.log(userName, 'expected');
    }, [userName]); // Logs when userName updates
    return (
        
        <div className="header">
            <div className="brand">
                <i className="bi bi-chat-left-dots-fill">&nbsp;CHAT DUDE</i>
            </div>
            <div className="options">
       
                <img
                    src={userNames}
                    alt="User Avatar"
                    width="70"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <h2 style={{ color: "white",marginRight:'30px' }}>{userName}</h2> 
                &nbsp;&nbsp;&nbsp;
                <i
                    className="bi bi-power"
                    onClick={() => {
                        localStorage.removeItem("token-key");
                        navigate("/Login");
                    }}
                >
                    &nbsp;&nbsp;
                </i>
            </div>
        </div>
    );
}

export default Header;
