import { useParams } from 'react-router-dom'
import { employees} from '../pages/Employee.jsx'
import Header from '../component/Header'
import Footer from '../component/Footer'
// console.log("Employee:",employees)

export default function EmployeeDetails(){

   const {id} = useParams()
   console.log('Checking params',id)

   //
   const findEmployee = employees.find((data) => (data.id === id))


  return(
     <>
       <Header/>
       <main className = 'py-4 container'>
         <h2>{findEmployee.name}</h2>
         <ul class="list-group">
         <li class="list-group-item"><strong>Name:</strong> {findEmployee.name}</li>
         <li class="list-group-item"><strong>Designation:</strong> {findEmployee.title}</li>
         <li class="list-group-item"><strong>Department:</strong> {findEmployee.department}</li>
         




        </ul>


      </main>
     <Footer/>
     </>
  )
}