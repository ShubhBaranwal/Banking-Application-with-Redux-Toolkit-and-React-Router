import { useRef } from 'react'
import {useDispatch} from "react-redux"
import { fetchItemActions } from '../store/fetchItemSlice';




const CreditForm = () => {

    let dispatch=useDispatch();

    let AccValueEl=useRef()
    let AccBalenceEl=useRef()
    
    function handleSubmit(e){
    
      e.preventDefault()
     let AccValueElVal=AccValueEl.current.value;
     let AccBalenceElVal=AccBalenceEl.current.value;
      dispatch(fetchItemActions.updateCreditAmt({AccValueElVal,AccBalenceElVal}))
      
    }
    


    return (
    <div className="col-md-6">
    <form >
        <div className="mb-3">
            <label htmlFor="CreditAcc" className="form-label">Account Number</label>
            <input type="number" ref={AccValueEl} className="form-control" id="CreditAcc" required />
        </div>
        <div className="mb-3">
            <label htmlFor="CreditAmount" className="form-label">Amount</label>
            <input type="number" ref={AccBalenceEl} className="form-control" id="CreditAmount" required />
        </div>
        <input onClick={handleSubmit} className='btn btn-dark' type="submit" value="Credit" />
        
</form>

</div>
  )
}

export default CreditForm
