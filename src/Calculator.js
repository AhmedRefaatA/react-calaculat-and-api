
import React from 'react';
import Core from './core';
import Screen from './Screen';




    class Calculator extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                "solution":""
            };
        }

        handleChnage = (change)=>{
          this.setState({solution:change})
        }

        render(){
            return(
                <div style={{"position":'absolute',"left":"500px", "height":"600px", "width":"600px,"}}>
                    <Screen solution={this.state.solution } />
                    <Core solve={this.handleChnage}/>
                </div>
            );
        }

    }

export default Calculator;
