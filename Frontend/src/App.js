import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "./assets/jss/material-kit-react/views/components";
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Note from './Note/Note';
import Header from "./components/Header/Header";
import HeaderLinks from './components/Header/HeaderLinks';
import UserProfile from './StudentProfile/UserProfile';

import Home from './components/Home'
import StudentGrade from './components/StudentGrade'
import Login from './login/Login';


class App extends Component {


  render(){
    const { classes, ...rest } = this.props;
     return(
        <div className="App">

            <Header
              brand="SINU"
              rightLinks={<HeaderLinks />}
              fixed
              color="black"
              changeColorOnScroll={{
                height: 400,
                color: "black"
              }}
              {...rest}
            />

          <BrowserRouter>
                  <div className="App">

                      <Route path='/' exact={true} component={Home} />
                      <Route path='/studGrade' component={StudentGrade}/>
                      <Route path='/profile' component={UserProfile} />
                      <Route path='/login' component={Login}/>

                  </div>
          </BrowserRouter>
        </div>
  );
}
}


export default withStyles(componentsStyle)(App);
