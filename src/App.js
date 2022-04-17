import React from 'react'

// 3rd Party Lib
import { BrowserRouter as Router, Routes , Route} from "react-router-dom"

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
