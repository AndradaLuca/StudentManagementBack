import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import StudentGrade from './components/StudentGrade'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <div className="App">

                <Route path='/' exact={true} component={Home} />
                <Route path='/studGrade' component={StudentGrade}/>


              </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
