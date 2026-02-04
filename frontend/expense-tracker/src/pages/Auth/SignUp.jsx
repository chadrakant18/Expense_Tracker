import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import {Link, useNavigate} from 'react-router-dom';
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [proPic,setProPic]=useState(null);
  const [fullName,setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [error,setError]=useState(null);

  const navigate=useNavigate();

  const handleSignUp=async(e)=>{

  }
  return 
  (
    <AuthLayout>
      <div className="lg:w-[100%]m h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Enter your details</p>
        <form onSubmit={handleSignUp}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
            value={fullName}
            onChange={({target})=>setFullName(target.value)}
            label="Full Name"
            placeholder="mahesh"
            type="text"/>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
