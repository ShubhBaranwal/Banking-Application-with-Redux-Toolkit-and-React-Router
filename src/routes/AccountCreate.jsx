import React, { useRef } from 'react'
import {useDispatch} from "react-redux"
import { fetchItemActions } from '../store/fetchItemSlice';
const AccountCreate = () => {
    let nameVal=useRef();
    let MobVal=useRef();
    let AdharVal=useRef();
    let OpenBalVal=useRef();
let dispatch=useDispatch();

    function handleSubmit(){
        let newAcc= {
            name: nameVal.current.value,
            acc: Date.now() + 10,
            doo: `${new Date()}`,
            mob: MobVal.current.value,
            balence: Number(OpenBalVal.current.value)
        }
        
       dispatch(fetchItemActions.addNewAccount(newAcc))
       nameVal.current.value=""
       MobVal.current.value=""
       OpenBalVal.current.value=""
    }



return (
<div className="col-md-6">
            <form>
                <div className="mb-3">
                    <label htmlFor="OpenAccName" className="form-label">Name</label>
                    <input type="text" ref={nameVal} className="form-control" id="OpenAccName" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="OpenAccMOB" className="form-label">Mobile</label>
                    <input type="number"  ref={MobVal} className="form-control" id="OpenAccMOB" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="OpenAccAdhar" className="form-label">Adhar Number</label>
                    <input type="number" ref={AdharVal} className="form-control" id="OpenAccAdhar" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="OpenAccBalence" className="form-label">Balance of Opening Account</label>
                    <input type="number" ref={OpenBalVal} className="form-control" id="OpenAccBalence" required />
                </div>
                <button type="button" className="btn btn-danger" onClick={handleSubmit}>Create Account</button>
            </form>
        </div>


  )
}

export default AccountCreate
