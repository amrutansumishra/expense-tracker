import React from 'react'
import Expense from './Expense/Expense'
import './Dashboard.css'
import ExpenseTable from './ExpenseTable/ExpenseTable'

const Dashboard = () => {
  return (
   <div className='dashboard'>
      {/* <div className='Dashboard-header'>seach box</div> */}
      <div className='dashboard-body'>
        <Expense/>
        <ExpenseTable/>
      </div>

      </div>
  )
}

export default Dashboard