import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
  const [_user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const { user, login, loginWithGoogle, resetPass } = useAuth();
  const navigate = useNavigate();
  if (user) return <Navigate to="/profile" />;

  const handleChange = ({ target }) => {
    setUser({ ..._user, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(_user.email, _user.password);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();

      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!_user.email) return setError("Please enter your email");
    try {
      await resetPass(_user.email);
      setError("We sent an email to reset your password");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-gray-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
            Login
          </button>
          <a
            href="#!"
            onClick={handleResetPassword}
            className="inline-block align-baseline text-sm text-white hover:text-violet-800"
          >
            Forgot Password
          </a>
        </div>
      </form>

      <p className="my-4 text-sm text-white flex justify-between px-3">
        Don't have an Account? <Link to="/register">Register</Link>
      </p>

      <button
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-gray-300 py-2 px-4 w-full"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
