import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Membership from './components/Membership/Membership';
import Photos from './components/Photos/Photos';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>} />
          <Route path="membership" element={<Membership/>} />
          <Route path="photos" element={<Photos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
