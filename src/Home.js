import React from 'react';
import API from './Api';
import {Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                email:"",
                password:""
            },
            token:""
        }
    }

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                {this.state.token && <Alert variant="info"> <Alert.Heading>Login status:</Alert.Heading> <p> {this.state.token}</p> </Alert>}
                <input type="email"  onChange={e=>this.setState(state=>{this.state.user.email = e.target.value})} />
                <input type="password" onChange={e=>this.setState(state=>{this.state.user.password = e.target.value})} />
                <button onClick={async(e)=> this.setState({token: JSON.stringify( await API.Login(this.state.user) ) } )} > Login </button>
                <button onClick={()=>this.setState({token:""})}>Logout</button>
                <br/>
            </div>
        );
    }

}


export default Home;