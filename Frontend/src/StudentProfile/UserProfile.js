import React from "react";
import './flip.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Request from 'superagent';

const axios = require("axios");

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class FlippingCardPage extends React.Component {

  constructor(props) {
    super(props);
     this.state = { 
       phone: '', 
       email:'',
       user: []
      };
}

  componentDidMount() {

    if(localStorage.getItem('user') === null){
       
    }
    else{
        const url= "";
        Request.get(url)
          .then((response)=> {
            //
          })
      }
}

update()
{
    const id =  window.localStorage.getItem('id');
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    if(phone !== '' || email !== ''){

          let objBody =  {  
            phone:phone,
            email: email,
            };

            let url = '';        
            let method = 'PUT';
            
            fetch(url, {
              method: method,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(objBody)
            })

            alert("Update succesful!");

            window.location.href="/profile"
   
    }
    else{
      alert('Nu e nimic de editat');
    }
}



render() {
  const { classes } = this.props;
  return (
    <div>
    <div class="card-container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="card">

        <div class="front">
          <div class="cover"></div>
          <h3 class="name"> NAME</h3>
          <p class="role"></p>
          <div class="supporting_text">
            <span></span>
          </div>
         
          <form className={classes.container} noValidate autoComplete="off" class="center-form">
              <form className={classes.root} autoComplete="off">


                  <TextField
                    id="email"
                    label="email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                  />

                  <TextField
                    id="phone"
                    label="phone"
                    className={classes.textField}
                    type="phone"
                    name="phone"
                    autoComplete="phone"
                    margin="normal"
                    variant="outlined"
                  />


              </form>
          </form>
          
                  <div class="mdl-card__actions mdl-card--border mdl-typography--text-center">
                    <button class="btn btn-default btn-lg" onClick=''>EDIT</button>
                  </div>
        </div>

        <div class="back">
          <div className={classes.root}>
            <ul class="icons">

              <li>
              <Chip label="Nume" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label='nume'
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>

              <li>
              <Chip label="CNP" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label='CNP'
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>

              <li> 
              <Chip label="GRUPA" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label='GRUPA'
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>

              <li>
              <Chip label="AN" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label='AN'
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>

              <li>
              <Chip label="MAIL" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label='MAIL'
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>

              <li>
              <Chip label="TELEFON" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label='TELEFON'
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
</div>

    );
  }
}

FlippingCardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlippingCardPage);