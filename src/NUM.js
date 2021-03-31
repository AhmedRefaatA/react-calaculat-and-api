import React from 'react';

class NUM extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "value":props.val,
        }
    }

    addNum=() => {
        this.props.EVAL(this.state.value);
    }

    render(){
        return(
            <button onClick={this.addNum}>{this.state.value}</button>
        );
    }
    
}

export default NUM;