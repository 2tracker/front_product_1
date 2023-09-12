import React from "react";
import Layout from "../component/common/Layout";
import AddTask from "../component/common/TaskComponent/AddTaskComponent";

const AddNewTask = () =>{
    return(
        <>
        <Layout>
           <div className="p-6">
           <AddTask/>
           </div>
        </Layout>
        </>
    )
}

export default AddNewTask;