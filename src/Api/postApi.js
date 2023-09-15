import axios from "axios";
import { BASE_URL, LOCAL_URL } from "../utils/sevice";

export const AddPost = ({formData}) =>{
    return new Promise((resolve, reject) => {
        axios.post(`${LOCAL_URL}/post/create`,formData).then((res)=>{
             console.log('Create Post:-',res)
             return resolve (res)
        }).catch((err)=>{
             return reject (err)
        })
     });
}
export const GetPost = () =>{
    return new Promise((resolve, reject) => {
        axios.get(`${LOCAL_URL}/post/all`).then((res)=>{
             console.log('Get Post:-',res)
             return resolve (res?.data)
        }).catch((err)=>{
             return reject (err)
        })
     });
}