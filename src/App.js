/* import logo from './logo.svg'; */
import './App.css';
import Sidebar from './Comonents/Sidebar/Sidebar';
import SearchBar from './Comonents/SearchBar/SearchBar';
import InputBox from './Comonents/InputBox/InputBox';
import Table from './Comonents/Table/Table';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h5 className='medicosales'>Medico Sales</h5>
            <Sidebar />
          </div>
          <div className="col-10">
            <div className='box'>
              <SearchBar />
              <h5 className='sales'><b>Sales Information</b></h5>
              <InputBox htmlFor="Customer" id="Customer" labelname="Customer" type="text" placeholder="Enter Customer Name" />
              <InputBox htmlFor="Invoice-id" id="Invoice-id" labelname="Invoice ID" type="text" placeholder="Enter Invoice ID" />
              <InputBox htmlFor="Start-date" id="Start-date" labelname="Start Date" type="" placeholder="Start Date" />
              <InputBox htmlFor="End-date" id="End-date" labelname="End Date" type="" placeholder="End Date" />
              <Table />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
