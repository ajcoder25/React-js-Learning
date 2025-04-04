import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import {useState} from 'react'

export const employees = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Software Developer',
    department: 'IT',
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 125,
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Designer',
    department: 'Design',
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    title: 'Project Manager',
    department: 'Management',
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];
export default function Employee() {

  const [selectFilter, setFilter] = useState("All Department")

  const filterEmployee = selectFilter === 'All Department' ? employees : employees.filter(data => data.department === selectFilter)
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>List of Employees</h1>
        <div className="form-group">
          <label htmlFor="departmentFilter">Filter by Department</label>
          <select id="departmentFilter" className="form-Control form-select" onChange = {(e) => setFilter(e.target.value)}>
            <option value="All Department">All Department</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>
      </div>
      <main className="container py-3">
        <ul className="list-group">
          {filterEmployee.map((employe) => (
            <li key={employe.id} className="list-group-item mt-3">
              <h3>{employe.name}</h3>
              <p>{employe.title}</p>
              <Link to={`/employee/${employe.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
