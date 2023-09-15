import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { AddPost } from "../../../Api/postApi";
import toast, { Toaster } from "react-hot-toast";

const AddPostComp = () => {
    const [data,setData] = useState([])
    const formData = new FormData()
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleClick = () =>{
        formData.append("title", data?.title);
        formData.append("content", data?.content);
        formData.append("imageUrl", data?.imageUrl);
        AddPost({formData}).then((res)=>{
            toast.success("Post Upload SuccesFully");
        }).catch((err)=>{
            console.log(err,"err");
            toast.success(err.response.data?.message);
        })
    }
    return (
        <>
        <Toaster/>
            <div className="shadow rounded h-auto w-full px-3">
                <div>
                    <h1 className="py-3">Add Post</h1>
                </div>
                <div>
                    <div className="py-4">
                        <TextField id="outlined-basic" name="title" onChange={(e)=>{handleChange(e)}} fullWidth label="Title" required variant="outlined" />
                    </div>
                    <div className="my-4">
                        <TextField id="outlined-basic" name="imageUrl" onChange={(e)=>{handleChange(e)}} fullWidth type="file" required variant="outlined" />
                    </div>
                    <div className="py-4">
                        <TextField id="outlined-basic" name="content" onChange={(e)=>{handleChange(e)}} fullWidth label="Content" required variant="outlined" />
                    </div>
                    {/* <div className="py-4">
                        <TextField id="outlined-basic" name="hashtag" onChange={(e)=>{handleChange(e)}} fullWidth label="Hashtags" variant="outlined" />
                    </div> */}
                    <div className="text-center py-3">
                        <Button onClick={()=>{handleClick()}}>Upload</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPostComp;