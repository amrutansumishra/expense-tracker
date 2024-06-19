import React from 'react'

const ExpenseHeader = () => {
  return (
    <>
    <div className='expense-show-card-main-header'>Expense Summary</div>
        <div className='expense-show-card'>     
            <div className='expense-show-card-body'>
                <div className='expense-show-card-header'>This Week</div>
                <div className='expense-amount'>$7000</div>
            </div>
            <div className='expense-show-card-body'>
                <div className='expense-show-card-header'>This Month</div>
                <div className='expense-amount'>$10000</div>
            </div>
            <div className='expense-show-card-body'>
                <div className='expense-show-card-header'>Last Month</div>
                <div className='expense-amount'>$9000</div>
            </div>
        </div>
    </>
  )
}

export default ExpenseHeader