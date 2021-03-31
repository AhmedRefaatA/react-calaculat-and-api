import React from 'react';
import {  Card , Button, CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './Api';

class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
            
        }
    }

    render(){
        return(
            <div>
                <h1>Movie List</h1>
                <button onClick={async (e)=> this.setState( { movies : await API.getMovies()})}>Get Movies</button>
                <CardGroup>
                    {  
                        this.state.movies.map( movie => 
                        <Card key={movie.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.avatar} />
                            <Card.Body>
                                <Card.Title>{movie.first_name} {movie.last_name}</Card.Title>
                                <Card.Text>
                                    <h4>email: {movie.email}</h4>
                                      Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        )
                    
                }   
                                 
                </CardGroup>
            </div>
        );
    }
}

export default Movie;