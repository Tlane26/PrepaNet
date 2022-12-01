import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Login from './pages/Login';
import Campus from './pages/Campus';
import Dashboard from './pages/Dashboard';
import InfoPeriodo from './pages/InfoPeriodo';
import InfoTalleres from './pages/InfoTalleres';
import ClaseABC from './pages/ClaseABC';
import Cursos from './pages/Cursos';
import Periodo from './pages/Periodo';
import DenseTable from './pages/FilteredTable';
import DCursos from './pages/deb';
import DashboardC from './pages/DashboardC';
import InfoTalleresCoo from './pages/infoTalleresCoo';

function App() {
  const RequireAuth = ({children}) => {
    console.log("jjj");
    return <Navigate to="/login"/>
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboardC" element={<DashboardC />} />
            <Route path="/table" element={<InfoTalleres />} />
            <Route path="/tableC" element={<InfoTalleresCoo />} />
            <Route path="/redirect" element={<DCursos />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <Login />
    // <Campus />
    // <Dashboard />
    // <InfoPeriodo />
    // <InfoTalleres />
    // <ClaseABC />
    // <Cursos />
    // <Periodo />
    // <DCursos />
  );
}

export default App;
