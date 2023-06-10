import React from "react";
import Option from "./Option";

class Options extends React.Component{

    render(){
        return(
            <div>
                Options: 
                {this.props.options.map((option)=>(
                    <Option key={option} optionText={option}/>
                ))}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        )
    }
}

export default Options;