import './Styles/Styles.scss';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';
import NotFound from './Components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/countries/:id' element={<CountryDetails />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
