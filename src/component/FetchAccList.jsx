import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { fetchItemActions } from '../store/fetchItemSlice'



const FetchAccList = () => {
let dispatch=useDispatch()


let person = [
    
        {
            name: "aitish",
            acc: 123456789,
            doo: "13/1/2007",
            mob: 9580395545,
            adharNo:761626908022,
            balence: 900
        },
        {
            name: "shubh",
            acc: 23456789,
            doo: "12/12/2023",
            mob: 9580395545,
            
            adharNo:55457849857,
            balence: 500
        },
        {
            name: "nitish",
            acc: 987654321,
            doo: "13/12/2022",
            mob: 761626908022,
            adharNo:88787887598857,
            balence: 900
        },
        
       
    
    
    ]




    
    
    
    
    dispatch(fetchItemActions.addInitialData(person))

 
    return (
    <>
      
    </>
  )
}

export default FetchAccList
