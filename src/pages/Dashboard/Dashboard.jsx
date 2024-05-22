import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Expense from "../../components/Expense/Expense";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="container">
			<SideBar />
			<div className="dashboard">
				{/* <div className='Dashboard-header'>seach box</div> */}
				<div className="dashboard-body">
					<Expense />
					<ExpenseTable />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
