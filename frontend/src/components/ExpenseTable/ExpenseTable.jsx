import React,{useEffect,useState} from 'react'
import { LuShoppingBag } from "react-icons/lu";
import { LuTrendingDown } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import './ExpenseTable.css';
// import { resultData } from '../../constants/dummyData';

const ExpenseTable = ({expenseData,children}) => {
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
                    <div className='delete-icon'>
                      <LuTrash2 size={22}/>
                    </div>
                    <div className='edit-icon'>
                      <LuPencilLine size={22}/>
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