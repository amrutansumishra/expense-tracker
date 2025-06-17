import React,{useState} from 'react'
import { LuShoppingBag, LuTrendingDown, LuTrash2 } from "react-icons/lu";
import {deleteExpense} from '../../services/services';
import Notification from '../Notification/Notification';
import './ExpenseTable.css';
// import { resultData } from '../../constants/dummyData';

const ExpenseTable = ({expenseData,getExpenses,children}) => {
  const deleteAExpense = async(id)=>{
  const result = await deleteExpense(id)
  console.log(result)
    if(result.data.success){
      getExpenses()
      Notification.show({
        message:"Expenase Deleted",
        alertType:"danger"
      })
    }
  }

  return (<>
            <div className='expense-table'>
              {children}
              <div className='expense-table-content'>
                {expenseData?expenseData.map((data,index)=>
                <div className="expense-rows">
                  <div className="expense-col1">
                    <div className="expense-logo">
                      <LuShoppingBag size={25} />
                    </div>
                    <div className="expense-text">
                    <div className="expense-title">
                      {data.name}
                    </div>
                    <div className="expense-date">
                      {data.date}
                    </div>
                    </div>
                  </div>
                  <div className="expense-col2">
                    <div className='delete-icon' onClick={()=>deleteAExpense(data._id)}>
                      <LuTrash2 size={22}/> 
                    </div>
                    <div className="expense-money">
                      - &#8377;{data.amount} <LuTrendingDown/>
                    </div>
                  </div>
                </div>):<></>
                }
    </div>
    </div>
    </>
  )
}

export default ExpenseTable