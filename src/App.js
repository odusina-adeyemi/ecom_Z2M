import React from 'react'
import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        {/* <Route path='shop' element={<Shop/>}/> */}
        </Route>
        
      </Routes>
      
    </div>
  )
}

export default App