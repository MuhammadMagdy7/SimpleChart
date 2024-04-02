import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { useDispatch, useSelector } from 'react-redux';


const CustomChart =  () => {
    // Data provided
    const dispatch = useDispatch();
    const { data, filters } = useSelector((state) => state.data);
    
    
// ChartJS.register(ArcElement, Tooltip, Legend);

    // Process data for chart
    const labels = data?.map(item => item.state);
    const statuses = data?.map(item => item.status);
    function arrayToUniqueTuple(arr) {
        // Convert the array to a Set to automatically remove duplicates
    const uniqueSet = new Set(arr);
    
    // Convert the Set back to an array to preserve the order of elements
    const uniqueArray = Array.from(uniqueSet)
    return uniqueArray
}


const newData = arrayToUniqueTuple(labels)
const newStatus = arrayToUniqueTuple(statuses)



// state
const stateObject = newData.reduce((obj, skill) => {
    // console.log(obj, skill)
    return { ...obj, [skill]: 0 };
}, {});

data?.map((item)=>{
    for (let i of newData){
        if (i === item.state){
            stateObject[i] += 1
        }
    }
})

// console.log('stateObject: ', stateObject);

const skillsSt = Object.keys(stateObject);
const valuesSt = Object.values(stateObject);


const chartDataSt = {
    labels: skillsSt,
      datasets: [
          {
              label: 'Status',
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.6)',
              hoverBorderColor: 'rgba(75,192,192,1)',
              data: valuesSt
            }
        ]
    };

// -----------------------------------------------


// Status
const skillObject = newStatus.reduce((obj, skill) => {
    // console.log(obj, skill)
    return { ...obj, [skill]: 0 };
}, {});

data?.map((item)=>{
    for (let i of newStatus){
        if (i === item.status){
            skillObject[i] += 1
        }
    }
})

// console.log('skillObject: ', skillObject);

const skills = Object.keys(skillObject);
const values = Object.values(skillObject);

const chartData = {
    labels: skills,
      datasets: [
          {
              label: 'Status',
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.6)',
              hoverBorderColor: 'rgba(75,192,192,1)',
              data: values
            }
        ]
    };
// -----------------------------------------------
    
    return (
      <div>
        <h2>Status by State</h2>
        <Bar
          data={chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
        <Bar
          data={chartDataSt}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }


export default CustomChart;
