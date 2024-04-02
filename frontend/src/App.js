import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  setFilters
} from "./redus/actions/dataActions";
import Chart from "./components/Chart";
import CustomChart from "./components/CustomChart";
import FilterComponent from './components/FilterComponent';
import DataDisplayComponent from './components/DataDisplayComponent';

function App() {
  // const { count } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  // const INCREMENTAction = () => {
  //   fetchData(dispatch);
  // };

  // const DECREMENTAction = () => {
  //   setFilters(dispatch);
  // };



  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={INCREMENTAction}>increase</button>
      <button onClick={DECREMENTAction}>descrease</button>
      <button >add 5</button> */}
      <h1>Filter and Display Data</h1>
        <FilterComponent />
        <DataDisplayComponent />
      <div style={{ }}>
        <div style={{ maxWidth: "250px" }}>
          <Chart />
        </div>
        <div>
          <CustomChart />
        </div>
      </div>
      
    </>
  );
}
export default App;
