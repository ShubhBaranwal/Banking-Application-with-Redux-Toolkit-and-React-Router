import {useRef} from 'react'
import {useDispatch} from "react-redux";
import { fetchItemActions } from '../store/fetchItemSlice';
const TransferBalance = () => {
let dispatch=useDispatch()

    let fromAcc=useRef()
let toAcc=useRef()
let TransferAmt=useRef()


function handleSubmit(e){
    e.preventDefault();
let fromAccVal=fromAcc.current.value;
let toAccVal=toAcc.current.value;
let TransferAmtVal=TransferAmt.current.value;


dispatch(fetchItemActions.transferAmount({fromAccVal,toAccVal,TransferAmtVal}))


}

    return (
    <div>
          <form >
        <div className="mb-3">
            <label htmlFor="TransferFromAcc" className="form-label">From Account</label>
            <input type="number" ref={fromAcc} className="form-control" id="TransferFromAcc" required />
        </div>
        <div className="mb-3">
            <label htmlFor="TransferToAcc" className="form-label">To Account</label>
            <input type="number" ref={toAcc} className="form-control" id="TransferToAcc" required />
        </div>
        
        <div className="mb-3">
            <label htmlFor="TransferAmt" className="form-label">Amount</label>
            <input type="number" ref={TransferAmt} className="form-control" id="TransferAmt" required />
        </div>

        <input onClick={handleSubmit} type="submit" value="Transfer" className='btn btn-dark' />
        
</form>

    </div>
  )
}

export default TransferBalance
