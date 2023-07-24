import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import About from './Components/About';
import Articles from './Components/Articles';
import ArticlePage from './Components/ArticlePage';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import NavBar from './NavBar';
import Login from './Components/Login';
import Register from './Components/Register';
import "./style.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div className='container-fluid' style={{transition: 1}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/articles' element={<Articles/>}/>
            <Route path='/articles/:articleId' element={<ArticlePage/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
