import React from 'react'
import {useSelector} from "react-redux"

const TransactionDetails = () => {
let transDetails=useSelector(store => store.accData.anotherHistory)


  return (
    <>
  
    <table className='table-bordered  mt-4  '>
        <thead>
        
             <tr>
             <th>Sender</th>    
             <th>Receiver </th>
             <th>transactions</th>
             <th>Amount</th>    
             <th>Receiver's Balance</th>    
             <th>Sender's Balance</th>    
            </tr>  
            </thead>
<tbody>
    

{transDetails.map((details,index)=>{
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

</tbody>

       
    </table>
    
    </>
  )
}

export default TransactionDetails
