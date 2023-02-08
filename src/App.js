
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// komponentler buraya gelecek
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
// React Router DOM
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
  <>

  <BrowserRouter>
  < div className='Wrapper'>
      <Navbar />
      </div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
  
     <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
