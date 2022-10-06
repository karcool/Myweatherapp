
import './App.css';

import Weather from './weather1.json';      

function App() {
  return (
    <div className="App">
      {
        Weather.map( weather =>{
          return(
            <div className="box" key ={weather.count}>
              {weather.title}
            </div>
          )


        })
      }


      <div className="container"></div>
        <div className="top">
          <div className="location"></div>
        
        </div>
        <div className="bottom"></div>
    </div>
  );
}

export default App;
