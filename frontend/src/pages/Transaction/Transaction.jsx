import React from 'react'
import Notification from '../../components/Notification/Notification';
import ExpenseTable from '../../components/ExpenseTable/ExpenseTable';
import Layout from "../../components/Layout/Layout";
import './Transaction.css'

const Transaction = () => {
  return (
    <Layout>
      <div className="container">
        <div className="transaction-page">
          <div className="expense-card-content">
            <div className="expense-table-card">
              <Notification />
              <ExpenseTable/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
  }
  
  export default Transaction