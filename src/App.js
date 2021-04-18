
import './App.css';
import Header from './components/Header/Header';
import EmployeeDirectory from "./components/EmployeeDirectory/EmployeeDirectory";
import EmployeeTable from './components/EmployeeTable/EmployeeTable';



function App() {
  return (

    <div className="App">
      <Header />
      <EmployeeDirectory />
      <EmployeeTable />
    
    </div>
  );
}

export default App;
