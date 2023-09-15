import React from "react";
import Layout from "../component/common/Layout";
import AddTask from "../component/common/TaskComponent/AddTaskComponent";
import AddPostComp from "../component/common/AddPostComp";

const AddPost = () =>{
    return(
        <>
        <Layout>
           <div className="p-6">
            <AddPostComp/>
           </div>
        </Layout>
        </>
    )
}

export default AddPost;