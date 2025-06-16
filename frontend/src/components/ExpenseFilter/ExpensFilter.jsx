import React from "react";
import './ExpenseFilter.scss'

const ExpenseFilter = ()=>{
    return(
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
    )
}

export default ExpenseFilter