import  { useState } from 'react'
import SingleAcountRow from './SingleAcountRow'
import {useSelector,useDispatch} from "react-redux"
import SingleAccDetails from '../component/SingleAccDetails'
const AccountDetails = () => {
let [open,isopen]=useState(false)
let [detailsData,setDetailsData]=useState()

function handleDetailsPage(details){
         setDetailsData(details)    
        isopen(true)
}
function closeDetailsPage(){
  isopen(false)
}

  
  let person= useSelector(store =>store.accData.AccInfo)
  
  let sum =0; 
  let totalBal=person.map((item)=>{
    console.log(item.balence);
             return sum += Number(item.balence);       
    })

    
    






  return (
<>
    
      <span className="h3">total Balence</span>
            <span className="h1 totalBal">{sum}</span>
    <table className="table">
       
      
            
            <tbody className="tbodyContainer">
            <tr>
  {
    open ?  <th className='h5 text-start btn btn-dark btn-sm'  onClick={closeDetailsPage}>❌</th> : null

  }
    
  
  
  <th></th>
</tr> 
    <tr>
          <th>Name</th>
          <th>Account Number</th>
        </tr>
                {open ? (<SingleAccDetails   detailsData={detailsData} ></SingleAccDetails>) : (
                  
                  person.map((details)=>{
                        return <SingleAcountRow  handleDetailsPage={handleDetailsPage} key={details.acc} details={details}/>
                    }))
                    
                }
            </tbody>
          </table>

          
             
    </>
  )
}

export default AccountDetails
