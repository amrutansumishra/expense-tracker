import React, { useState } from 'react';
import { addExpense } from '../../services/services';
import { useStore } from '../../context/StoreProvider';
import { LuCalendar, LuWallet } from "react-icons/lu";
import './Expense.scss'


const Expense = () => {
  // const [expenseAdd,setExpenseAdd] = useState(true)
  const [expenseInput,setExpenseInput] = useState({date:new Date(),category:"personal",name:"",amount:""})
  const {setLoader} = useStore()

  const addExpensesApi = async(inputData)=>{
    setLoader(true)
    const result = await addExpense(inputData)
    console.log(result)
    if(result.success){
      console.log("added")
    }
    setLoader(false)
  }

  const handleChange = (e)=>{
    setExpenseInput((data)=>({...data,[e.target.name]:e.target.value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setExpenseInput({date:new Date(),category:"personal",name:"",amount:""})
    addExpensesApi(expenseInput)
  }

  return (
    <div className='expense-section'>
          <div className='expense-total'>
            {/* <div className='expense-add-button'>  */}
            {/* <button onClick={()=>setExpenseAdd(!expenseAdd)}><box-icon name="plus"></box-icon>Add a New Expense</button> */}
            {/* </div> */}
            <div className='total-expense-logo'>
              <LuWallet size={30}/>
            </div>
            <div className='total-content'>
              <div className='total-text'>Total</div>
              <div className='total-amount'>&#8377;90000</div>
            </div>

        </div>
        {/* <DoughnutCharts/> */}
        <div className='expense-add-form'>
          <form onSubmit={handleSubmit}>
          <div className='input-group-name'>
                    <input type="text" placeholder='Salary house Rent' className='form-input' onChange={handleChange} name="name" value={expenseInput?.name} required />
                    <label htmlFor="pick-date" className='form-input-date'>
                      <LuCalendar size={22}/>
                      <span className="date-p">{new Date(expenseInput.date).getDate()}</span>
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
                      <option value="transport">Transport</option>
                      <option value="utility">Utilities</option>
                      <option value="debt">Debt Payment</option>
                      <option value="emi">EMI</option>
                      <option value="home">Home</option>
                      <option value="health">Health</option>
                      <option value="donation">Donation</option>
                      <option value="trip">Trip</option>
                      <option value="others">Others</option>
                   </select>
                </div>
                <div className='submit-btn'>
                    <button type='submit'>Add Expense</button>
                </div>
          </form>
        </div>
    </div>
  )
}

export default Expense