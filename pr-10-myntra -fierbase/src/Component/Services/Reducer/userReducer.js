   
   const userState = {
    user:JSON.parse(localStorage.getItem('user'))||null,
    isCreated:false,
    isLoding:false,
   }


 export const  userReducer = (state = userState,action)=>{
    switch (action.type) {
      case "LODING":
        return{
          ...state,
          isLoding:true
        }
      case "SIGNUP":
        return{
          ...state,
          isCreated:true
        }
        
      case "SIGNIN":
            localStorage.setItem('user',JSON.stringify(action.payload))

        return{
          ...state,
          user:action.payload,
          isLoding:false,
        }  
    
      default:
        return{
          ...state
        }
    }
 }