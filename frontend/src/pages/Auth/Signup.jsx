import { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector.jsx";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const SignUp = () => {
  const [profPic, setProPic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(
        API_PATHS.AUTH.REGISTER,
        {
          fullName,
          email,
          password,
        }
      );

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }

    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">
          Create an Account
        </h3>

        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Enter your details
        </p>

        <form onSubmit={handleSignUp} autoComplete="off">
          <ProfilePhotoSelector
            image={profPic}
            setImage={setProPic}
          />

          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            label="Full Name"
            placeholder="Mahesh"
            type="text"
          />

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="mahesh@gmail.com"
            type="text"
          />

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Min 6 characters"
            type="password"
          />

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}

          <button type="submit" className="btn-primary mt-4">
            SIGN UP
          </button>

          <p className="text-sm mt-3">
            Already have an account?{" "}
            <Link to="/login" className="underline text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
