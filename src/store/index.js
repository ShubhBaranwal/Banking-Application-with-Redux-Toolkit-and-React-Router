import {configureStore} from "@reduxjs/toolkit"
import fetchItemSlice from "./fetchItemSlice";

let AccStore= configureStore({
 reducer:{
    accData:fetchItemSlice.reducer,
    
    
    
 }
})

export default AccStore;