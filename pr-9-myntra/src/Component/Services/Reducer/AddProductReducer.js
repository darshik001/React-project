import { getproductData, setProductData } from "../Storage/StorageData"

const initialvalue = [
    {
        products: getproductData(),
        product: null,
        isLoding: false
    }

]



export const AddProductRedux = (state = initialvalue, action) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            let data = getproductData()
            data.push(action.payload)
            setProductData(data)
            return {
                ...state,
                products: data
            }
        default:
            return state
    }
}