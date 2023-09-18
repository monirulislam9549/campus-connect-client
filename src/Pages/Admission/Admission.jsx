import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const subjects = [
  "Physics",
  "Chemistry",
  "Math",
  "English",
  "Biology",
  "Machine Learning",
  "Computer Science",
];
const colleges = [
  "Harborview Community College",
  "Mountainview College",
  "Riverdale State University",
  "Meadowview Institute of Technology",
  "Oakwood College",
  "Willowbrook University",
];
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const Admission = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [selectCategory, setSelectCategory] = useState("");
  const [selectCollege, setSelectCollege] = useState("");
  const { register, handleSubmit } = useForm();
  const [profile, setProfile] = useState({});
  const [prevSelected, setPrevSelected] = useState(null);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleSelectChange = (event) => {
    setSelectCategory(event.target.value);
  };
  const handleSelectCollege = (event) => {
    setSelectCollege(event.target.value);
  };

  useEffect(() => {
    // Fetch the user's admission data based on their email
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [user]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imageLink = imageData.data.display_url;
          const { name, email, address, phone, subject, college, date } = data;
          console.log(data);
          const studentInfo = {
            image: imageLink,
            name,
            email,
            address,
            phone: parseFloat(phone),
            subject,
            college,
            date: new Date(date),
          };
          console.log(studentInfo);
          axios
            .post(
              "https://campus-connect-server-azure.vercel.app/admission",
              studentInfo
            )
            .then((response) => {
              const data = response.data; // Get the response data
              if (data.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Submitted successfully",
                });
              }
            })
            .catch((error) => {
              if (error.response?.data?.error) {
                Swal.fire({
                  icon: "error",
                  title:
                    "You are already select the same college and subject. You cannot select the same college and subject twice",
                  text: error.response.data.error,
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops....",
                  text: "Something went wrong. Please try again later.",
                });
              }
            });
        }
      });
  };

  // Disable options that match the previous selection
  const disablePrevSelected = (option) => {
    if (prevSelected === null) return false;
    return prevSelected === option;
  };
  return (
    <div>
      <div className="grid grid-cols-2  gap-4 mx-20 my-10">
        <div className="bg-[#1f4363] text-white p-10">
          <h1 className=" text-4xl font-bold">REQUEST AN ADMISSION</h1>
          <p>
            Fusce purus mauris, blandit vitae purus eget, viverra volutpat nibh.
            Nam in elementum nisi, a placerat nisi. Quisque ullamcorper magna in
            odio rhoncus semper.Sed nec ultricies velit. Aliquam non massa id
            enim ultrices aliquet a ac tortor. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
        <div className="bg-[#ebebeb]">
          <div className="max-w-2xl mx-auto bg-white p-16">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium "
                  >
                    Candidate Name
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                    {...register("name", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    defaultValue={user?.email}
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Candidate Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium"
                  >
                    <span className="label-text">Choose Subject</span>
                  </label>
                  <select
                    {...register("subject", { required: true })}
                    value={selectCategory}
                    onChange={(event) => {
                      setPrevSelected(selectCategory);
                      handleSelectChange(event);
                    }}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option
                        key={subject}
                        value={subject}
                        disabled={disablePrevSelected(subject)}
                      >
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="college"
                    className="block mb-2 text-sm font-medium"
                  >
                    Choose College
                  </label>
                  <select
                    {...register("college", { required: true })}
                    value={selectCollege}
                    onChange={(event) => {
                      setPrevSelected(selectCollege);
                      handleSelectCollege(event);
                    }}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select College</option>
                    {colleges.map((college) => (
                      <option
                        key={college}
                        value={college}
                        disabled={disablePrevSelected(college)}
                      >
                        {college}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium"
                  >
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Date Of Birth"
                    {...register("date", { required: true })}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium"
                >
                  Choose Photo
                </label>
                <input
                  type="file"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("image", { required: true })}
                />
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
