import { useState } from "react";
function App() {
  const[color , setColor] =useState('white')
  return(
    <div className="w-full h-screen " style={{backgroundColor : color}}>
      <div className="fixed flex-wrap flex gap-5 justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center item-center shadow-lg gap-2 bg-white rounded px-3 py-1 rounded-2xl ">
          <button onClick={()=>setColor('red')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize" style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('green')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize" style={{backgroundColor:"green"}}>green</button>
          <button  onClick={()=>setColor('blue')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize " style={{backgroundColor:'blue'}}>blue</button>
          <button  onClick={()=>setColor('yellow')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize " style={{backgroundColor:'yellow'}}>yellow</button>
          <button  onClick={()=>setColor('pink')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize " style={{backgroundColor:'pink'}}>pink</button>
          <button  onClick={()=>setColor('salmon')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize " style={{backgroundColor:'salmon'}}>salmon</button>
          <button  onClick={()=>setColor('purple')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize " style={{backgroundColor:'purple'}}>purple</button>
          <button  onClick={()=>setColor('black')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize " style={{backgroundColor:'black'}}>black</button>
          <button  onClick={()=>setColor('aqua')} className="outline-none px-2 py-1 rounded-full text-white shadow-lg capitalize " style={{backgroundColor:'aqua'}}>aqua</button>
        </div>
      </div>
    </div>
  )
}

export default App
