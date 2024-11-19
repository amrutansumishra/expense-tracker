import React, { useEffect, useState } from 'react'
import './Expense.scss'
import { Doughnut } from 'react-chartjs-2';
import {Chart,ArcElement,Legend} from 'chart.js';
import calendar from '../../assets/icons/calendar.svg';

Chart.register(ArcElement,Legend);

const Expense = ({expenseData,addNewExpenses}) => {
  const [expenseAdd,setExpenseAdd] = useState(true)
  const [expenseInput,setExpenseInput] = useState({date:new Date(),category:"personal",name:"",amount:""})
  const [investRatio,setInvestRatio] =useState([0,0])
  const investRatioCal = (expenseData)=>{
    console.log(expenseData,"expensedata")
    let investment = 0
    let expenseAmount =0
    expenseData?.map((data,i)=>{
        if(data.category === "investment"){
          investment+=data.amount
        }else{
          expenseAmount+=data.amount
        }
      })
      setInvestRatio([investment,expenseAmount])
  }

  useEffect(()=>{
    
    investRatioCal(expenseData)
  },[expenseData])

  const handleChange = (e)=>{
    setExpenseInput((data)=>({...data,[e.target.name]:e.target.value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    addNewExpenses(expenseInput)
    setExpenseInput({date:new Date(),category:"personal",name:"",amount:""})
    
  }
    const config={
        data:{
          labels: ['Investment', 'Expense'],
            datasets: [{
            label: '# of Votes',
            data: investRatio,
            backgroundColor: [
              '#b3ba02',
              '#122080',
            ],
            hoverOffset: 3,
            borderRadius:8,
            spacing:-5
          }]
        },
       
        options:{
            cutout: "85%",
            plugins:{
              legend:{
                position:"bottom"
              }
            }
        }
      }

  return (
    <div className='expense-section'>
        <div className='expense-header'>
            <h2>Hello Amrutansu,</h2>
            <p>Take a look at your expenses</p>
        </div>
        {/* {expenseAdd?<div className='expense-chart'>
            <Doughnut {...config}></Doughnut>
        </div>: */}
        <div className='expense-add-form'>
          <form onSubmit={handleSubmit}>
          <div className='input-group-name'>
                    <input type="text" placeholder='Salary house Rent' className='form-input' onChange={handleChange} name="name" value={expenseInput?.name} required />
                    <label htmlFor="pick-date" className='form-input-date'><img src={calendar} alt="icon-calendar"/>
                    
                    </label>
                    <input type="date" id="pick-date" name="date" onChange={handleChange} className='datepicker-input' value={expenseInput?.date}  />
                </div>
            <div className='input-group'>
                    <input type="text" placeholder='Amount' onChange={handleChange} name="amount" className='form-input' value={expenseInput?.amount}  required />
                </div>
                <div className='input-group-select'>
                   <select name="category" onChange={handleChange}>
                      <option value="personal">Personal</option>
                      <option value="travel">Travel</option>
                      <option value="food">Food</option>
                      <option value="investment">Investment</option>
                   </select>
                </div>
                <div className='submit-btn'>
                    <button type='submit'>Add Expense</button>
                </div>
          </form>
          </div>
          {/* } */}
        <div className='expense-footer'>
            <div className='expense-add-button'> 
            {/* <button onClick={()=>setExpenseAdd(!expenseAdd)}><box-icon name="plus"></box-icon>Add a New Expense</button> */}
            </div>
            <div className='expense-footer-actions'>
                <div>
                <button>
                     <box-icon name="envelope"></box-icon> 
                </button>
                Email
                </div>
                <div>
                <button>
                     <box-icon name="download"></box-icon> 
                </button>
                Download
                </div>
                <div>
                <button>
                     <box-icon name="printer"></box-icon> 
                </button>
                Print
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expense