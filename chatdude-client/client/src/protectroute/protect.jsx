import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getLoggedUser } from "../services/apiCalls/user"
import ActionCreator from "../reduxstore/actioncreator"
import store from "../reduxstore/store"
function ProtectRoute({children}){
    let navigate =useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("token-key")){
             getLoggedUser().then((res)=>{
                console.log(res)
       const storedata =  ActionCreator(res.data)
   store.dispatch(storedata) 
                console.log("protect")
             }).catch((error)=>{
                console.log(error)
             })
        }else{
           navigate('/login')
        }
    })
    return(<div>
   {children}
    </div>)
}
export default ProtectRoute