import React, { useRef } from 'react'
import {useDispatch} from "react-redux"
import { fetchItemActions } from '../store/fetchItemSlice';
const DebitForm = () => {
let dispatch=useDispatch();

let AccValueEl=useRef()
let AccBalenceEl=useRef()

function handleSubmit(e){

  e.preventDefault()
 let AccValueElVal=AccValueEl.current.value;
 let AccBalenceElVal=AccBalenceEl.current.value;
  dispatch(fetchItemActions.updateDebitAmt({AccValueElVal,AccBalenceElVal}))

}


  return (
    <div className="col-md-6">
    <form >
        <div className="mb-3">
            <label htmlFor="DebitAcc" className="form-label">Account Number</label>
            <input type="number" ref={AccValueEl} className="form-control" id="DebitAcc" required />
        </div>
        <div className="mb-3">
            <label htmlFor="DebitAmount" className="form-label">Amount</label>
            <input type="number" ref={AccBalenceEl} className="form-control" id="DebitAmount" required />
        </div>
        <input onClick={handleSubmit} className='btn btn-dark' type="submit" value="Debit" />
        
</form>

</div>
  )
}

export default DebitForm
