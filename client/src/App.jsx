import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TurfDetails from './pages/TurfsDetail';
function App() {


  return (
    <>
      <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/turfs/:turfId" element={<TurfDetails />} />
      </Routes>
      
       </div>
    </>
  )
}

export default App
