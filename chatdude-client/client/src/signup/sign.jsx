// import { useState } from "react";
// import "./sign.css"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Login from "../login/login";
// function SignUp() {
//     let Navigatef = useNavigate()
// const [error, setError] = useState(false);
// const [validationErrors,setValidationErrors]=useState({})
//   const [user, setUser] = useState({
//     fname: "",
//     lname: "",
//     gender: "",
//     email: "",
//     password: "",
//     phone: "",
//   });
//   const Validate =()=>{
//     const error ={}
//     if(!user.fname.trim()) error.fname="FIRST NAME REQIRED"
//     if(!user.lname.trim()) error.lname="LAST NAME REQIRED"
//     if(!user.gender.trim()) error.lname="GENDER SPECIFIED"
//     if(!user.email.trim()){
//     error.email="EMAIL REQUIRED"}
//     else if (!/\S+@\S+\.\S+/.test(user.email)){
//            error.email='IVALID FORMAT'
//     }
//    if(!user.password.trim()){
//     error.password='PASSWORD IS WRONG'
//    }else if(user.password.length<6){
//        error.password='password must be at least 6 characters'
//    }
//    if(!user.phone.trim()){
//     error.phone='phone number is required'}
//         else if(!/^\d{10}$/.test(user.phone)){
//             error.phone="phone number must be 10digits"
//         }

    
//     return error
//     }
//   console.log(user)
//   const getNewUser = () => {

//       const errors = Validate()
//       if(Object.keys(errors).length > 0){
//          setValidationErrors(errors)
//          return
//       }


//     axios
//       .post("http://localhost:5665/users/signup", user)
//       .then((res) => {
//         if (res.data.ok) {
     
//           Navigatef('/login')
//         }
//         console.log(res);
//         setUser({
//           fname: "",
//           lname: "",
//           gender: "",
//           email: "",
//           password: "",
//           phone: "",
//         });
//         setValidationErrors({});
//       })
//       .catch((error) => {
//         console.log(error);
//         setError(true);
//       });
//   };
//   // const getNewUser = () => {

//   //     const errors = Validate()
//   //     if(Object.keys(errors).length > 0){
//   //        setValidationErrors(errors)
//   //        return
//   //     }


//   //   axios
//   //     .post("http://localhost:5665/users/signup", user)
//   //     .then((res) => {
//   //       if (res.data.ok) {
     
//   //         Navigatef('/login')
//   //       }
//   //       console.log(res);
//   //       setUser({
//   //         fname: "",
//   //         lname: "",
//   //         gender: "",
//   //         email: "",
//   //         password: "",
//   //         phone: "",
//   //       });
//   //       setValidationErrors({});
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //       setError(true);
//   //     });
//   // };

//   return (
//     <div className="main-signup-container">
//       <div className="signup-container">
//         <h2>Signup Page</h2>
//         <form>
//           <div>
//             <input
//               onChange={(event) => {
//                 setUser({ ...user, fname: event.target.value });
//               }}
//               type="text"
//               value={user.fname}
//               placeholder="First Name"
//             />{validationErrors.fname && <p className="error-text">{validationErrors.fname}</p>}
//           </div>
//           <div>
//             <input
//               onChange={(event) => {
//                 setUser({ ...user, lname: event.target.value });
//               }}
//               type="text"
//               value={user.lname}
//               placeholder="Last Name"
//             />{validationErrors.lname && <p className="error-text">{validationErrors.lname}</p>}
//           </div>
//           <div style={{ display:'flex',marginLeft:'60px'}}>
//             <div>
//               <input
//                 type="radio"
//                 onChange={(event) => {
//                   setUser({ ...user, gender: event.target.value });
//                 }}
//                 name="gender"
//                 value={"male"}
//                 checked={user.gender === "male"}

//               />
//               <label>male</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 onChange={(event) => {
//                   setUser({ ...user, gender: event.target.value });
//                 }}
//                 name="gender"
//                 value={"female"}
//                 checked={user.gender === "female"}

//               />
//               <label>female</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 onChange={(event) => {
//                   setUser({ ...user, gender: event.target.value });
//                 }}
//                 name="gender"
//                 value={"other"} 
//                 checked={user.gender === "other"}

//               />{validationErrors.gender && <p className="error-text">{validationErrors.gender}</p>}
//               <label>other</label>
//             </div>
//           </div>
//           <div>
//             <input
//               type="email"
//               onChange={(event) => {
//                 setUser({ ...user, email: event.target.value });
//               }}
//               placeholder="Email Id"
//               value={user.email}
//             />{validationErrors.email && <p className="error-text">{validationErrors.email}</p>}
//           </div>
//           <div>
//             <input
//               type="password"
//               onChange={(event) => {
//                 setUser({ ...user, password: event.target.value });
//               }}
//               placeholder="Password"
//               value={user.password}
//             />{validationErrors.password && <p className="error-text">{validationErrors.password}</p>}
//           </div>
//           <div>
//             <input
//               type="text"
//               onChange={(event) => {
//                 setUser({ ...user, phone: event.target.value });
//               }}
//               placeholder="Mobile Number"
//               value={user.phone}
//             />{validationErrors.phone && <p className="error-text">{validationErrors.phone}</p>}
//           </div>
//           <div>
//             <input type="button" value="signup" onClick={getNewUser} />
//           </div>
//         </form>
//       </div>

