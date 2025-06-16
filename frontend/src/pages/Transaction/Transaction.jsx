import React,{useState,useEffect} from 'react'
import Notification from '../../components/Notification/Notification';
import ExpenseTable from '../../components/ExpenseTable/ExpenseTable';
import Layout from "../../components/Layout/Layout";
import Pagination from '../../components/Pagination/Pagination';
import { fetchExpense } from '../../services/services';
import { NavLink } from 'react-router-dom';
import { LuDownload } from "react-icons/lu";
import './Transaction.css'

const Transaction = () => {
  const [expenseData,setExpenseData] = useState()
  const [isLastPage,setIsLastPage] = useState()
  const perPageData=6
  const [pageNo, setPageNo] = useState(0)
  const getExpenses = async()=>{
    const result = await fetchExpense(pageNo*perPageData,perPageData)
    console.log(result)
    if(result.data.success){
      setIsLastPage(result.data.isLastPage)
      setExpenseData(result.data.result)
    }
  }

  const handleFilter = (e) =>{
    console.log(e.target.value)
  }
  useEffect(()=>{
    getExpenses()
  },[pageNo])

  return (
    <Layout>
        <div className="transaction-page">
          <div className="expense-card-content">
              <Notification />
              <ExpenseTable expenseData={expenseData}>
                <div className="expense-header">
                  <div className="header-text">All Expenses</div>
                  <NavLink to="/transaction" className="see-all-link">
                    Download <LuDownload/>
                  </NavLink>
                </div>
              </ExpenseTable>
          </div>
          <div className='pagination-trans'>
            <Pagination pageNo={pageNo+1} setPageNo={setPageNo} isLastPage={isLastPage}/>
          </div>
        </div>
    </Layout>
  );
  }
  
  export default Transaction