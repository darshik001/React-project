


export const setStroregeData = (data)=>{
    localStorage.setItem("moviesData",JSON.stringify(data))
}

export const getStroregeData = ()=>{

    return JSON.parse(localStorage.getItem("moviesData")) || [];
}