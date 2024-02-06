import {createSlice} from "@reduxjs/toolkit"

let fetchItemSlice=createSlice({
name:"AllaccData",
initialState:{
    AccInfo:[],
    anotherHistory:[]
},
reducers:{
    addInitialData:(state,action)=>{
        state.AccInfo=action.payload
    },
    addNewAccount:(state,action)=>{
        state.AccInfo.push(action.payload)
    },
    updateDebitAmt:(state,action)=>{
     let AccNo=action.payload.AccValueElVal;
     let DbtAmt=action.payload.AccBalenceElVal;
     
     let index=state.AccInfo.findIndex(item => item.acc == AccNo);
     
if(index !== -1){
    if(state.AccInfo[index].balence >= Number(DbtAmt)){
        state.AccInfo[index].balence -=Number(DbtAmt)
    
state.anotherHistory.push({
    fromAc:AccNo,
    toAc:"self",
    type:"Debited",
    amt:`-${DbtAmt}`,
    currentBalenceReceive:"-",
    currentBalenceSender:state.AccInfo[index].balence
})
    }else  {
        alert(`${DbtAmt} Rupee nahi hai`)

    }}else{
    alert(`${AccNo} is not found`)
}


     
    },

    updateCreditAmt:(state,action)=>{
        let AccNo=action.payload.AccValueElVal;
        let CreditAmt=action.payload.AccBalenceElVal;
        let index=state.AccInfo.findIndex(item => item.acc == AccNo);

        if(index !== -1){
        console.log(typeof state.AccInfo[index].balence);
            state.AccInfo[index].balence += Number(CreditAmt)
    
          state.anotherHistory.push({
            fromAc:"self",
            toAc:AccNo,
            type:"Credited",
            amt:`+${CreditAmt}`,
            currentBalenceSender:"-",
            currentBalenceReceive:state.AccInfo[index].balence,
        })
        
        }else{
            alert(`${AccNo} is not found.  please check your Account No`)
        }
    },
    transferAmount:(state,action)=>{
        let fromAcc=action.payload.fromAccVal;
        console.log(fromAcc);
        let toAcc=action.payload.toAccVal;
        let transAmt=Number(action.payload.TransferAmtVal);

        let indexFrom=state.AccInfo.findIndex(item => item.acc == fromAcc);
        let indexTo=state.AccInfo.findIndex(item => item.acc == toAcc);

   if(indexFrom !== -1 && indexTo !== -1){

if(state.AccInfo[indexFrom].balence >= Number(transAmt)){
 
    state.AccInfo[indexFrom].balence -= transAmt
    state.AccInfo[indexTo].balence += transAmt
    

state.anotherHistory.push({
    fromAc:fromAcc,
    toAc:toAcc,
    type:"transfered",
    amt:transAmt,
    currentBalenceSender:state.AccInfo[indexFrom].balence,
    currentBalenceReceive:state.AccInfo[indexTo].balence,
})

}else{
alert("insufficiant Amount")
}


   }else{
    alert(`check your Account Number`)
   }


    }
}
})  

export const fetchItemActions=fetchItemSlice.actions;

export default fetchItemSlice;