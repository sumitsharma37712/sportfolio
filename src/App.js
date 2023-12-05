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
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
       {/*  <Route path='/service' element={<h1>this is services pages</h1>}></Route>
        <Route path='/project' element={<h1>this is project pages</h1>}></Route>*/}
        <Route path='/contact' element={<Contact/>}></Route> 
        <Route path="*" element={<NoPage  />}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
