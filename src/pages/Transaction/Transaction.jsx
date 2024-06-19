import React from 'react'
import Notification from '../../components/Notification/Notification';
import SideBar from "../../components/SideBar/SideBar"
import Pagination from '../../components/Pagination/Pagination';
import './Transaction.css'
import 'boxicons';
import ExpenseTable from '../../components/ExpenseTable/ExpenseTable';

const Transaction = () => {
  return (
    <div className="container">
      <SideBar active={2} />
      <div className="transaction-page">
        <div className="expense-card-content">
          <div className="expense-table-card">
            <Notification />
            <ExpenseTable/>
            <div className='pagination-trans'>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
  
  export default Transaction