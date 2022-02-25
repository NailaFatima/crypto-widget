import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';



function App() {
   

  return (
     <Router>
      <div className="App ">
      <Routes>
       <Route element={<Layout/>}>
          <Route exact="true" path='/' />
          <Route exact="true" path='/Section2' />
          <Route exact="true" path='/Section3' />
          <Route exact="true" path='/Section4' />
          <Route exact="true" path='/Section5' />
          <Route exact="true" path='/Section6' />
          <Route exact="true" path='/Section7' />
          <Route exact="true" path='/Section8' />
          <Route exact="true" path='/Documentation' />
       </Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
