import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AccountCreate from './routes/AccountCreate.jsx';
import DebitForm from './routes/DebitForm.jsx';
import AccountDetails from './routes/AccountDetails.jsx';
import AccStore from './store/index.js';
import {Provider} from "react-redux"
import CreditForm from './routes/CreditForm.jsx';
import TransferBalance from './routes/TransferBalance.jsx';
import TransactionDetails from './routes/TransactionDetails.jsx';
let router= createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {path:"/CreateAcc" ,element:<AccountCreate/>},
    {path:"/debitForm" ,element:<DebitForm/>},
    {path:"/AccDetails" ,element:<AccountDetails/>},
    {path:"/creditForm",element:<CreditForm/>},
    {path:"/TransferAmt",element:<TransferBalance/>},
    {path:"/Transaction",element:<TransactionDetails/>}
  ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={AccStore}>

<RouterProvider router={router}>
</RouterProvider>
    </Provider>

    
  
  </React.StrictMode>,
)
