import axios from "axios"


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





export const Editproduct = (data)=>{
    return{
        type:"EDIT_PRODUCT",
        payload:data
    }
}


export const updateProduct = (data)=>{
    return{
        type:"UPDATE_PRODUCT",
        payload:data
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
        dispatch(Loding)
        try {
             await axios.post(`http://localhost:3000/products`,data)
        dispatch(addproduct())
        } catch (error) {
            console.log(error.message)
            console.log(error)
            dispatch(errormsg(error.message))
        }
       
    }
}


export const getallproductAync = (catagory)=>{
    return async(dispatch)=>{
        dispatch(Loding)
         try {
            let res = await axios.get('http://localhost:3000/products')
            let filterproduct = res.data.filter((product=>product.category ===catagory))
            dispatch(getallproduct(filterproduct))
        } catch (error) {
            console.log(error)
        }
    }
}


export const deleteproductAsync = (id)=>{
    return async(dispatch)=>{
     try{
         let res  = await axios.delete(`http://localhost:3000/products/${id}`)
         dispatch(getallproductAync())
     }catch(error){
   dispatch(errormsg(error.message))
     }
    }
}


export const editproductAsync = (id)=>{
   return async (dispatch)=>{
     dispatch(Loding())
     try {
        let res = await axios.get(`http://localhost:3000/products/${id}`)
        dispatch(Editproduct(res.data))

     } catch (error) {
       dispatch(errormsg(error.message)) 
     }
   }
}


export const updateProductAsync = (data)=>{
    return async (dispatch)=>{
        let res = await axios.put(`http://localhost:3000/products/${data.id}`,data)
    }
}