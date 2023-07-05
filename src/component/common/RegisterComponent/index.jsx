import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [modalIsOpen, setIsOpen] = useState(0);
  const [mobile, SetMobile] = useState();
  const [otpdata, setOtpdata] = useState([]);
  const [errOtp, setErrorOtp] = useState(false);
  const [time, setTime] = useState(60);
  const [IstimeActive, setIsTimeActive] = useState(true);
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    // setOtpdata(e)
    const valueotp = e;
    const extractedOtp = valueotp.replace(/\D/g, "");
    setOtpdata(extractedOtp);

    if (extractedOtp?.length === 4) {
      setErrorOtp(false);
    } else {
      setErrorOtp(true);
    }
  };

  const handleChangeNumber = (e) => {
    const inputValue = e.target.value;
    const extractedNumber = inputValue.replace(/\D/g, "");
    if (extractedNumber?.length === 10) {
      SetMobile(extractedNumber);
    }
    if (extractedNumber?.length < 10) {
      SetMobile(extractedNumber);
    }
  };

  const handleNumberEdit = () => {
    setIsOpen(0);
    setOtpdata([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    let Interval;

    if (IstimeActive) {
      Interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsTimeActive(false);
            clearInterval(Interval);
            return 0;
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(Interval);
    };
  }, [IstimeActive]);

  useEffect(() => {
    if (time === 0) {
      setIsTimeActive(false);
    }
  }, [time]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailErr = event.target.value.replace(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/g,
      ""
    );
    if (!emailErr) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="absolute bg-login-page inset-0 z-0"></div>
        <div className="container mx-auto">
          <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center gap-8  ">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
              <div className="self-start  lg:flex flex-col  text-black">
                <img src="" className="mb-3" />
                <h1 className="mb-3 font-bold text-5xl opacity-[0.6]">
                  Hello, Friends
                </h1>
                <p className="pr-3">
                  Enter your personal details and start journey with us
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10">
              <div className="p-12 bg-login-box mx-auto ">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Create Account
                  </h3>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        First Name
                      </label>
                      <input
                        onChange={(e) => handleEmailChange(e)}
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
                        onChange={(e) => handleEmailChange(e)}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="text"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Email 
                        </label>
                        <input
                        onChange={(e) => handleEmailChange(e)}
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
                        onChange={(e) => handleEmailChange(e)}
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                        type="tel"
                        placeholder="Enter Your mobile number"
                        />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Password
                        </label>
                        <input
                        onChange={(e) => handleEmailChange(e)}
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
                      onChange={(e) => handleEmailChange(e)}
                      className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none "
                      type="password"
                      placeholder="Password"
                    />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Pancard File
                        </label>
                        <input type="file" id="myfile" name="myfile" className="w-full text-base pr-2 border  border-gray-300 rounded-lg focus:outline-none " />

                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Adharcard File
                    </label>
                    <input type="file" id="myfile" name="myfile"  className="w-full text-base pr-2 border  border-gray-300 rounded-lg focus:outline-none"/>

                    </div>
                  </div>
                </div>

                <div className="mt-8">
            
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center bg-blue-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div>
                    <p className="text-center text-[12px] pt-2">
                      If You Have No Account{" "}
                      <Link to="/signup">
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
