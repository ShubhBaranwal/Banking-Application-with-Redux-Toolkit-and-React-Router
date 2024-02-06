import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container-fluid w-100'>
      <h4 className='py-2 bg-dark text-light text-center'>Bank Management System</h4>
      <div className="row ">
        <div className="col d-flex justify-content-between">
          <Link className='btn btn-danger ' to="/CreateAcc">Create Account</Link>
        
        <Link to="/AccDetails" className='btn btn-danger '>Accounts Details</Link>
       <Link to="/debitForm" className='btn btn-danger '>Debit</Link> 
       <Link to={"/creditForm"} className='btn btn-danger '>Credit</Link> 
       <Link to={"/TransferAmt"} className='btn btn-danger '>Transfer</Link> 
       <Link to={"/Transaction"} className='btn btn-danger '>Transaction</Link> 

        </div>
        
      </div>
    </div>
  )
}

export default Header
