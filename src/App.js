import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/User/user/Login';
import RequireAuth from './Components/User/user/RequireAuth'

import Notfound404 from './Components/User/Notfound404';
import Inventory from './Components/Inventory/Inventory';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blog';
import Register from './Components/User/user/Register';
import { ToastContainer } from 'react-toastify';
import ManageInventory from './Components/Inventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
    
        <Route path='*' element={<Notfound404></Notfound404>} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={<div className='page-about'>
          <About></About>
        </div>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>
        } />
        <Route path='/inventory/:id' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>
        } />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
