import {
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";

export const DashboardMenus = [
  {
    title: "Dashboard",
    submenu: true,
    submenuItems: [
      { title: "Employes Birthday List", linkpage: "birthdaylist" },
      { title: "Graph", linkpage: "graphpage" },
      { title: "Additional Posts", linkpage: "postsadditional" },
    ],
  },

  {
    title: "Task",
    icon: <AiOutlineBarChart />,
    linkpage: "task",
    submenutask: true,
    submenuItemstask: [
      { title: "Tasklist", linkpage: "tasklist" },
      { title: "Add Task", linkpage: "add-task" },
      // { title: "Edit Task", linkpage: "edittask" },
      // { title: "Delete Task", linkpage: "deletetask" },
      // { title: "View Task", linkpage: "viewtask" },
      { title: "Add Credientials", linkpage: "addcredient" },
    ],
  },
  {
    title: "Daily Report",
    icon: <AiOutlineMail />,
    submenureport: true,
    submenuReportItem: [
      { title: "Activity", linkpage: "activitylist" },
      { title: "Screenshot List", linkpage: "screenshotlist" },
      // { title: "View Screenshot", linkpage: "viewscreenshot" },
    ],
  },
  {
    title: "Attendences & Activity",
    icon: <AiOutlineMail />,
    submenuActivity: true,
    submenuActivityItem: [
      { title: "Daily Attendences Calender", linkpage: "attendCalander" },
      { title: "Weekly Attendences Activity", linkpage: "weeklyattendence" },
    ],
  },
  {
    title: "Chat & Posts",
    icon: <BsPerson />,
    submenuChat: true,
    submenuChatItem: [
      { title: "Chat & Group Chat", linkpage: "chatbar" },
      { title: "Posts List", linkpage: "postlist" },
      { title: "Add Posts", linkpage: "addposts" },
      // { title: "Edit Posts", linkpage: "editposts" },
    ],
  },
  { title: "Setting", icon: <AiOutlineSetting /> },

  { title: "Logout", icon: <AiOutlineLogout /> },
];
