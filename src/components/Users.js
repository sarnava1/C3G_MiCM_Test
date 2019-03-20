//this component renders the users to the screen

//importing the dependancies
import React, { Component } from "react";
import '../styles/Users.css';
import '../styles.css';

class Users extends Component {

    constructor() {
        super();
        //the initial state for the data is an empty object and the initial state 
        //for the loading variable is true as the page will load before getting
        //rendered to the screen
        this.state = {
            data: [],       
            loading: true   
        };
    }

    //calling the lifecycle method to fetch the data from api after the componet 
    //has mounted
    componentDidMount() {
      //calling the fetch function passing the url of the api from where we will 
      //load the users data and then we will move on to the promise wherein we will 
      //have to convert the received data into json
      fetch(`https://jsonplaceholder.typicode.com/users`)
         .then(res => res.json()) //transforming the received data to json
         .then(json  => this.setState({
               data: json, //storing the data to component state
               loading: false }), // turninng the loading to be false
              );
    }

    render() {

      let loading;
      
      //if loading then display loading after users
      if(this.state.loading){
          loading = <span>(loading)</span>
      }

      return (
         <div>
            <h1> Users {loading}</h1>
            <div className="container">
                 {this.state.data.map(user => {
                 return (
                   <div key= { user._id } >
                     <h3 className="tooltip">
                     { user.name }
                     <span className="tooltiptext">
                     <b>Street</b> {user.address.street}
                     <br/>
                     <b>Suite</b> {user.address.suite}
                     <br/>
                     <b>City</b> {user.address.city}
                     <br/>
                     <b>Zip</b> {user.address.zipcode}
                     </span>
                     </h3>
                     <p className= "username_right" >{user.username}</p>
                 </div>
                );
             })}
            </div>
        </div>            
        );
    }
}

//exporting the component
export default Users;
