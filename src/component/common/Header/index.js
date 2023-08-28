import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Box, Button, Divider, Menu, MenuItem } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header({sidebarOpen, setSidebarOpen}) {
  const [cartPopup, setCartPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [notificationOpen, setNotificationOpen] = useState(null);
  const open = Boolean(anchorEl);
  const NotificationDropopen = Boolean(notificationOpen);

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


  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <div className="px-6 flex items-center bg-white sticky top-0 w-full min-h-[64px] justify-between shadow-sm z-50">
        <div className="flex items-center ">
          <div className="inline-flex items-center gap-3 p-3">
          <img src="/assets/tbrand-logo.png" className="w-24 h-auto" />

              <FaBars
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`bg-white text-3xl p-1 cursor-pointer rounded block float-left duration-500 ${
                  sidebarOpen && "rotate-[360deg]"
                }`}
              />

          </div>
          {/* <div className="p-3">
          <BsSearch
            className={`text-black text-md block float-left cursor-pointer `}
          />
        </div> */}
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="time-button">
            <Button className="!border " onClick={handleClickOpen}>Start</Button>
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
          <Button onClick={handleClosePopup} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
          </div>


          {/* ========= User ======== */}
          <Button
            className="!rounded-full !min-w-[59px] h-[59px] p-3 hover:inline-flex hover:rounded-full common-button-hover"
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



   
    </>
  );
}

export default Header;
