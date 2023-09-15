import React from "react";
import Layout from "../component/common/Layout";
import PostLists from "../component/common/AddPostComp/PostList";

const PostList = () =>{
    return(
        <>
        <Layout>
           <div className="p-6">
            <PostLists/>
           </div>
        </Layout>
        </>
    )
}

export default PostList