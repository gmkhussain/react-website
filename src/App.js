import React from 'react'

// 3rd Party Lib
import { BrowserRouter as Router, Routes , Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import "animate.css/animate.min.css";

import "./App.css";


// Layouts
import DefaultLayout from './views/frontend/layouts/DefaultLayout'

import HomePage from './views/frontend/pages/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<DefaultLayout>  <HomePage /> </DefaultLayout> } />
          <Route exact path="/contact" element={<DefaultLayout> <p>"Contact"</p> </DefaultLayout> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
