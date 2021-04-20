
import './App.css';
import Header from './components/Header/Header';
import EmployeeDirectory from "./components/EmployeeDirectory/EmployeeDirectory";
import style from './components/EmployeeTable/style.css';



function App() {
  return (

    <div className="App">
      <Header />
      <EmployeeDirectory />
    </div>
  );
}

export default App;
