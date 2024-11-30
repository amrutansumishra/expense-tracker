import React ,{useEffect,useState}from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart,ArcElement,Legend} from 'chart.js';
Chart.register(ArcElement,Legend);
const DoughnutCharts = (expenseData) => {
    const [investRatio,setInvestRatio] =useState([0,0])
    
    useEffect(()=>{
        investRatioCal(expenseData)
      },[expenseData])

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
  return (
    <div className='expense-chart'>
        <Doughnut {...config}></Doughnut>
    </div>
  )
}

export default DoughnutCharts