
import SignUp from "./signup/sign";
import Login from "./login/login";
import Home from "./homepage/home";
import ProtectRoute from "./protectroute/protect";
import {Route,Routes,Navigate} from "react-router-dom"
function APP(){
  return(<div>
  

    <Routes>
    <Route path="/" element={<Navigate to="/Login" />} /> 
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={
        <ProtectRoute>
       <Home/>
      </ProtectRoute>
    }/>
    </Routes>
   
  </div>)
}
export default APP;


