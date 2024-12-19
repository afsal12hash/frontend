import {Routes,Route} from 'react-router-dom'

import Nav from "./components/nav";

import About from './components/about'

import Home from './components/home'

import Profile from "./components/profile";

import Contact from "./components/contact";


function App() {
  return (
    <div className="App">
      <div>
      
        <Nav />
      
      </div>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/profile'element={<Profile/>}/>
        <Route path='/contact'element={<Contact/>}/>
  
      </Routes>
    </div>
  );
}

export default App;
