import React, { useEffect,useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Expense from "../../components/Expense/Expense";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import ExpenseHeader from "../../components/ExpenseHeader/ExpenseHeader";
import Loader from "../../components/Loader/Loader";
import { fetchExpense,addExpense } from '../../services/services';
import "./Dashboard.css";
const Dashboard = () => {
  const [expenseData,setExpenseData] = useState()
  const [loader,setLoader] = useState(false)
  const getExpenses = async()=>{
    setLoader(true)
    const result = await fetchExpense(0)
    if(result?.data?.success){
      setExpenseData(result.data.result)
    }
    setLoader(false)
  }
  const addNewExpenses = async(inputData)=>{
    setLoader(true)
    const result = await addExpense(inputData)
    console.log(result.success)
    if(result.success){
      console.log("added")
    }
    setLoader(false)
  }
  useEffect(()=>{
	getExpenses()
  },[])
	return (
		<div className="container">
      {loader&&<Loader/>}
			<SideBar active={1} />
			<div className="dashboard">
				{/* <div className='Dashboard-header'>seach box</div> */}
				<div className="dashboard-body">
						<Expense expenseData={expenseData} addNewExpenses={addNewExpenses}/>
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
