import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { BsSearch , BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { DashboardMenus } from "../../../utils/alljsonfile/dashboardData";
import Layout from "../Layout";
import BirthDayTable from "./BirthDayTable";
import ChatGraphCom from "./ChatGraphCom";


function DashBorad() {


  return (
    <Layout>
      <div className="container mx-auto">
        <div className="p-6">
          <BirthDayTable/>
          <ChatGraphCom/>
        </div>
      </div>
    </Layout>
  );
}

export default DashBorad;
