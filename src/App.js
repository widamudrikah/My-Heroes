import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './komponen/Home';
import Login from './komponen/Login';
import Register from './komponen/Register';
import { ToastContainer } from 'react-bootstrap';
import DashboardPembaca from './komponen/DashboardPembaca';
import DetailKisah from './komponen/DetailKisah';
import Kisah from './komponen/kisah';
import DashboardAdmin from './komponen/DashboardAdmin';
import TambahKisah from './komponen/TambahKisah';

function App() {
  return (
    <div className="App">

      <ToastContainer>

      </ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/tambah-kisah' element={<TambahKisah/>}></Route>
          <Route path='/dashboard-admin' element={<DashboardAdmin/>}></Route>
          <Route path='/dashboard-pembaca' element={<DashboardPembaca/>}></Route>
          <Route path='/detail-kisah/:id' element={<DetailKisah kisah = {Kisah} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
