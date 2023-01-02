import './Styles/Styles.scss';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/blogs/:id' element={<BlogDetails />}/>
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
