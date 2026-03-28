import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

export default function App() {
  const [employees, setEmployees] = useState([]);

  function addEmployee(emp) {
    const newEmployee = {
      ...emp,
      id: Date.now(),
      active: true,
    };

    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="container">
      <h1>Gestion des employés</h1>

      <EmployeeForm onAddEmployee={addEmployee} />

      <EmployeeList employees={employees} />
    </div>
  );
}