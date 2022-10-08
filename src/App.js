
import {UilReact,UilSunset, UilSun, UilArrowUp ,UilArrowDown ,
        UilClouds,UilSmile ,UilWind,UilCompressArrows  ,UilTemperature} from '@iconscout/react-unicons/'
import weather from "./weather1.json";
 import { useEffect, useState } from 'react';
 

function App() {
  const container = weather.query.results;
    const [data, setdata]= useState([]);

    useEffect(() => {
    
    console.log(container.channel.item.forecast);
    setdata(container.channel.item.forecast)

     },[container.channel.item.forecast]);

  return (
    <div className="App">
      <div className="mx-auto max-w-screen-sm h-fit px-3 ">
        <div className = "container-fluid">
         <h2 className="flex items-center justify-around my-5 mx-8 text-white text-2xl font-normal ">{container.channel.location.city}, {container.channel.location.region}, {container.channel.location.country}</h2>
           <div className= "col" >
            <div className= "grid bg-black bg-opacity-50 my-5 rounded-xl py-2 border">
              <h1 className='flex items-center justify-center text-7xl font-normal pt-1 '>{container.channel.item.condition.temp}°{container.channel.units.temperature} </h1>
              <p className='flex items-center justify-center text-xs'>{container.channel.item.pubDate}</p>
              <div className='flex items-center justify-around  pt-5 text-xl font-normal'>
                <UilClouds size={70} />
                 
                {container.channel.item.condition.text}
             </div>                            
          </div>
        </div>
      </div>      
        <div className="top">
          <div className="location">
           
            
          </div>
          <div className="temp">
           
          </div>
          <div className="description">
            <p className=''></p>
          </div>
        
        </div>
        <div className="bottom">
          <p className='flex items-center justify-center text-xl font-semibold'>{container.channel.description}</p>
          <div className=" grid grid-cols-3 gap-10 place-content-start p-8  ">
            
              <h1 className='flex flex-col items-center justify-between bg-black bg-opacity-80 text-2xl font-semibold px-4 pt-1 pb-6 rounded-md transition ease-out hover:scale-110'>
              <p className=' flex items-center justify-center text-xs mt-2'><UilSun  size={20} className="mr-1" /> Sunrise</p>  
              {container.channel.astronomy.sunrise}
              </h1>
              <h1 className='flex flex-col items-center justify-between bg-black bg-opacity-80 text-2xl font-semibold px-4 pt-1 pb-6 rounded-md transition ease-out hover:scale-110'>
              <p className=' flex items-center justify-center text-xs mt-2'><UilSunset size={20} className="mr-1" /> Sunset</p>
              {container.channel.astronomy.sunset}
              </h1>
            
              <h1 className=' flex flex-col items-center justify-between bg-black bg-opacity-80 text-2xl font-semibold px-4 pt-1 pb-1 rounded-md transition ease-out hover:scale-110'>
               
               <p class='flex items-center justify-center text-xs mt-2'><UilWind size={19} className='flex mb-1 mr-2' /> Wind Speed </p>
                
                {container.channel.wind.speed} {container.channel.units.speed}
                <p className='flex flex-col items-center justify-between text-xl'>
                  {container.channel.wind.direction}° </p>

              
              </h1>  
              <h1 className='flex flex-col items-center justify-between bg-black bg-opacity-80 text-3xl px-4 pt-2 pb-6 font-semibold rounded-md transition ease-out hover:scale-110'>
               <p className=' flex items-center justify-center text-xs mt-2'> <UilSmile size ={20} className="mr-1" /> Feels Like </p>
                {container.channel.wind.chill}
              </h1> 
              <h1 className='flex flex-col items-center justify-between bg-black bg-opacity-80 text-2xl px-8 pt-2 pb-6 font-semibold rounded-md transition ease-out hover:scale-110'>
               <p className='flex items-center justify-center text-xs mt-2 '><UilCompressArrows size = {19} className = "mr-1" />Pressure</p>
               {container.channel.atmosphere.pressure} {container.channel.units.pressure}
              </h1>
              <h1 className='flex flex-col items-center justify-between bg-black bg-opacity-80 text-3xl px-8 pt-2 pb-6 font-semibold rounded-md transition ease-out hover:scale-110'>
                <p className='flex items-center justify-center text-xs mt-1'><UilTemperature size={19} className="mr-1" /> Humidity</p>
                {container.channel.atmosphere.humidity} %               
              </h1>        
          </div>
          <div className=" grid place-content-start">
          
          </div>

        </div>
        <div className="text-black text-lg">        
         <table class='grid place-content-center  p-15' >
         <tbody className=' bg-white bg-opacity-80 p-2 rounded-md' >
         <tr >
          <td className=' px-10 text-xl font-semibold '> Days  </td>
          <td className='flex px-10 text-xl font-semibold'> High <UilArrowUp size={15}/> </td>
          <td className='px-10 text-xl font-semibold'><p className='flex'>Low<UilArrowDown size={15} /></p>  </td>
          <td className='px-10 text-xl font-semibold'>  </td>
         </tr>        
         { data.map((item,index)=>
          <tr key={index}>
           <td className=' px-11 '>{item.day} </td>
           <td className='px-12'>{item.high}</td>
           <td className='px-11'>{item.low}</td>
           <td className='px-1 py-3'>{item.text}</td>
          </tr>
          )} 
        </tbody> 
       </table>

     </div>
    </div>
    </div>  
  );
}

export default App;
