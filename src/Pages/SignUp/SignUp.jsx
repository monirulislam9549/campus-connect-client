import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { updateUserProfile, createUser, loading } = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      // axios
      //   .post(
      //     `https://api.imgbb.com/1/upload?key=${
      //       import.meta.env.VITE_img_api_Key
      //     }`,
      //     formData
      //   )
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imageLink = imageData.data.display_url;

          createUser(data.email, data.password).then(() => {
            // const loggedUser = result.user;
            // console.log(loggedUser);

            updateUserProfile(data.name, imageLink).then(() => {
              const user = {
                name: data.name,
                email: data.email,
                image: imageLink,
              };
              axios
                .post(
                  "https://campus-connect-server-azure.vercel.app/users",
                  user
                )
                .then((res) => {
                  if (res.data.insertedId) {
                    reset();
                    navigate(from, { replace: true });
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "User created Successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          });
        }
      });
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-full w-full py-4 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            SignUp Now
          </p>
          <p
            tabIndex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Already have an account?
            <Link
              to="/login"
              href="javascript:void(0)"
              className="focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-blue-500 underline cursor-pointer ml-2"
            >
              Login
            </Link>
          </p>
          <button
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
            aria-label="Continue with twitter"
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
                id="name"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                type="text"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                type="text"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="mt-6 w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
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
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 character</p>
                )}
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
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="file" className="block mb-2 text-sm font-medium">
                Choose Photo
              </label>
              <input
                type="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("image", { required: true })}
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                role="button"
                className="bg-blue-400 text-white focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-non border rounded py-4 w-full relative"
                // disabled={loading}
              >
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ScaleLoader height={21} color="#36d7b7" />
                  </div>
                ) : (
                  "Create my account"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
