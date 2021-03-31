import React from 'react';

class API extends React.Component{

    static async Login(user){
        let response = await fetch('https://reqres.in/api/login',{method:"POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(user)});
        let resObj = await response.json()
        return resObj;
    }

    static async getMovies(){
        let response = await fetch('https://reqres.in/api/users?page=2',{method:'GET', headers:{'content-type':'application/json'}} );
        let resObj = await response.json();
        return resObj.data;
    }
}


export default API;