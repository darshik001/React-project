import axios from "axios"
import { useDispatch } from "react-redux"
import { errormsg } from "../Action/addProductAction"
export const uploadimage  =async(file)  =>{
    let UploadImage = new FormData()
    UploadImage.append('file',file)
UploadImage.append("upload_preset","myntr-clone")
    UploadImage.append("cloud_name","dblxejpyp")
    console.log("Running")
    try {
            //   "https://api.cloudinary.com/v1_1/dblxejpyp/image/upload?effect=background_removal",   remove image  background

        
        let res = await axios.post(`https://api.cloudinary.com/v1_1/dblxejpyp/image/upload`, UploadImage);
        return res.data.secure_url
    } catch (error) {
         useDispatch(errormsg(error.message))
    }
    
}