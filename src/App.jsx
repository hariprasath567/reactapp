import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import Sample from './Sample'
import GridView from './GridView'
import Todo from './Todo'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home'; // Import the Home component

const profileLst = {
  name: "hari prasath",
  Department: "AI&DS",
  year: 2,
  mobile: 8436524610,
  address: "rvs college,sulur,coimbatore",
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ProfileCard profile={profileLst}/>
    <Sample/>
    <GridView/>
    <Todo/> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profilecard" element={<ProfileCard profile={profileLst}/>} />
        <Route path="/gridview" element={<GridView />} />

       
      </Routes>
    </BrowserRouter>
    </>
    
  )
}


export default App
