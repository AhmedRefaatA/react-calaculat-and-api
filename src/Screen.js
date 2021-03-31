import React from 'react';


    

class Screen extends React.Component{
        
    render(){
        return(
            <div>
                <h3>{this.props.solution}</h3>
            </div>
        );
    }
}


export default Screen;