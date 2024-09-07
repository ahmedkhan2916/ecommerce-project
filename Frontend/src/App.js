
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import Purchasing_page from './pages/Purchasing_page.js';
import Login from './pages/login.js';
import Signup from "./pages/signup.js";

function App() {

  // const [log,setLogin]=useState(1)


  return (



    
    <div className="App">

{/* { log ? (
                   <Signup></Signup>
                ) : (

                    <Navbar></Navbar>
                )
} */}

<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Purchasing_page/>}/>
        <Route path="users/login" element={<Login/>}/>
        <Route path='users/signup' element={<Signup/>}></Route>
      
      </Routes>
    </Router>


    </div>
  );
}

export default App;
