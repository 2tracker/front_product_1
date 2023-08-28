import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { BsSearch , BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { DashboardMenus } from "../../../utils/alljsonfile/dashboardData";
import Layout from "../Layout";


function DashBorad() {


  return (
    <Layout>
      <div className="container mx-auto">
        <div className="p-6">
        <div>dashboardData</div>
        </div>
      </div>
    </Layout>
  );
}

export default DashBorad;
