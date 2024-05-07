// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// import "@fontsource/poppins"
import './asset/css/style.css'
import Nav from './Component/nav'
import NoPage from './Component/nopage'
import Home from './Component/home'
import About from './Component/about'
import Contact from './Component/contact'
import Footer from './Component/footer'
import Project from './Component/project'
import Service from './Component/services'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  Aos.init();
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route> 
        <Route path="*" element={<NoPage  />}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
