import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../utils/Constant/constant";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [registerData, setRegisterData] = useState([]);
  const [panCard, setPanCard] = useState([]);
  const [aadharCard, setAadharCard] = useState([]);
  const navigate = useNavigate();
  const formData = new FormData();
  const handleChange = (e) => {
    if (e.target.name === "pan_card") {
      setPanCard(e.target.files[0]);
    }
    if (e.target.name === "aadhar_card") {
      setAadharCard(e.target.files[0]);
    }
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  console.log(panCard, "panCard");
  const handleClick = () => {
    formData.append("pan_card", panCard);
    formData.append("aadhar_card", aadharCard);
    // Append string values to the FormData object
    formData.append("first_name", registerData.first_name);
    formData.append("last_name", registerData?.last_name);
    formData.append("email", registerData?.email);
    formData.append("mobile_number", registerData?.mobile_number);
    formData.append("password", registerData?.password);
    formData.append("confirm_password", registerData?.confirm_password);
    console.log(registerData, "registerData");
    axios
      .post(`${BASE_URL}/admin/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.message) {
          toast(res.data.message);
          setTimeout(() => {
            navigate("/");
          }, [4000]);
        }
      })
      .catch((err) => {
        console.log(err.response.data.error, "errr");
        toast.error(err.response.data.error);
      });
  };
  console.log(registerData);
  return (
    <div>
      <ToastContainer />
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="absolute bg-login-page inset-0 z-0 max-[479px]:!h-full"></div>
        <div className="container mx-auto !px-20 max-[1200px]:!px-0 max-[1024px]:!px-8 max-[991px]:min-w-full max-[479px]:py-20  max-[479px]:px-4">
          <div className="min-h-screen grid grid-cols-2 mx-0 justify-center gap-8 max-[991px]:gap-0 max-[576px]:grid-cols-1  max-[576px]:content-center	">
            <div className="flex-col flex  self-center p-10 max-[1024px]:!px-0 sm:max-w-5xl xl:max-w-2xl  z-10 max-[479px]:pt-0">
              <div className="self-start  lg:flex flex-col  text-black max-[576px]:self-center max-[576px]:text-center">
                <img src="" className="mb-3" />
                <h1 className="mb-3 font-bold text-5xl opacity-[0.6] max-[991px]:text-[42px] max-[771px]:text-[36px] max-[479px]:text-[32px]">
                  Hello, Friends
                </h1>
                <p className="pr-3 max-[576px]:pr-0">
                  Enter your personal details and start journey with us
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10">
              <div className="p-12 bg-login-box mx-auto max-[576px]:p-8">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Create Account
                  </h3>
                </div>
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
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3 max-[479px]:grid-cols-1">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Pancard File
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        type="file"
                        multiple
                        id="pan_card"
                        name="pan_card"
                        className="w-full text-base pr-2 border  border-gray-300 rounded-lg focus:outline-none "
                      />
                    </div>
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
                  </div>
                </div>
                <div className="mt-8">
                  <div>
                    <button
                      onClick={() => handleClick()}
                      type="submit"
                      className="w-full flex justify-center bg-blue-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
