import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <div className="App">

                <Route path='/' exact={true} component={} />
                <Route path='/medlife' component={} />

              </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
