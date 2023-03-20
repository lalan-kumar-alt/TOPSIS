
import './App.css';
import Snowfall from 'react-snowfall';
// import Form from './component/form/Form';
import Calculation from './component/calculationPage/Calculation';
function App() {
  return (
    <div className="App">
     
    <Snowfall snowflakeCount={200} color="white"/>
 
      <Calculation/>
</div>
     
  );
}

export default App;
