import React from 'react'
import './ExpenseTable.css'
import 'boxicons';
import Notification from '../Notification/Notification';

const ExpenseTable = () => {
  return (
    <div className='expense-card'>
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
        <div className='expense-table-card'>
          <Notification/>
        <div className='filter-row'>
                <div className='filter-header'>Your Expenses</div>
                <div className='filter-options'>
                    <div className='action-button'>
                    <button>
                     <box-icon name="printer"></box-icon> 
                </button>
                    </div>
                    <div className='action-button'>
                    <button>
                     <box-icon name="download"></box-icon> 
                </button>
                    </div>
                    <div className='filter-select'>
                        <select>
                            <option>Today</option>
                            <option>This Week</option>
                            <option>This month</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='expense-table'>
            
            <table>
              <tbody>
              <tr className='table-header'>
        <th>Expense</th>
        <th>Category</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>12/12/2024</td>
        <td>$250</td>
      </tr>
      
              </tbody>
     
    </table>
            </div>
        </div>
       
       
    </div>
  )
}

export default ExpenseTable