import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { DashboardMenus } from "../../../utils/alljsonfile/dashboardData";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuTaskOpen, setSubmenuTaskOpen] = useState(false);
  const [submenuReportOpen, setSubmenuReportOpen] = useState(false);
  const [submenuChatOpen, setSubmenuChatOpen] = useState(false);
  const [submenuActivityOpen, setSubmenuActivityOpen] = useState(false);
  const location = useLocation();

  return (
    <div >
        <div
          className={`bg-white shadow-lg border-r h-full p-5 pt-8 ${
            sidebarOpen ? "w-64" : "w-20"
          } duration-300  relative`}
        >
          {/* <BiArrowBack className={` bg-white text-3xl p-2 rounded-full border border-light-blue absolute top-9 -right-3 cursor-pointer ${!sidebarOpen && 'rotate-180'}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}/> */}

          <div
            className="inline-flex gap-3 w-full"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              // <img src="/assets/time-logo.png" className="w-48 h-auto"/>
              <img src="/assets/tbrand-logo.png" className="w-24 h-auto" />
            ) : (
              <img src="/assets/tbrand-logo.png" className="w-24 h-auto" />
            )}
            {/* <FaBars className={` text-3xl p-1 cursor-pointer rounded block float-left duration-500 ${sidebarOpen && "rotate-[360deg]"}`}/>
              <h1 className={`text-xl font-medium origin-left text-black duration-300 ${!sidebarOpen && "scale-0"}`}>Tracker</h1> */}
            {/* <img src="./assets/logo.png" width={70} height={70}/> */}
          </div>

          <div
            className={`flex items-center rounded-md bg-white mt-6 ${
              !sidebarOpen ? "px-2.5" : "px-4"
            } py-2`}
          >
            <BsSearch
              className={`text-black text-lg block float-left cursor-pointer  ${
                sidebarOpen && "mr-2"
              }`}
            />
            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-black  focus:outline-none ${
                !sidebarOpen && "hidden"
              }`}
            />
          </div>

          <ul className="pt-2">
            {DashboardMenus?.map((menudata, index) => {
              return (
                <>
                  <li
                    key={index}
                    className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 ${
                      location.pathname === `/${menudata.title.toLowerCase()}`
                        ? "bg-blue-400 text-white"
                        : "hover:bg-blue-400 hover:text-white"
                    }  rounded-md  ${menudata?.spacing ? "mt-9" : "mt-2"}`}
                  >
                    <span className="text-2xl block float-left">
                      {menudata?.icon ? menudata?.icon : <RiDashboardFill />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-200 ${
                        !sidebarOpen && "hidden"
                      }`}
                    >
                      {menudata?.title}
                    </span>
                    {menudata?.submenu && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuOpen(!submenuOpen);
                        }}
                      />
                    )}
                    {menudata?.submenutask && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuTaskOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuTaskOpen(!submenuTaskOpen);
                        }}
                      />
                    )}
                    {menudata?.submenureport && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuReportOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuReportOpen(!submenuReportOpen);
                        }}
                      />
                    )}
                    {menudata?.submenuActivity && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuActivityOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuActivityOpen(!submenuActivityOpen);
                        }}
                      />
                    )}
                    {menudata?.submenuChat && sidebarOpen && (
                      <BsChevronDown
                        className={`${submenuChatOpen && "rotate-180"}`}
                        onClick={() => {
                          setSubmenuChatOpen(!submenuChatOpen);
                        }}
                      />
                    )}
                  </li>
                  {menudata?.submenu && submenuOpen && sidebarOpen && (
                    <ul>
                      {menudata?.submenuItems?.map((submenuItem, index) => {
                        return (
                          <>
                            <Link to={`/${submenuItem?.linkpage}`}>
                              <li
                                key={index}
                                className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-400 hover:text-white rounded-md px-5 my-1"
                              >
                                {submenuItem?.title}
                              </li>
                            </Link>
                          </>
                        );
                      })}
                    </ul>
                  )}

                  {menudata?.submenutask && submenuTaskOpen && sidebarOpen && (
                    <ul>
                      {menudata?.submenuItemstask?.map((submenuItem, index) => {
                        return (
                          <>
                            <Link to={`/${submenuItem?.linkpage}`}>
                              <li
                                key={index}
                                className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-400 hover:text-white rounded-md px-5 my-1"
                              >
                                {submenuItem?.title}
                              </li>
                            </Link>
                          </>
                        );
                      })}
                    </ul>
                  )}

                  {menudata?.submenureport &&
                    submenuReportOpen &&
                    sidebarOpen && (
                      <ul>
                        {menudata?.submenuReportItem?.map(
                          (submenuItem, index) => {
                            return (
                              <>
                                <Link to={`/${submenuItem?.linkpage}`}>
                                  <li
                                    key={index}
                                    className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-400 hover:text-white rounded-md px-5 my-1"
                                  >
                                    {submenuItem?.title}
                                  </li>
                                </Link>
                              </>
                            );
                          }
                        )}
                      </ul>
                    )}

                  {menudata?.submenuActivity &&
                    submenuActivityOpen &&
                    sidebarOpen && (
                      <ul>
                        {menudata?.submenuActivityItem?.map(
                          (submenuItem, index) => {
                            return (
                              <>
                                <Link to={`/${submenuItem?.linkpage}`}>
                                  <li
                                    key={index}
                                    className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-400 hover:text-white rounded-md px-5 my-1"
                                  >
                                    {submenuItem?.title}
                                  </li>
                                </Link>
                              </>
                            );
                          }
                        )}
                      </ul>
                    )}
                  {menudata?.submenuChat && submenuChatOpen && sidebarOpen && (
                    <ul>
                      {menudata?.submenuChatItem?.map((submenuItem, index) => {
                        return (
                          <>
                            <Link to={`/${submenuItem?.linkpage}`}>
                              <li
                                key={index}
                                className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-400 hover:text-white rounded-md px-5 my-1"
                              >
                                {submenuItem?.title}
                              </li>
                            </Link>
                          </>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </ul>
        </div>
    </div>
  );
}

export default Sidebar;
