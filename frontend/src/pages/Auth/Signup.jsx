// import { useState } from "react";
// import AuthLayout from "../../components/layouts/AuthLayout";
// import { Link, useNavigate } from "react-router-dom";
// // import Input from "../../components/Inputs/Input";
// // import validateEmail from "../../utils/helper";
// // import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector.jsx";

// const SignUp = () => {
//   const [profPic,setProPic]=useState(null);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate=useNavigate();

//   const handleSignUp = async(e) => {
//     e.preventDefault();
//       e.stopPropagation();   

//     let profileImage="";
//     if(!fullName){
//       setError("Please enter your name");
//       return;
//     }
//     if(!validateEmail(email)){
//       setError("Please enter a valid email address");
//       return;
//     }
//     if(!password){
//       setError("Please enter the password");
//       return;
//     }
//     setError("");
//   };

//   return (
//     <AuthLayout>
//       <div className="lg:w-[100%] h-auto flex flex-col justify-center">
//         <h3 className="text-xl font-semibold text-black">Create an Account</h3>
//         <p className="text-xs text-slate-700 mt-[5px] mb-6">
//           Enter your details
//         </p>

// <form onSubmit={handleSignUp} autoComplete="off">

//           <ProfilePhotoSelector image={profPic} setImage={setProPic}/>
//           <Input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             label="Full Name"
//             placeholder="Mahesh"
//             type="text"
//           />

//           <Input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             label="Email"
//             placeholder="john@gmail.com"
//             type="text"
//           />

//           <Input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             label="Password"
//             placeholder="Min 8 characters"
//             type="password"
//           />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button type="submit" className="btn-primary">
//             SIGN UP
//           </button>

//           <p className="text-sm mt-3">
//             Already have an account?{" "}
//             <Link to="/login" className="underline text-primary">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </AuthLayout>
//   );
// };

// export default SignUp;
