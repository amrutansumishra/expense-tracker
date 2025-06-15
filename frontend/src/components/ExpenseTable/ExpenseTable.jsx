import React,{useEffect,useState} from 'react'
import './ExpenseTable.css'
import 'boxicons';
import Notification from '../Notification/Notification';
import Pagination from '../../components/Pagination/Pagination';
import { fetchExpense } from '../../services/services';
// import { resultData } from '../../constants/dummyData';

const ExpenseTable = () => {
  const [expenseData,setExpenseData] = useState()
  const [isLastPage,setIsLastPage] = useState()
  const perPageData=2
  const [pageNo, setPageNo] = useState(1)
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
  return (<>
    <div className='expense-card'>
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
                        <select onChange={handleFilter}>
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This month</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='expense-table'>
              <div className='expense-table-content'>
            
            <table>
              <thead>
              <tr className='table-header'>
        <th>Expense</th>
        <th>Category</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
              </thead>
              <tbody>   
      {expenseData?expenseData.map((data,index)=>
        <tr key={`expense-row-${index}`}>
          <td>{data.name}</td>
          <td>{data.category}</td>
          <td>{data.date}</td>
          <td><span>&#8377;</span>{data.amount}</td>
        </tr>):<></>}
      </tbody>
    </table>
    </div>
            </div>
        </div>
    </div>
    <div className='pagination-trans'>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} isLastPage={isLastPage}/>
    </div>
    </>
  )
}

export default ExpenseTable