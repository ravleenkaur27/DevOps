import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Options from './Options';
import Questions from './Questions';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
  
<Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Navbar' element={<Navbar/>} />
          <Route path ='/Options' element={<Options/>}/>
          <Route path ='/Questions' element={<Questions/>}/>
          </Routes>
      </Router>
    
  );
}

export default App;
