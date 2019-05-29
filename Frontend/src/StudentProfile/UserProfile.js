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
       student: []
      };
}

  componentDidMount() {

   // if(localStorage.getItem('user') === null){
       
    //}

        const url= "";
        Request.get("http://192.168.43.113:8080/student/all/")
            .then((response)=>{

                var result = response.body.filter(function(r) { return r["email"] === "andrada.luca@student.utcluj.ro" })[0]||'No record found';
                //window.localStorage.setItem("id",result.id);
                this.setState({
                    student: result
                })
                console.log(this.state.student.cnp);
            })
            .catch(err => {
                this.setState({
                    hasError: true
                })
            })

}

update()
{
   /* const id =  window.localStorage.getItem('id');
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
    */


    Request.post('http://192.168.43.113:8080/student/addOrUpdate/')
        .set('Content-Type', 'application/json')
        .send({
            idStudent: 5,
            email: document.getElementById("email").value,
            idgroup: this.state.student.idgroup,
            anstudiu: this.state.student.anstudiu,
            telefon: document.getElementById("phone").value,
            cnp: this.state.student.cnp
        })
        .then((response)=>{

            console.log(response.body)
        })
        .catch(err => {
            this.setState({
                hasError: true
            })
        })

}



render() {
  const { classes } = this.props;

  const {student} = this.state;

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
                    <button class="btn btn-default btn-lg" onClick={()=>this.update()}>EDIT</button>
                      <a href="http://localhost:3000/studGrade" className="btn btn-default btn-lg">NOTELE MELE</a>
                  </div>
        </div>

        <div class="back">
          <div className={classes.root}>
            <ul class="icons">


                <li>
                    <Chip label="Email" className={classes.chip} />
                    <Chip
                        avatar={<Avatar></Avatar>}
                        label={student.email}
                        clickable
                        className={classes.chip}
                        color="primary"
                    />
                </li>


              <li>
              <Chip label="Nume" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label="Andrada Luca"
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>

              <li>
              <Chip label="CNP" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label={student.cnp}
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>



              <li>
              <Chip label="AN" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label={student.anstudiu}
                    clickable
                    className={classes.chip}
                    color="primary"
                  />
              </li>



              <li>
              <Chip label="TELEFON" className={classes.chip} />
              <Chip
                    avatar={<Avatar></Avatar>}
                    label={student.telefon}
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