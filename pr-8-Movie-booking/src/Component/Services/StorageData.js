


export const setStorageData = (data) => {
    localStorage.setItem("moviesData", JSON.stringify(data))
}

export const getStorageData = () => {

    return JSON.parse(localStorage.getItem("moviesData")) || [];
}