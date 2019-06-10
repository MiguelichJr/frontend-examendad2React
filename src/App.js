import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Padre from './padre';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Padre} />
    </Router>
  );
}

export default App;
