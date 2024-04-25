import React from 'react'
import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signin/signin.component';

const Shop = () => {
  return (
    <div>
    Shop Store
    </div>
  )
}


const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signin' element={<SignIn/>}/>
        </Route>
        
      </Routes>
      
    </div>
  )
}

export default App