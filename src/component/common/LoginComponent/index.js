import React, { useEffect, useState } from 'react';

function Login() {
  const [modalIsOpen, setIsOpen] = useState(0)
  const [mobile, SetMobile] = useState()
  const [otpdata, setOtpdata] = useState([])
  const [errOtp, setErrorOtp] = useState(false)
  const [time, setTime] = useState(60)
  const [IstimeActive, setIsTimeActive] = useState(true)
  const [errorEmail, setErrorEmail] = useState(false)
  const [email, setEmail] = useState('')


  const handleChange = (e) => {
    // setOtpdata(e)
    const valueotp = e
    const extractedOtp = valueotp.replace(/\D/g, '')
    setOtpdata(extractedOtp)
   
    if (extractedOtp?.length === 4) {
      setErrorOtp(false)
    }else{
      setErrorOtp(true)
    }
  }

  const handleChangeNumber = (e) => {
    const inputValue = e.target.value
    const extractedNumber = inputValue.replace(/\D/g, '')
    if (extractedNumber?.length === 10) {
      SetMobile(extractedNumber)
    } if (extractedNumber?.length < 10) {
      SetMobile(extractedNumber)
    }
  }

  const handleNumberEdit = () => {
    setIsOpen(0)
    setOtpdata([])
}
const handleSubmit = (e) => {
  e.preventDefault()
}


useEffect(() => {
  let Interval;

  if(IstimeActive){
    Interval =  setInterval(() => {
    setTime((prevTime) => {
    if (prevTime > 0) {
      return prevTime - 1;
    }else{
      setIsTimeActive(false)
      clearInterval(Interval);
      return 0;

    }});
  }, 1000);
}
  return () => {
    clearInterval(Interval)
  };

}, [IstimeActive]);


useEffect(() => {
  if(time === 0){
      setIsTimeActive(false);
  }
}, [time]);


const handleEmailChange = (event) => {
  setEmail(event.target.value)
  const emailErr = event.target.value.replace(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/g, '')
  if (!emailErr) {
    setErrorEmail(false)
  } else {
    setErrorEmail(true)
  }
}

    return (
        <div>
          <div className='bg-gradient-to-b from-green-500 to-green-400 opacity-75'>
            <div className='container mx-auto'> 
                <div className='grid grid-cols-2'>
                        <div>
                          <h1>Login</h1>
                        </div>
                        <div>
                          <div className='bg-white rounded-'>

                          </div>
                        </div>
                </div>


            </div>  
          </div>


            <div className="bg-no-repeat bg-cover bg-center relative" ><div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
  <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
        <div className="self-start hidden lg:flex flex-col  text-white">
          <img src="" className="mb-3" />
          <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back Track </h1>
          <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups</p>
        </div>
      </div>
      <div className="flex justify-center self-center  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <div className="space-y-5">
                        <div className="space-y-2 text-left">
                              <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
              <input onChange={(e) => handleEmailChange(e)} className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
              {errorEmail && <p className='text-[12px] text-[#FF000F] font-no'>Please enter a valid email</p>}

              </div>
     

            <div>
              <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
            </div>
            </div>
            
        </div>
      </div>
  </div>
</div>
        </div>

    );
}

export default Login;