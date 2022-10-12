import './App.css';
import Header from './Components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import RegisterationScreen from './screens/RegisterationScreen';
import ToDoScreen from './screens/ToDoScreen';
import { useState } from "react";

function App() {
  const[user, setUser] = useState(null);
  return (
    <Router>
       <Header user={user} setUser={setUser} />
       <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen setUser={setUser}/>} exact></Route>
            <Route path='/registeration' element={<RegisterationScreen setUser={setUser}/>}></Route>
            <Route path='/todo' element={<ToDoScreen setUser={setUser}/>}></Route>
          </Routes>
        </Container>
       </main>
    </Router>
     
    
  )
}

export default App;
