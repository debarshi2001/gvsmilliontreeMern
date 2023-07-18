import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from './Components/Members/Members';
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="" element={<Home />}>
            <Route index element={<Members />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
