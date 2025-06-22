// // import store from "../reduxstore/store";
// // import { useSelector } from "react-redux";
// //         function Chatheader() {
// //               const {image,fname} = useSelector((state) => state.ChatReducer.selected);
// //             const headerStyle = {
// //                 display: 'flex',
// //                 justifyContent: 'space-between',
// //                 alignItems: 'center',
// //                 width: '100%',
        
// //                 padding: '20px',
// //                 backgroundColor:'black',
// //                 // border: '1px solid white',
             
                
// //             };
           
// //             const leftStyle = {
// //                 display: 'flex',
// //                 gap: '10px', 
// //                alignItems: 'center'
// //             };
        
// //             const rightStyle = {
// //                 display: 'flex',
// //                 gap: '20px', 
// //                 alignItems: 'center'
// //             };
        
// //             return (
// //                 <div style={headerStyle}>
                
// //                     <div style={leftStyle}>
// //                     <div>
// //     <img 
// //         src={image}
// //         alt="" 
// //         style={{
// //             width: '50px',
// //             height: '50px',
// //             borderRadius: '50%', 
// //             objectFit: 'cover'
// //         }}
// //     />
// // </div>
// //                         <div><h2 style={{color:'white'}}>{fname}</h2></div>
// //                     </div>
// //                     {/* Right Section */}
// //                     <div style={rightStyle}>
// //                         <div><i class="bi bi-camera-video" style={{fontSize:'30px' ,color:'white'}}></i></div>
// //                         <div><i class="bi bi-search"  style={{fontSize:'20px' ,color:'white'}}></i> </div>
// //                         <div><i class="bi bi-three-dots-vertical" style={{color:'white'}}></i></div>
// //                     </div>
// //                 </div>
// //             );
// //         }
        
// //         export default Chatheader;
        
// import { useSelector } from "react-redux";

// function Chatheader() {
//   const { image, fname,_id } = useSelector((state) => state.ChatReducer.selected || {});

//   const headerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     padding: '20px',
//     backgroundColor: 'black',
//   };

//   const leftStyle = {
//     display: 'flex',
//     gap: '10px',
//     alignItems: 'center',
//   };

//   const rightStyle = {
//     display: 'flex',
//     gap: '20px',
//     alignItems: 'center',
//   };

//   return (
//     <div style={headerStyle}>
//       {/* Left Section */}
//       <div style={leftStyle}>
//         <div>
//           <img
//             src={image}
//             alt="user"
//             style={{
//               width: '50px',
//               height: '50px',
//               borderRadius: '50%',
//               objectFit: 'cover',
//             }}
//           />
//         </div>
//         <div>
//           <h2 style={{ color: 'white' }}>{fname}</h2>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div style={rightStyle}>
//         <div><i className="bi bi-camera-video" style={{ fontSize: '30px', color: 'white' }}></i></div>
//         <div><i className="bi bi-search" style={{ fontSize: '20px', color: 'white' }}></i></div>
//         <div><i className="bi bi-three-dots-vertical" style={{ color: 'white' }}></i></div>
//       </div>
//     </div>
//   );
// }

// export default Chatheader;

//       import { useSelector } from "react-redux";

// function ChatDisplay() {
//   const { image, fname } = useSelector((state) => state.ChatReducer.selected || {});

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       {image && (
//         <img
//           src={image}
//           alt="Selected user"
//           style={{ width: '100px', height: '100px', borderRadius: '50%' }}
//         />
//       )}
//       <h2>{fname || 'User'}</h2>
//     </div>
//   );
// }

// export default ChatDisplay;