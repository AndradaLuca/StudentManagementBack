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

import Professor from './components/Professor/Professor'

import Login from './login/Login';
import SecretaryHeader from './secretary/SecretaryHeader';
import StudentsManagement from './secretary/StudentsManagement';
import TeachersManagement from './secretary/TeachersManagement';
import ExamSession from './secretary/ExamSession';



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

                      <Route path='/professor' component={Professor} />

                      <Route path='/login' component={Login}/>
                      <Route path='/secretariat' component={SecretaryHeader}/>
                      <Route path='/secretariat/studenti' component={StudentsManagement}/>
                      <Route path='/secretariat/profesori' component={TeachersManagement}/>
                      <Route path='/secretariat/sesiune' component={ExamSession}/>


                  </div>
          </BrowserRouter>
        </div>
  );
}
}


export default withStyles(componentsStyle)(App);