//       {error ? (
//         <div style={{ textAlign: "center" }}>
//           <h2 style={{ color: "red", fontSize: "28px" }}>
//             Failed to Create Account
//           </h2>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default SignUp;


import { useState } from "react";
import "./sign.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../login/login";
function SignUp() {
    let Navigatef = useNavigate()
const [error, setError] = useState(false);
const [validationErrors,setValidationErrors]=useState({})
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    phone: "",
  });
  const Validate =()=>{
    const error ={}
    if(!user.fname.trim()) error.fname="FIRST NAME REQIRED"
    if(!user.lname.trim()) error.lname="LAST NAME REQIRED"
    if(!user.gender.trim()) error.lname="GENDER SPECIFIED"
    if(!user.email.trim()){
    error.email="EMAIL REQUIRED"}
    else if (!/\S+@\S+\.\S+/.test(user.email)){
           error.email='IVALID FORMAT'
    }
   if(!user.password.trim()){
    error.password='PASSWORD IS WRONG'
   }else if(user.password.length<6){
       error.password='password must be at least 6 characters'
   }
   if(!user.phone.trim()){
    error.phone='phone number is required'}
        else if(!/^\d{10}$/.test(user.phone)){
            error.phone="phone number must be 10digits"
        }

    
    return error
    }
  console.log(user)
  const getNewUser = () => {

      const errors = Validate()
      if(Object.keys(errors).length > 0){
         setValidationErrors(errors)
         return
      }


    axios
      .post("https://chatapp-eox3.onrender.com/users/Login", user)
      .then((res) => {
        if (res.data.ok) {
     
          Navigatef('/login')
        }
        console.log(res);
        setUser({
          fname: "",
          lname: "",
          gender: "",
          email: "",
          password: "",
          phone: "",
        });
        setValidationErrors({});
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  // const getNewUser = () => {

  //     const errors = Validate()
  //     if(Object.keys(errors).length > 0){
  //        setValidationErrors(errors)
  //        return
  //     }


  //   axios
  //     .post("http://localhost:5665/users/signup", user)
  //     .then((res) => {
  //       if (res.data.ok) {
     
  //         Navigatef('/login')
  //       }
  //       console.log(res);
  //       setUser({
  //         fname: "",
  //         lname: "",
  //         gender: "",
  //         email: "",
  //         password: "",
  //         phone: "",
  //       });
  //       setValidationErrors({});
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(true);
  //     });
  // };

  return (
    <div className="main-signup-container">
      <div className="signup-container">
        <h2>Signup Page</h2>
        <form>
          <div>
            <input
              onChange={(event) => {
                setUser({ ...user, fname: event.target.value });
              }}
              type="text"
              value={user.fname}
              placeholder="First Name"
            />{validationErrors.fname && <p className="error-text">{validationErrors.fname}</p>}
          </div>
          <div>
            <input
              onChange={(event) => {
                setUser({ ...user, lname: event.target.value });
              }}
              type="text"
              value={user.lname}
              placeholder="Last Name"
            />{validationErrors.lname && <p className="error-text">{validationErrors.lname}</p>}
          </div>
          <div style={{ display:'flex',marginLeft:'60px'}}>
            <div>
              <input
                type="radio"
                onChange={(event) => {
                  setUser({ ...user, gender: event.target.value });
                }}
                name="gender"
                value={"male"}
                checked={user.gender === "male"}

              />
              <label>male</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={(event) => {
                  setUser({ ...user, gender: event.target.value });
                }}
                name="gender"
                value={"female"}
                checked={user.gender === "female"}

              />
              <label>female</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={(event) => {
                  setUser({ ...user, gender: event.target.value });
                }}
                name="gender"
                value={"other"} 
                checked={user.gender === "other"}

              />{validationErrors.gender && <p className="error-text">{validationErrors.gender}</p>}
              <label>other</label>
            </div>
          </div>
          <div>
            <input
              type="email"
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
              placeholder="Email Id"
              value={user.email}
            />{validationErrors.email && <p className="error-text">{validationErrors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
              placeholder="Password"
              value={user.password}
            />{validationErrors.password && <p className="error-text">{validationErrors.password}</p>}
          </div>
          <div>
            <input
              type="text"
              onChange={(event) => {
                setUser({ ...user, phone: event.target.value });
              }}
              placeholder="Mobile Number"
              value={user.phone}
            />{validationErrors.phone && <p className="error-text">{validationErrors.phone}</p>}
          </div>
          <div>
            <input type="button" value="signup" onClick={getNewUser} />
          </div>
        </form>
      </div>

      {error ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "red", fontSize: "28px" }}>
            Failed to Create Account
          </h2>
        </div>
      ) : null}
    </div>
  );
}

export default SignUp;


