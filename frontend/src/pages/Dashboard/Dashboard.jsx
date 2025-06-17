import React, { useEffect } from "react";
import Expense from "../../components/Expense/Expense";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
// import ExpenseHeader from "../../components/ExpenseHeader/ExpenseHeader";
import { NavLink } from 'react-router-dom';
import { fetchExpense } from '../../services/services';
import { useStore } from "../../context/StoreProvider";
import Layout from "../../components/Layout/Layout";
import { LuArrowRight } from "react-icons/lu";
import "./Dashboard.css";

const Dashboard = () => {
  const {setLoader,expenseData,setExpenseData} = useStore()
  const getExpenses = async()=>{
      setLoader(true)
      const result = await fetchExpense(0,7)
      if(result?.data?.success){
        setExpenseData(result.data.result)
      }
      setLoader(false)
    }
  useEffect(()=>{
	  getExpenses()
  },[])

	return (
	<Layout>
		<div className="container">
			<div className="dashboard">
				{/* <div className='Dashboard-header'>seach box</div> */}
				<div className="dashboard-body">
						<Expense getExpenses = {getExpenses} />
						<div className='expense-card'>
						{/* <ExpenseHeader/> */}
						<ExpenseTable expenseData={expenseData} getExpenses = {getExpenses}>
							<div className="expense-header">
								<div className="header-text">Recent Transactions</div>
								<NavLink to="/transaction" className="see-all-link">
									See All <LuArrowRight/>
								</NavLink>
							</div>
						</ExpenseTable>
					</div>
				</div>
			</div>
		</div>
		</Layout>
	);
};

export default Dashboard;
