import React from 'react';


class OPT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "symbol":props.sym,
        }
    }
    
    addOpt = () => {
      this.props.EVAL(this.state.symbol);
    }

    render(){
        return(
            <button onClick={this.addOpt}>{this.state.symbol}</button>
        );
    }
}


export default OPT;