import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Expense from "../../components/Expense/Expense";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
// import ExpenseHeader from "../../components/ExpenseHeader/ExpenseHeader";
import Loader from "../../components/Loader/Loader";
import { fetchExpense } from '../../services/services';
import { useStore } from "../../context/StoreProvider";
import "./Dashboard.css";

const Dashboard = () => {
  const {setLoader,expenseData,setExpenseData} = useStore()
  
  useEffect(()=>{
    const getExpenses = async()=>{
      setLoader(true)
      const result = await fetchExpense(0)
      if(result?.data?.success){
        setExpenseData(result.data.result)
      }
      setLoader(false)
    }
	  getExpenses()
  },[])

	return (
		<div className="container">
      <Loader/>
			<SideBar active={1} />
			<div className="dashboard">
				{/* <div className='Dashboard-header'>seach box</div> */}
				<div className="dashboard-body">
						<Expense/>
						<div className='expense-card'>
						{/* <ExpenseHeader/> */}
						<ExpenseTable expenseData={expenseData}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
