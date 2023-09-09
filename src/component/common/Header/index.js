import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CountdownTimer from "../CountdownTimer";
import { MdOutlineEmail } from "react-icons/md";
import {  Button, Divider, Menu } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
;



function Header({sidebarOpen, setSidebarOpen}) {
  const [cartPopup, setCartPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [startTimer, setStartTimer] = useState(false);


  const [notificationOpen, setNotificationOpen] = useState(null);
  const open = Boolean(anchorEl);
  const NotificationDropopen = Boolean(notificationOpen);

  const adminData = localStorage.getItem("user_id");
  const navigate = useNavigate();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickNotification = (event) => {
    setNotificationOpen(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setNotificationOpen(null);
  };

  console.log(adminData , 'adminDataadminData');

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleTimeAgreePopup = () => {
    setOpenPopup(false);
    setStartTimer(true)
  };

const handleLogOut = () => {
  localStorage.removeItem("Token");
  localStorage.removeItem("user_id");
  navigate("/");

}

  return (
    <>
      <div className="px-6 flex items-center bg-white sticky top-0 w-full min-h-[64px] justify-between shadow-sm z-50">
        <div className="flex items-center ">
          <div className="inline-flex items-center gap-3 p-3">

              <FaBars
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`bg-white text-3xl p-1 cursor-pointer rounded block float-left duration-500 ${
                  sidebarOpen && "rotate-[360deg]"
                }`}
              />

          </div>

        </div>
        <div className="flex gap-x-4 items-center">
          {/* <div className="time-button">
          {!startTimer ?
            <Button className="!border" onClick={handleClickOpen}>Start</Button>
            :
            <CountdownTimer/>
          }
            <Dialog
        open={openPopup}
        onClose={handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Disagree</Button>
          <Button onClick={handleTimeAgreePopup} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
          </div> */}


          {/* ========= User ======== */}
          <Button
            className="!rounded-full !min-w-[59px] h-[59px]  p-3 hover:inline-flex hover:rounded-full common-button-hover"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img
              src="assets/user-1.jpg"
              className="rounded-full w--[35px] h-[35px]"
            />
          </Button>
        </div>
      </div>



      {/* ============ Profile popup =========== */}


      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          className:
            "p-8 overflow-visible profile-popup w-1/5 h-auto !max-h-auto !overflow-auto",
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 1px 5px rgba(0,0,0,0.20))",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div>
          <p className="text-[18px] text-black font-medium">User Profile</p>
        </div>
        <div className="flex gap-3 py-6">
          <div className="w-20 h-20 rounded-full ">
            <img
              alt="profileImage"
              src="/assets/user-1.jpg"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-[14px] font-medium text-black">
              Mathew Anderson
            </p>
            <p className="text-[14px] font-normal text-black">Designer</p>
            <div className=" flex items-center gap-2">
              <MdOutlineEmail className="w-4 h-auto" />
              <p className="text-[14px] text-[#2a3547] font-normal">
                info@timetask.com
              </p>
            </div>
          </div>
        </div>

        <Divider />
        <div className="py-4 flex items-center gap-3">
          <div className="p-3 bg-[#ecf2ff] rounded-md">
            <img
              alt="profileImage"
              src="/assets/icon-inbox.svg"
              className="w-[22px] h-[22px]"
            />
          </div>
          <Link to={"/myprofile"}>
            <h6 className="text-[14px] font-medium text-black hover:text-[#5d87ff]">
              My Profile
            </h6>
            <h6 className="text-[14px] font-normal text-black">
              Account Settings
            </h6>
          </Link>
        </div>
        <div className="py-4 flex items-center gap-3 ">
          <div className="flex items-center justify-center bg-[#ecf2ff] rounded-md w-[45px] h-[45px]">
            <img
              alt="profileImage"
              src="/assets/profile-account.svg"
              className="w-auto h-auto"
            />
          </div>
          <Link to={"#"}>
            <h6 className="text-[14px] font-medium text-black hover:text-[#5d87ff]">
              My Inbox
            </h6>
            <h6 className="text-[14px] font-normal text-black">
              Messages & Emails
            </h6>
          </Link>
        </div>
        <div className="py-4 flex items-center gap-3">
          <div className="p-3 bg-[#ecf2ff] rounded-md">
            <img
              alt="profileImage"
              src="/assets/icon-tasks.svg"
              className="w-[22px] h-[22px]"
            />
          </div>
          <Link to={"#"}>
            <h6 className="text-[14px] font-medium text-black hover:text-[#5d87ff]">
              My Task
            </h6>
            <h6 className="text-[14px] font-normal text-black">
              To-do and Daily Tasks
            </h6>
          </Link>
        </div>

        <div className="mt-2">
          <button onClick={() => {handleLogOut()}} className="w-full p-2 border border-[#5d87ff] rounded-md text-[16px] text-[#5d87ff]  hover:text-white hover:bg-[#5d87ff] hover:border-[#5d87ff] duration-300">
            Logout
          </button>
        </div>
      </Menu>



   
    </>
  );
}

export default Header;
