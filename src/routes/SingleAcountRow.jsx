import {useState} from 'react'

const SingleAcountRow = ({details,handleDetailsPage}) => {

    
function handleDetailsPageOpen(){
console.log("shubh",details);
  handleDetailsPage(details)
           
  
}


  return (
 <tr>

<th scope="row">{details.name}</th>
<td>{details.acc}</td>
<td><button className='btn btn-sm btn-danger' onClick={handleDetailsPageOpen}>view</button>
</td> 
</tr>



   )
  }

export default SingleAcountRow
