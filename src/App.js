import Navbar from './component/Navbar/navbar';
import Footer  from './component/Footer/Footer';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Ourteam from './Pages/Ourteam';
import Contactus from './Pages/Contactus';

import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='ourteam' element={<Ourteam/>}/>
      <Route path='contactus' element={<Contactus/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
