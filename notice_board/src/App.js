import React from 'react';
import {  Routes, Route } from 'react-router-dom';
 
import BoardList from './components/BoardList';
import BoardNew from './components/BoardNew';
import BoardContent from './components/BoardContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<BoardList />} />
          <Route path='/BoardNew' element={<BoardNew/>} />
          <Route path='/BoardContent' element={<BoardContent/>} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
