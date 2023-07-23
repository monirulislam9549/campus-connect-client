import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  // TwitterAuthProvider,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app } from "../../firebase/firebase.config";

const auth = getAuth(app);
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const { signIn, socialUser } = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
      reset();
    });
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // const twitterProvider = new TwitterAuthProvider();

  const handleGoogleSignIn = () => {
    socialUser(googleProvider)
      .then((result) => {
        // navigate("/");
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    socialUser(githubProvider)
      .then((result) => {
        navigate("/");
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  // const handleTwitterSignIn = () => {
  //   socialUser(twitterProvider)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      toast.warn("Please provide your email address to reset");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Please check your email address");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-full w-full py-4 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p
            tabIndex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Dont have account?
            <Link
              to="/signUp"
              href="javascript:void(0)"
              className="focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-blue-500 underline cursor-pointer ml-2"
            >
              Sign up here
            </Link>
          </p>
          <button
            onClick={handleGoogleSignIn}
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10 hover:bg-blue-400"
          >
            <FcGoogle></FcGoogle>
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <button
            onClick={handleGithubSignIn}
            aria-label="Continue with github"
            role="button"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-blue-400"
          >
            <FaGithub></FaGithub>

            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Github
            </p>
          </button>
          <button
            // onClick={handleTwitterSignIn}
            aria-label="Continue with Facebook"
            role="button"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-blue-400"
          >
            <FaFacebookF fill="#3842ff"></FaFacebookF>

            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Facebook
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                ref={emailRef}
                {...register("email", { required: true })}
                type="email"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="mt-6  w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 8,
                    // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  value={password}
                  onChange={handlePasswordChange}
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />

                <div
                  onClick={handleTogglePassword}
                  className="absolute right-0 mt-2 mr-3 cursor-pointer"
                >
                  {passwordVisible ? (
                    <FaEyeSlash></FaEyeSlash>
                  ) : (
                    <FaEye></FaEye>
                  )}
                </div>
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                className="bg-blue-400 text-white focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-non border rounded py-4 w-full hover:bg-blue-300"
              >
                Login
              </button>
            </div>
          </form>
          <button onClick={handleResetPassword} className="underline mt-3">
            Forget Password
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
