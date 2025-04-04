
import { employees} from '../pages/Employee.jsx'
import Header from '../component/Header'

const maximumWorkedEmployee = employees.reduce((acc, curr) =>(
  acc.hoursWorked > curr.hoursWorked ? acc : curr
))

const highestRatedEmployee = employees.reduce((acc,curr) =>(
    acc. performanceRate > curr. performanceRate ? acc : curr
))

const TotalOvertimeHours = employees.reduce((acc,curr) =>(
  acc.overTimeHours > curr.overTimeHours ?  acc: curr
))

export default function Report (){


 return (
   <>
   <Header/>
   <div className = 'container'>
   <h1>HR Report</h1>
   <hr/>

   <div className="row">
   <div class="col-sm-4 mb-3 mb-sm-0">
   
     
   <h3 class="card-title">Most Worked Employee</h3>
        {maximumWorkedEmployee && <>
          <p>Name: { maximumWorkedEmployee.name}</p>
         <p> Hours Worked: {maximumWorkedEmployee.hoursWorked}</p>
        </>}
       
      
  </div>

  <div class="col-sm-4 mb-3 mb-sm-0">
   
     
        <h3 class="card-title">Highest Rated Employee</h3>
        {highestRatedEmployee && <>
          <p>Name: { highestRatedEmployee.name}</p>
         <p> PerformanceRate: {highestRatedEmployee.performanceRate}</p>
        </>}
       
      
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
   
        <h3 class="card-title">Total Overtime Hours</h3>
    
         <p>Total Overtime Hours: {TotalOvertimeHours.overTimeHours}</p>
       
      
  </div>



    </div>

   </div>

  </>
 )
}