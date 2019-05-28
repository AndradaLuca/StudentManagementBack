import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import Button from "../../components/CustomButtons/Button";
import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";
// import Request from 'superagent';

class HeaderLinks extends React.Component {

  name='';

  constructor(props) {
    super(props);
     this.state = { 
       user: [],
       name: ' ',
       currentMail: '',
 
      };
    this.managementProfesori = this.managementProfesori.bind(this)
    this.managementStudenti = this.managementStudenti.bind(this)
    this.planificareSesiune = this.planificareSesiune.bind(this)
  }

  componentDidMount() {
    let logat = document.getElementById("logat");
    let nelogat = document.getElementById("nelogat");
    let name = ' ';

    // const id =  window.localStorage.getItem('id');
    // const mail =  window.localStorage.getItem('user');
    // const url= "http://127.0.0.1:8000/user/getid/" + id;
       
    //   Request.get(url)
    //   .then((response)=> {
    //         if(response.body.user !== null){
    //           this.setState({user: response.body.user, currentMail:mail});
    //           name = response.body.user.name;
    //           document.getElementById('nume').innerHTML = name;
    //         }
    //         else{
    //           document.getElementById('nume').innerHTML = 'user_logat';
    //         }
    //   })

     const user = localStorage.getItem('user');

    if(user === null){
      logat.style.display = "block";
      nelogat.style.display = "none";
    }
    else {
      logat.style.display = "none";
      nelogat.style.display = "block";
      }
  }

  logout(){
    localStorage.clear();
  }

  // secretariat
  managementProfesori() {

  }

  managementStudenti() {

  }

  planificareSesiune() {

  }

  render(){
  const { classes } = this.props;
  return (
    <List className={classes.list}>
     
      <div id='logat'>
        <Button href='/profesori' onClick={this.managementProfesori}> Profesori </Button>
        <Button href='/studenti' onClick={this.managementStudenti}> Studenti </Button>
        <Button href='/sesiune' onClick={this.planificareSesiune}> Sesiune </Button>

        <Button href="/user-profile" color="transparent">
            <b id='nume'></b>
        </Button>

        <Button href="/" onClick={()=>this.logout()}>Logout</Button>
      </div>

      <div id='nelogat'>
        <Button href="/login">Login</Button>
        <Button href="/register">Register</Button>
      </div>
    </List>
  );
}
}

export default withStyles(headerLinksStyle)(HeaderLinks);
