import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../utils/Constant/constant";
import toast, { Toaster } from 'react-hot-toast';
import {MdArrowBackIos} from 'react-icons/md'

function UserRegister() {
  const [registerData, setRegisterData] = useState([]);
  const [profile, setProfile] = useState([]);
  const [aadharCard, setAadharCard] = useState([]);
  const [nextPage,setNextPage] = useState(false)
  const navigate = useNavigate();
  const formData = new FormData();
  const handleChange = (e) => {
    if (e.target.name === "profile_photo") {
      setProfile(e.target.files[0]);
    }
    if (e.target.name === "aadhar_card") {
      setAadharCard(e.target.files[0]);
    }
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  console.log(registerData,"registerData");
  const handleClick = () => {
    formData.append("profilePhoto", profile);
    formData.append("aadharCard", aadharCard);
    // Append string values to the FormData object
    formData.append("firstName", registerData.first_name);
    formData.append("lastName", registerData?.last_name);
    formData.append("email", registerData?.email);
    formData.append("mobileNumber", registerData?.mobile_number);
    formData.append("password", registerData?.password);
    formData.append("confirm_password", registerData?.confirm_password);
    formData.append("salary", registerData?.salary);
    formData.append("income", registerData?.income);
    formData.append("totalTraineePeriods", registerData?.totalTraineePeriods);
    formData.append("incrementMonths", registerData?.incrementMonths);
    formData.append("incrementSalary", registerData?.incrementSalary);
    formData.append("DOB", registerData?.DOB);
    formData.append("role", registerData?.role);
    axios
      .post(`${BASE_URL}/user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.message) {
          toast.success('User Register Successfully');
          setTimeout(() => {
            navigate("/dashboard");
          }, [4000]);
        }
      })
      .catch((err) => {
        console.log(err.response.data.error, "errr");
        toast.error(err.response.data.error);
      });
  };
  return (
    <div>
      <Toaster />
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="absolute bg-login-page inset-0 z-0 max-[479px]:!h-full"></div>
        <div className="container mx-auto !px-20 max-[1200px]:!px-0 max-[1024px]:!px-8 max-[991px]:min-w-full max-[479px]:py-20  max-[479px]:px-4">
          <div className="min-h-screen grid grid-cols-2 mx-0 justify-center gap-8 max-[991px]:gap-0 max-[576px]:grid-cols-1  max-[576px]:content-center	">
            <div className="flex-col flex  self-center p-10 max-[1024px]:!px-0 sm:max-w-5xl xl:max-w-2xl  z-10 max-[479px]:pt-0">
              <div className="self-start  lg:flex flex-col  text-black max-[576px]:self-center max-[576px]:text-center">
                <img src="" className="mb-3" />
                <h1 className="mb-3 font-bold text-5xl opacity-[0.6] max-[991px]:text-[42px] max-[771px]:text-[36px] max-[479px]:text-[32px]">
                  User Register
                </h1>
                <p className="pr-3 max-[576px]:pr-0">
                  Enter your personal details and start journey with us
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10">
              <div className="p-12 bg-login-box mx-auto max-[576px]:p-8">
                <div className="mb-4">
                  {nextPage ? 
                  <div className="flex items-center mb-4 bg-white justify-center py-1 rounded-lg w-[80px] cursor-pointer" onClick={()=>{setNextPage(false)}}><MdArrowBackIos/>Back</div>:""}
                  <h3 className="font-semibold text-2xl text-gray-800">
                   User Create Account
                  </h3>
                </div>
                {!nextPage ? 
                <>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        First Name
                      </label>
                      <input
                        name="first_name"
                        onChange={(e) => handleChange(e)}
                        id="first_name"
                        value={registerData.first_name}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your First Name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Last Name
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="last_name"
                        id="last_name"
                        value={registerData.last_name}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Email
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="email"
                        value={registerData.email}
                        id="email"
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="email"
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Mobile Number
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        value={registerData.mobile_number}
                        name="mobile_number"
                        id="mobile_number"
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="tel"
                        placeholder="Enter Your mobile number"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Password
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="password"
                        value={registerData.password}
                        id="password"
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Confirm Password
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="confirm_password"
                        id="confirm_password"
                        value={registerData.confirm_password}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                  <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Adharcard File
                      </label>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleChange(e)}
                        id="aadhar_card"
                        name="aadhar_card"
                        className="w-full text-base pr-2 border  border-gray-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Profile Photo
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        type="file"
                        multiple
                        id="profile_photo"
                        name="profile_photo"
                        className="w-full text-base pr-2 border  border-gray-300 rounded-lg focus:outline-none "
                      />
                    </div>
         
                  </div>
                </div>
                <div className="mt-8">
                  <div>
                    <button
                      onClick={() => setNextPage(true)}
                      type="submit"
                      className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      Next
                    </button>
                  </div>
                  <div>
                    <p className="text-center text-[12px] pt-4">
                      If You Have Account{" "}
                      <Link to="/">
                        <span className="text-blue-400 text-[14px] cursor-pointer">
                          Sign in
                        </span>{" "}
                      </Link>
                    </p>
                  </div>
                </div></>:
                <>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Salary
                      </label>
                      <input
                        name="salary"
                        defaultValue={registerData?.salary}
                        onChange={(e) => handleChange(e)}
                        id="salary"
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your Salary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Income
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="income"
                        id="income"
                        value={registerData.income}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your Income"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Total Trainee Period
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="totalTraineePeriods"
                        id="totalTraineePeriods"
                        value={registerData.totalTraineePeriods}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your Total Trainee Period"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Increment Months
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="incrementMonths"
                        id="incrementMonths"
                        value={registerData.incrementMonths}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="tel"
                        placeholder="Enter Your Increment Months"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Increment Salary
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="incrementSalary"
                        id="incrementSalary"
                        value={registerData.incrementSalary}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your Increment Salary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                      DOB
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="DOB"
                        id="DOB"
                        value={registerData.DOB}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="date"
                        placeholder="DOB"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Role
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="role"
                        id="role"
                        value={registerData.role}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your Role(Profession)"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                <div>
                  <button
                    onClick={() => handleClick()}
                    type="submit"
                    className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign Up
                  </button>
                </div>
                <div>
                  <p className="text-center text-[12px] pt-4">
                    If You Have Account{" "}
                    <Link to="/">
                      <span className="text-blue-400 text-[14px] cursor-pointer">
                        Sign in
                      </span>{" "}
                    </Link>
                  </p>
                </div>
              </div></>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
