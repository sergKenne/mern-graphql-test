import React, {useState} from 'react'
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from './pages/Detail';
import { Routes, Route } from "react-router-dom";



function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
      <div className="App">
          <Header setSearchInput={setSearchInput} />
          <main>
              <Routes>
                  <Route path="/" exact element={<Home searchInput={searchInput} />} />
                  <Route path="/:id" element={<Detail />} />
              </Routes>
          </main>
      </div>
  );
}

export default App;
