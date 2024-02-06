import React from 'react'
import Header from '../component/Header'
import AccountCreate from './AccountCreate'
import {Outlet} from "react-router-dom"
import FetchAccList from '../component/FetchAccList'
import {useSelector} from "react-redux"
const App = () => {

  return (
    <>
    <Header/>

    <div className="container section" id="section1">
    <div className="row justify-content-center">
<FetchAccList/>
  <Outlet/>

</div>
    </div>
    </>
  )
}

// Project Overview: Financial Account Management with React, Redux Toolkit, and React Router

// This project seamlessly integrates React, Redux Toolkit, and React Router to create a robust financial account management system. Key features include:

// Redux State Management: Utilizes Redux Toolkit to manage the application state, ensuring efficient and predictable data flow.

// Account Operations: Enables users to add new accounts, update debit and credit amounts, and transfer balances seamlessly.

// React Router Integration: Implements React Router for smooth navigation, allowing users to access distinct views for creating accounts, performing debit and credit transactions, and reviewing account details.

// Error Handling: Incorporates effective error handling, providing alerts for insufficient funds or incorrect account numbers during transactions.

// Modular Routing: Adopts a modular routing structure, enhancing code maintainability and readability with distinct routes for creating accounts, debit and credit transactions, and balance transfers.


export default App
