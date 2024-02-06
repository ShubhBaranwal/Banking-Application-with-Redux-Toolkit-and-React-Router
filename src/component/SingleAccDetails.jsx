import React from 'react'
import {useSelector} from "react-redux"

const SingleAccDetails = ({detailsData}) => {

let particularPersonTransaction=useSelector(store => store.accData.anotherHistory)

let showTransation=particularPersonTransaction.filter((data)=>{
  return data.fromAc == detailsData.acc || data.toAc ==  detailsData.acc ;
})
console.log("main",showTransation);

  return (
    <>
     
         <tr>
           <td scope="col">{detailsData.name}</td>
           <td scope="col">{detailsData.acc}</td>
        </tr>
        <tr>
          <th>Date of Opening</th>
          <th>Mobile Number</th>
        </tr>
        <tr>
           <td scope="col">{detailsData.doo}</td>
           <td scope="col">{detailsData.mob}</td>
        </tr>
        
      <tr>
           <th scope="col">Adhar No.</th>
           <th scope="col">Balence</th>
        </tr>
        <tr>
           <td scope="col">{detailsData.adharNo}</td>
           <td scope="col">{detailsData.balence}</td>
        </tr>
 <tr>
  <th className='text-center h3' colSpan={5}>Transaction History</th>
  </tr>    
 
        <tr>
             <th>Sender</th>    
             <th>Receiver </th>
             <th>transactions</th>
             <th>Amount</th>    
             <th>Receiver's Balance</th>    
             <th>Sender's Balance</th>    
            </tr> 
        
            {showTransation.map((details,index)=>{
      return       <tr key={index}>
             <td>{details.fromAc}</td>    
             <td>{details.toAc} </td>
             <td>{details.type}</td>
             <td>{details.amt}</td>    
             <td>{details.currentBalenceReceive}</td>    
             <td>{details.currentBalenceSender}</td>    
            </tr>  

})
}

    </>
  )
}

export default SingleAccDetails
