import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { BsSearch , BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { DashboardMenus } from "../../../utils/alljsonfile/dashboardData";


function DashBorad() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation()

  return (
    <div>
      <>
        <div className="flex">
          <div
            className={`bg-white shadow-lg h-screen p-5 pt-8 ${
              sidebarOpen ? "w-64" : "w-20"
            } duration-300  relative`}
          >
            {/* <BiArrowBack className={` bg-white text-3xl p-2 rounded-full border border-light-blue absolute top-9 -right-3 cursor-pointer ${!sidebarOpen && 'rotate-180'}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}/> */}

            <div className="inline-flex gap-3 w-full"  onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? 
            
            // <img src="/assets/time-logo.png" className="w-48 h-auto"/>
            <img src="/assets/tbrand-logo.png" className="w-24 h-auto"/>
            :
            <img src="/assets/tbrand-logo.png" className="w-24 h-auto"/>
              
            }
              {/* <FaBars className={` text-3xl p-1 cursor-pointer rounded block float-left duration-500 ${sidebarOpen && "rotate-[360deg]"}`}/>
              <h1 className={`text-xl font-medium origin-left text-black duration-300 ${!sidebarOpen && "scale-0"}`}>Tracker</h1> */}
              {/* <img src="./assets/logo.png" width={70} height={70}/> */}
            </div>

            <div className={`flex items-center rounded-md bg-white mt-6 ${!sidebarOpen ? "px-2.5" : "px-4"} py-2`}>
              <BsSearch className={`text-black text-lg block float-left cursor-pointer  ${sidebarOpen && "mr-2"}`}/>
              <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-black  focus:outline-none ${!sidebarOpen && "hidden"}`}/>
            </div>

            <ul className="pt-2">
              {DashboardMenus?.map((menudata, index) => {
                return(
                  <>
                    <li key={index} className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 ${location.pathname === `/${menudata.title.toLowerCase()}` ? 'bg-blue-400 text-white' : 'hover:bg-blue-400 hover:text-white'}  rounded-md  ${menudata?.spacing ? "mt-9" : "mt-2"}`}>
                      <span className="text-2xl block float-left">
                        {menudata?.icon ? menudata?.icon : <RiDashboardFill/>}
                      </span>
                      <span className={`text-base font-medium flex-1 duration-200 ${!sidebarOpen && "hidden"}`}>{menudata?.title}</span>
                      {menudata?.submenu && sidebarOpen && (
                        <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => {setSubmenuOpen(!submenuOpen)}}/>
                      )}
                    </li>
                    {menudata?.submenu && submenuOpen && sidebarOpen&& (
                      <ul>
                        {menudata?.submenuItems?.map((submenuItem, index) =>{
                          return(
                            <>
                              <li key={index} className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-400 hover:text-white rounded-md px-5">
                                {submenuItem?.title}
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    )}
                  </>
                )
              })}
            </ul>

          </div>
          <div className="p-7">
            <h1 className="text-2xl font-semibold">home page</h1>
          </div>
        </div>
      </>
    </div>
  );
}

export default DashBorad;
