import React from 'react';
import NUM from './NUM'
import OPT from './OPT'

class Core extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "mathEx":""
        }
    }



    AddNum = (num)=>{
      this.state.mathEx += num;
      this.props.solve(this.state.mathEx);
    } 

    AddOpt = (opt)=>{
      let symbols="+-*./%"
      if(symbols.indexOf(this.state.mathEx[this.state.mathEx.length-1]) !== -1){

          this.state.mathEx = this.state.mathEx.substr(0,this.state.mathEx.length-1)
      }
      switch(opt){
          case "+":
          case "-":
          case "/":
          case "%":
          case ".":
              if(this.state.mathEx.indexOf(opt) === -1)
                    this.state.mathEx += opt;
              break;
          case "x":
              this.state.mathEx += "*";
              break;
          case "c":
              this.state.mathEx = this.state.mathEx.substr(0,this.state.mathEx.length - 1); 
              break;
          case "AC":
              this.state.mathEx = "";
              break;
          case "=":
              this.state.mathEx = String(eval(this.state.mathEx));
              break;
          default:
              break;
      }
      this.props.solve(this.state.mathEx);

    }

    render(){
        return(
            <table>
                <tr>
                    <th><OPT sym="AC" EVAL={this.AddOpt} /></th>
                    <th><OPT sym="c" EVAL={this.AddOpt} /></th>
                    <th><OPT sym="%" EVAL={this.AddOpt} /></th>
                    <th><OPT sym="/" EVAL={this.AddOpt} /></th>
                </tr>
                <tr>                        
                    <th><NUM val="7" EVAL={this.AddNum} /></th>
                    <th><NUM val="8" EVAL={this.AddNum} /></th>
                    <th><NUM val="9" EVAL={this.AddNum} /></th>
                    <th><OPT sym="x" EVAL={this.AddOpt} /></th>
                </tr>
                <tr>                        
                    <th><NUM val="4" EVAL={this.AddNum} /></th>
                    <th><NUM val="5" EVAL={this.AddNum} /></th>
                    <th><NUM val="6" EVAL={this.AddNum} /></th>
                    <th><OPT sym="-" EVAL={this.AddOpt} /></th>
                </tr>
                <tr>                        
                    <th><NUM val="1" EVAL={this.AddNum} /></th>
                    <th><NUM val="2" EVAL={this.AddNum} /></th>
                    <th><NUM val="3" EVAL={this.AddNum} /></th>
                    <th><OPT sym="+" EVAL={this.AddOpt} /></th>
                </tr>
                <tr>                        
                    <th colSpan="2"><NUM val="0" EVAL={this.AddNum} /></th>
                    <th><NUM val="." EVAL={this.AddOpt} /></th>
                    <th><NUM val="=" EVAL={this.AddOpt} /></th>
                </tr>
            </table>
        );
    }

}

export default Core