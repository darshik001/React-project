import { collection, deleteDoc, doc, getDocs, setDoc ,getDoc,updateDoc } from "firebase/firestore"
import { db } from "../../../../fierbase.config"

export const addproduct = ()=>{
    return{
        type:"ADD_PRODUCT",
    }
}


export const getallproduct = (data)=>{
    return{
        type:"GET_PRODUCTS",
        payload:data
    }
}



export const DeleteProduct = ()=>{
    return{
        type:"DELETE_PRODUCT"
    }
}



export const Editproduct = (data)=>{
    return{
        type:"EDIT_PRODUCT",
        payload:data
    }
}


export const updateProduct = ()=>{
    return{
        type:"UPDATE_PRODUCT",
    }
}


const Loding = ()=>{
    return{
        type:"LODING"
    }
}

const errormsg = (data)=>{
return{
    type:"ERROR",
    payload:data
}
}

export const addproductAsync  = (data)=>{
    return async(dispatch)=>{
        dispatch(Loding())
        try {
    await setDoc(doc(db,"products",data.id),data)
        dispatch(addproduct())
        } catch (error) {
            dispatch(errormsg(error.message))
        }
       
    }
}


export const getallproductAync = (catagory)=>{
    return async(dispatch)=>{
        dispatch(Loding())
         try {
             let records = []
             let res = await getDocs(collection(db,"products"))
                res.forEach(rec => {
                        records.push({
                            ...rec.data(), id: rec.id
                        })
                    })
                
            let filterproduct = records.filter((product=>product.category ===catagory))
            dispatch(getallproduct(filterproduct))
        } catch (error) {
       dispatch(errormsg(error.message))

        }
    }
}


export const deleteproductAsync = (id,category)=>{
    return async(dispatch)=>{
        dispatch(Loding())
     try{
        await deleteDoc(doc(db,'products',id))
        dispatch(DeleteProduct())
        dispatch(getallproductAync(category))
     }catch(error){
   dispatch(errormsg(error.message))
     }
    }
}


export const editproductAsync = (id)=>{
   return async (dispatch)=>{

       dispatch(Loding())
       try {
           let res  = await getDoc(doc(db,"products",id))
           console.log("respons",res.data())
           dispatch(Editproduct(res.data()))
        } catch (error) {
        
        console.log("Error",error.message)
       dispatch(errormsg(error.message)) 
     }
   }
}


export const updateProductAsync = (data)=>{
    return async (dispatch)=>{
        dispatch(Loding())

try {
    await updateDoc(doc(db,'products',data.id),data)
        dispatch(updateProduct())
} catch (error) {
    dispatch(errormsg(error.message))   
}
        
    }
}