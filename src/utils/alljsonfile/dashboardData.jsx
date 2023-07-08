import { BsFillImageFill , BsReverseLayoutTextSidebarReverse , BsPerson } from "react-icons/bs";
import { AiOutlineFileText , AiOutlineBarChart , AiOutlineMail , AiOutlineSetting , AiOutlineLogout } from "react-icons/ai";

export const DashboardMenus = [
  { title: "Dashboard" },
  { title: "Pages" , icon: <AiOutlineFileText />},
  { title: "Media", spacing: true  , icon: <BsFillImageFill />},
  {
    title: "Projects",
    icon: <BsReverseLayoutTextSidebarReverse />,
    submenu: true,
    submenuItems: [
      { title: "Submenu 1" },
      { title: "Submenu 2" },
      { title: "Submenu 3" },
    ],
  },

  { title: "Analytics" , icon: <AiOutlineBarChart /> },
  { title: "Inbox" , icon: <AiOutlineMail /> },

  { title: "Profile", spacing: true ,icon: <BsPerson />  },
  { title: "Setting" , icon: <AiOutlineSetting />},

  { title: "Logout" , icon: <AiOutlineLogout />},
];
