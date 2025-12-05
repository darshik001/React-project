import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { auth } from "../../../../fierbase.config"
import { MdExploreOff } from "react-icons/md"


const Loding = ()=>{
    return{
        type:"LODING"
    }
}

const userSignup = ()=>{
    return{
        type:"SIGNUP"
    }
}


const userSignin = (user)=>{
   return{
    type:"SIGNIN",
    payload:user
   }
}



export const userSignUpAsync = (data)=>{
     return async (dispatch) =>{
        dispatch(Loding())
        try{
           let res = await createUserWithEmailAndPassword(auth,data.email,data.password)
           updateProfile(auth.currentUser,{
            displayName:data.name,
           })
             dispatch(userSignup(res.currentUser))
        }catch (error){
   console.log("Error:",error)
        }
     }
}


export const userSignInAsync = (data)=>{
     return async (dispatch) =>{
        dispatch(Loding())
        try{
           let res = await signInWithEmailAndPassword(auth,data.email,data.password)
             dispatch(userSignin(res.user))
        }catch (error){
   console.log("Error:",error)
        }
     }
}


export const userSignInGoogleAsync = ()=>{
    return async(dispatch) =>{
        try{
            let provder =new GoogleAuthProvider()
            let res = await signInWithPopup(auth,provder)
            console.log(res)
            dispatch(userSignin(res.user))
        } catch(error){
      console.log(error)
       } 
    }
}